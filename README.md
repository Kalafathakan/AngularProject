# Falcons Angular Project

## Heroku link to the website:
https://falcons-restaurant.herokuapp.com/

### Login Info
- Admin: admin@gmail.com
- Password: 12345

## Project Task List
### Zafer Hakan Kalafat / N01468413:
#### -Created the main architecture of the project
#### -Assigned everyone with their pages and tasks
#### -Established the github repo 
#### -Established all the NAVIGATION AND ROUTES
#### -Contributed in help of creation of the REGISTER part
#### -Contributed in help of creating API that also supports GALLERY and DEALS&PROMOTIONS PAGE

#### - [Home Page](https://falcons-restaurant.herokuapp.com)
The home page consumes the images API to display business hours image and providing information of who we are.
#### - [About Page](https://falcons-restaurant.herokuapp.com/about)
The about page consumes the API to display the development team.
#### - [FAQ](https://falcons-restaurant.herokuapp.com/faq)
The FAQ page consumes the API to display the questions and answers in the accordion UI.

*******************************************************************

### Oreoluwa Lawal / N01452264:
#### - [Bookings Page](https://falcons-restaurant.herokuapp.com/bookings)
The booking page (Booking.tsx) utilizes an API which stores the date, time, name, email and phonenumber. The booking API contains route to get all bookings and save a booking to the database.
In the react app, I use react-calender to display calender and user can only reserve/book within 2 weeks from the current date, they are not able to click any date outside the 2 weeks period. When a user select a date, we get the bookings from the api and check if a reservation is made for that date and filters out the time slot so only the available timeslot is displayed in the select time slot option.
Then user enters their contact info. Once the a booking is made, a thank you page (Thankyou.tsx) is displayed and the details are sent to the users email.
#### - [Contact Page](https://falcons-restaurant.herokuapp.com/contact)
The contact page (Contact.tsx) utilizes nodemailer in the express app, when a user input their inquiry and details, it accesses the API route and an email is sent to the admin(Oreoluwa) with the users details and inquiry, while a followup email is sent to the user informing them that their inquiry has been received.
#### - [Subscription & Newsletter Page](https://falcons-restaurant.herokuapp.com/subscribe)
The subscription page (Subscribe.tsx) utilizes an API which stores subscribers firstname and email to our database. The newsletter API contains route to save a subscriber to the database. The express app uses nodemailer to send an email to the user.
In the react app when user enters their name and email and clicks subscribe, it accesses the API route and saves the information, if successful an email is sent welcoming the user.

*******************************************************

### Guray Demirezen / N01451141:
#### Created a User API

#### - [Registration Page](https://falcons-restaurant.herokuapp.com/register)
In this page, if user tries to register with an email that is already registered, it will say this email already exists and to please log in. We also have validations that checks user's input whether it meets the requirements during the registration
![image](https://user-images.githubusercontent.com/83139326/177656752-7bfefccd-5477-4c6f-a861-464b87c4e8fa.png)


#### - [Log In Page](https://falcons-restaurant.herokuapp.com/login)
In this page, if the user tries to log in to an account that has not been registered yet, it will say the account does not exist, register first! If user enters wrong password, it will say password is wrong.
![image](https://user-images.githubusercontent.com/83139326/177656728-ef93a9c2-22c0-4c9f-a8bf-cce8aa398754.png)


#### - [Admin Panel](https://falcons-restaurant.herokuapp.com/admin-menu)
Route protected. User cannot see the admin panel if the account's type is not admin. When creating a new food, if user uses the food id that already exists then new food id will be generated by itself automatically. Admin can search by customer name in the order history page. The admin panel has 2 pages which are editing menu and displaying all orders.
![image](https://user-images.githubusercontent.com/83139326/177656803-34c135f4-b4dd-49ba-a697-16e3e88849fe.png)
![image](https://user-images.githubusercontent.com/83139326/177656825-aa6f725e-7727-4435-a607-7421bdeb7360.png)

***************************************************************

### Vishnu Pillai / N01454618:
#### - Used Photoshop to create the Logo and Favicon
#### - Created the API for menu and orders
#### - Deployed the website and server API to Heroku
#### - [Menu Page](https://falcons-restaurant.herokuapp.com/menu)
The menu page utilizes an API which stores a food ID, food name, price, description, category, and image. It has routes to get all food, get food by id, update food, and delete food. In React, there are two components: Food and MenuAPI. 
The "Food" component uses JSX to format how the food boxes look in the menu. It retrieves the food image from the API. Axios is used in the "MenuAPI" component to send a GET request to this API. This menu page allows users to search for food by name, add items to cart, and remove items from cart. 
#### - [Cart Component](https://falcons-restaurant.herokuapp.com/menu) (It is in the bottom of the menu)
The cart on the website uses 4 components together: Cart, CartItem, CheckoutForm, and MenuAPI. The cart uses the MUI library for styling the buttons and other features such as the popup that appears on the side (using [Drawer](https://mui.com/material-ui/react-drawer/#main-content)) and the counter on the cart button (using [Badge](https://mui.com/material-ui/react-badge/#main-content)). 
First, the Cart component is what the cart actually looks like. It contains the HTML and JSX for the cart with a method to handle items that are added and another method to calculate the total price. This component has the CartItem and CheckoutForm components embedded inside.
The CartItem component displays each food product inside the cart using HTML and JSX.
The CheckoutForm is just a form with methods for handling when the name and phone number text fields have text entered in them and a method for handling when the form is submitted. The name and phone number fields use HTML validation. The handleSubmit method sends the data using a POST request to the orders page.
Lastly, MenuAPI contains states to store the cart and uses useEffect to store the cart in local storage as well, so that the cart remains even when the user goes to another page or refreshes. This component has methods to handle when cart items are added or removed.
#### - [Order Page](https://falcons-restaurant.herokuapp.com/orders)
The orders page utilizes an API which stores an email address, name, phone number, cart, total price, and the date. There are two components: OrderAPI and OrderTable. OrderAPI has a GET request to retrieve all orders based on the user's email address (which is stored in local storage). It only works if the user is logged in, otherwise displays a message for them to login.
The OrderTable component simply displays a table with the data using props.

***************************************************************

### Nicholas Keller-Sedan / N01467921:
#### - used photoshop to create the Deals and Promotions image and the Business Hours image
#### - Created the API for the REVIEWS, GALLERY, and DEALS&PROMOTIONS pages
#### - [Deals & Promotions Page](https://falcons-restaurant.herokuapp.com/deals)
The deals and promotions page consumes the images API which stores a bunch of the images we have used within hte project to display our restaurants deals image that was created in Photoshop.
#### - [Reviews Page](https://falcons-restaurant.herokuapp.com/reviews)
The Reviews page consumes the reviews API to display all the reviews that our restaurant has recieved from customers. The API is consumed by a form which allows customers to enter the name, a star rating, and leave a review. On submission provided all fields are not empty it will add it to the API and display it in the reviews section. It is then able to be sorted by star rating through the drop down menu provided.
#### - [Gallery](https://falcons-restaurant.herokuapp.com/gallery)
The gallery page consumes the images API which stores a bunch of the images we have used within the project to display images about our restaurant.
