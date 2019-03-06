# sequelizedBurger
* Portfolio : https://yoonheekim.github.io/YoonPortfolio/
* Heroku : https://sequelizedburger-yh.herokuapp.com/

## Overviews
1. Sequelize the Burger app I made last.
    * Burger (Using mysql, orm)
    * https://github.com/yoonheekim/burger
    ```
    * Restaurant app that lets users input the names of burgers they'd like to eat.
    * Whenever a user submits a burger's name, app displays the burger on the left side of the page -- waiting to be devoured.
    * Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
    * Your app stores every burger in a database, whether devoured or not.
    ```
2. Burger logger with Sequelize, Node, Express and Handlebars
3. Each burger in the waiting area also has a Devour it! button with customer's name input. when the user click the button, the burger will move to the right side of the page with who ate the burger.

## Technologies
> Node.js, Github, Heroku, npm packages(sequelize, express, express-handlebars, mysql2), html, javascript, Jquery, Bootstrap

## Associations
1. Added in a Customer Association to the project and connecting it with Burger model
```
burger belongsTo Customer
Customer hasMany Burger
```
2. Burger include: [Customer]

## Screenshot
![alt text](https://yoonheekim.github.io/YoonPortfolio/img/sequelizedburger.jpg)

## Problems
* 
