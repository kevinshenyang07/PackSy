# Packsy

[Explore Packsy](https://packsy.herokuapp.com)

Packsy is a single-page e-commerce web application that's inspired by Etsy. A user can view items on Packsy, add items to the cart, make purchases and leave reviews.

It uses Ruby on Rails on the backend, a Postgres database, and React / Redux on the frontend. It conforms to the general styles of Etsy but at the same time use Material Design to enhance user experience.

![Packsy](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/packsy.png)

## Features and Implementation

### Item Index With Filters

Filters are strategically placed on the left and upper-right part of the item index page. User can combine arbitrary number of filters to quickly narrow down their choices.

![Item Index](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/item_index.png)

![Item Index With Filters](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/filters.png)

### From Item Show Page to Purchase - Shortening the Path

In the item show page, a user can chose to directly finish their purchase (similar to Amazon's one-click ordering) or add it the cart.

![Item Page](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/item_page.png)

![Cart Page](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/cart_page.png)


### Auto-complete Search Bar

Packsy has a site-wide search bar that can be accessed from every page. The search bar was implemented with Postgres full-text search on the backend and fuzzy matcher on the frontend.

![Auto-complete](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/autocomplete_search.png)

![Search Result](https://github.com/kevinshenyang07/packsy/blob/master/app/assets/images/search_result.png)

## Future Features

### Chatbot Support

Many people prefer chatting over reading notes. Based on the common queries of users, the chatbot can be implemented by providing predefined "intentions" and "response rules".

### Item Recommendations

Using previous purchasing data to recommend items has been proved to be a very effective way to increase amount per order. I will use a mix of item-item and user-item collaborative filtering to get a desirable recommendation system.