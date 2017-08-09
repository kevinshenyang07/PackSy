# Packsy

[Explore Packsy](https://packsy.herokuapp.com)

Packsy is a single-page e-commerce web application that's inspired by Etsy. A user can view items on Packsy, add items to the cart, make purchases and leave reviews.

It uses Ruby on Rails on the backend, a Postgres database, and React / Redux on the frontend. It conforms to the general styles of Etsy but at the same time apply the Material Design to enhance user experience.

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398918/screenshots/packsy.png" style="width: 400px" />

<img src="https://res.cloudinary.com/kevinsy07/image/upload/v1501398910/screenshots/signup.png" style="width: 400px" />

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

![Item Index](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/item_index.png)

![Item Index With Filters](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/filters.png)

### From Item Show Page to Purchase - Shortening the Path

In the item show page, a user can chose to directly finish their purchase (similar to Amazon's one-click ordering) or add it the cart.

![Item Page](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/item_page.png)

![Cart Page](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/cart_page.png)

Use Javascript ES6's feature ```Promise``` to make sure the "Buy it Now" action is executed in correct order:

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
    this.props.history.push('/');
  }
}
```

### Manage Modal with Redux

### Auto-complete Search Bar

Packsy has a site-wide search bar that can be accessed from every page. The search bar was implemented with Postgres full-text search on the backend and fuzzy matcher on the frontend.

![Auto-complete](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/autocomplete_search.png)

![Search Result](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/search_result.png)


#### Discussion On Using Google's Libarary 'Material-UI'

Overall, Material-UI does a good job on implementing the material design. It offers a wide range of components that comes with beautiful animations. It takes care of the abstraction of many common widgets and save me some time in the development of this project.

But I would say it would be a better idea to do it from scratch in bigger projects. This library uses inline styling CSS to make sure its components won't get out of shape, but it is at cost of suboptimal performance and lack of responsiveness. Generally, most of the style settings should be in stylesheets, which makes browser easier to render and elements in the page to be more predictable.

## Future Features

### Chatbot Support

Many people prefer chatting over reading notes. Based on the common queries of users, the chatbot can be implemented by providing predefined "intentions" and "response rules".

### Item Recommendations

Using previous purchasing data to recommend items has been proved to be a very effective way to increase amount per order. I will use a mix of item-item and user-item collaborative filtering to get a desirable recommendation system.
