# Packsy

[Explore Packsy](https://packsy.herokuapp.com)

Packsy is a single-page e-commerce web application that's inspired by Etsy. A user can view items on Packsy, add items to the cart, make purchases and leave reviews.

It uses Ruby on Rails on the backend, a Postgres database, and React / Redux on the frontend. It conforms to the general styles of Etsy but at the same time apply the Material Design to enhance user experience.

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398918/screenshots/packsy.png" width="600" />

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398910/screenshots/signup.png" width="600" />

## Features and Implementation

### Item Index With Filters

Filters are strategically placed on the left and upper-right part of the item index page. User can combine arbitrary number of filters to quickly narrow down their choices.

Using a combination of React's lifecycle methods to distinguish request by index or by keyword:

```javascript
componentDidMount() {
  // pathname : /search/keyword
  const pathname = this.props.location.pathname;
  this.fetchResult(pathname);
}

componentWillReceiveProps(nextProps) {
  if (this.props.location.pathname !== nextProps.location.pathname) {
    const pathname = nextProps.location.pathname;
    this.fetchResult(pathname);
  }
}

fetchResult(pathname) {
  if (pathname.startsWith("/search/")) {
    const paths = pathname.split('/');
    const searchText = paths[paths.length -1];
    this.props.fetchSearchedItems(searchText);
  } else if (pathname === "/items") {
    this.props.fetchItems();
  }
}
```

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398917/screenshots/item_index.png" width="600" />

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398903/screenshots/filters.png" width="600" />


### From Item Show Page to Purchase - Shortening the Path

In the item show page, a user can chose to directly finish their purchase (similar to Amazon's one-click ordering) or add it the cart. The challenge here is to handle different situations after a user click one of the two buttons.

The flow to handle the click is listed below:
1. If a user hasn't logged in, open the login modal (by sending a modal state update to Redux).
2. If the item is already in the cart, add that quantity to that cart item (handled by Rails cart_items_controller).
3. If the item is not in the cart, create a new cart item (handled by Rails cart_items_controller).

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398902/screenshots/item_page.png" width="600" />

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398908/screenshots/purchase_page.png" width="600" />

Hence, Packsy uses Javascript ES6's feature ```Promise``` to make sure the "Buy it Now" action is executed in correct order.

```javascript
handlePurchase(cartId) {
  this.props.updateCart({id: cartId, purchased: true})
  .then(() => this.props.createCart({
    user_id: this.props.currentUser.id
  }))
  // error handling can also be conveniently added to a promise using .fail()
  .then(() => this.props.history.push('/purchases'));
  }

handleBuyItNow(e) {
  if (this.props.currentUser) {
    // add to cart
    const carts = this.props.carts;
    const cart = this.getMostRecentCart(carts);
    const cartItem = {
      cart_id: cart.id,
      item_id: parseInt(this.props.itemId),
      item_quantity: parseInt(this.state.quantity)
    };
    this.props.addCartItem(cartItem)
      .then(() => this.handlePurchase(cart.id));
  } else {
    this.props.showModal();
  }
}
```

### Manage Modal with Redux

To avoid writing a modal for each button and race conditions for different modals, Packsy uses redux to manage the state of modal. It implements a ```ModalReducer```, a few modal actions including ```showModal``` and ```hideModal```, and a React component ```Dialog```.

The ```Dialog``` component behaves exactly the same as other portal-based implementations of React modals. It stays with a regular component and remains hidden until redux update its ```modalOpen``` state and pass that as a updated prop.

```JavaScript
// use .setState() to trigger re-rendering on click
handleOpen(modalType) {
  const logIn = (modalType === "LOG_IN") ? true : false;
  this.setState({ logIn }, () =>
    this.props.showModal(modalType)
  );
}

// in render function, use .bind() to open different modals using one method
return (
  <FlatButton label="Log In" className="secondary"
    onTouchTap={this.handleOpen.bind(this, "LOG_IN")} />
  <FlatButton label="Sign Up" className="primary"
    onTouchTap={this.handleOpen.bind(this, "SIGN_UP")} />

  <Dialog
    modal={true}
    open={Boolean(this.props.modalOpen)}
  >
)
```

### Auto-complete Search Bar

Packsy has a site-wide search bar that can be accessed from every page. The search bar was implemented with Postgres full-text search on the backend and fuzzy matcher on the frontend.

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398898/screenshots/autocomplete_search.png" width="600"/>


#### Discussion On Using Google's Libarary 'Material-UI'

Overall, Material-UI does a good job on implementing the material design. It offers a wide range of components that comes with beautiful animations. It takes care of the abstraction of many common widgets and save me some time in the development of this project.

But I would say it would be a better idea to do it from scratch in bigger projects. This library uses inline styling CSS to make sure its components won't get out of shape, but it is at cost of suboptimal performance and lack of responsiveness. Generally, most of the style settings should be in stylesheets, which makes browser easier to render and elements in the page to be more predictable.

## Future Features

### Chatbot Support

Many people prefer chatting over reading notes. Based on the common queries of users, the chatbot can be implemented by providing predefined "intentions" and "response rules".

### Item Recommendations

Using previous purchasing data to recommend items has been proved to be a very effective way to increase amount per order. I will use a mix of item-item and user-item collaborative filtering to get a desirable recommendation system.
