
HOSTED LINK:

WORKING FLOW:

https://www.veed.io/view/ddd1d9b9-5d72-420c-9dfd-7b7de73e9e10?panel=share

UI LINK:

https://aaqibbashirmir.github.io/MCT04_TEAM02/ANKIT_PAYMENTintegration/public/

UI:
<img width="1424" alt="Screenshot 2023-11-17 at 11 07 01 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/5784e123-fe43-431e-9c0b-692dcf946863">
<img width="1424" alt="Screenshot 2023-11-17 at 11 07 22 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/727a2868-a5be-45a6-aa42-6051e87f8457">
<img width="1425" alt="Screenshot 2023-11-17 at 11 07 40 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/cde2c998-5132-4bdb-bbbb-70ff857db860">
<img width="1428" alt="Screenshot 2023-11-17 at 11 08 00 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/688dee73-26dd-4e66-963b-7a7bfb8e00cc">
<img width="1414" alt="Screenshot 2023-11-17 at 11 08 20 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/40c9791b-317c-4fc5-b2a5-e1aecd773ce9">
<img width="1425" alt="Screenshot 2023-11-17 at 11 08 37 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/69e370db-a554-43bd-ad9d-f04a3f16a082">
<img width="1424" alt="Screenshot 2023-11-17 at 11 09 13 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/9c6fb238-4b95-4f0b-8815-f07fa9b4e5d5">
<img width="1426" alt="Screenshot 2023-11-17 at 11 09 29 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/f96629d8-25df-4fe3-9ac2-f95a03bb20d0">
<img width="1426" alt="Screenshot 2023-11-17 at 11 09 50 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/205e76bb-4b96-4f24-9e49-48e425ad69f9">
<img width="1425" alt="Screenshot 2023-11-17 at 11 13 34 PM" src="https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/42855900/050fc670-16d1-4ece-a9ea-b7a854ad68d4">




EXPLANATION:

# Hoddie World Website

Welcome to Hoddie World! This is the repository for the code powering the Hoddie World website.

## Table of Contents
- [Description](#description)
- [Navigation](#navigation)
- [Poster](#poster)
- [Products](#products)
- [Cart](#cart)
- [Footer](#footer)
- [Contact](#contact)
- [Follow Us](#follow-us)
- [Address](#address)

## Description
This project is a simple website for Hoddie World, featuring a navigation bar, a poster section, a product section, a shopping cart, and a footer with contact information.

## Navigation
The navigation bar includes a brand logo, a toggle button for mobile responsiveness, and a cart icon indicating the number of items in the cart.

## Poster
The poster section showcases the "Dollars To Wear Fearless Hoddie" with a catchy title and a call-to-action button.

## Products
The products section is currently empty and can be filled with details and images of the available products.

## Cart
The shopping cart section allows users to view their cart items, clear the cart, and proceed to payment.

## Footer
The footer contains contact information, social media links, and the company's address.

## Contact
For any inquiries, you can contact Hoddie World via email at hoddiedoddie@gmail.com or by phone at 9090909090.

## Follow Us
Stay connected with Hoddie World on social media:
- [Facebook](#) 
- [Twitter](#) 
- [Instagram](#) 

## Address
Visit us at:
24-A Lake Gardens (Sub Office),
Kolkata, West Bengal (WB), India (IN).

## Razorpay Integration

This project uses Razorpay for handling payments. The integration is done using Razorpay's JavaScript library.

- [Razorpay Account](https://razorpay.com/)
- [Razorpay API Key](https://dashboard.razorpay.com/app/apikeys)

### Setting up Razorpay

1. Include the Razorpay JavaScript library in your HTML file:

   ```html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>


DOM Part -----------------------

HTML Structure:
The HTML structure includes sections for a navigation bar, a poster (hero section), a product section, a cart overlay, and a footer.

Navigation Bar:

Includes a logo or brand name ("WELCOME TO HODDIE WORLD").
A cart button to view the items in the shopping cart.
Hero Section (Poster):

Displays a banner with the title "Dollars To Wear Fearless Hoodie."
Includes a call-to-action button with the text "Eyes Down, Guts Up!!"
Product Section:

A section titled "Our Products" with a placeholder for displaying the products.
The product items are expected to have an image, title, and price.
Cart Overlay:

A hidden cart overlay that appears when the user clicks on the cart button.
Displays the items in the cart, their details (image, title, price), and provides options to remove items, increase or decrease item quantities, and clear the entire cart.
Shows the total price of items in the cart and a button to proceed to payment.
Footer:

Divided into sections for "Contact Us," "Follow Us," and "Address."
Contact information such as email and phone number is provided.
Links to social media profiles (Facebook, Twitter, Instagram) are included.
JavaScript (main.js):
The JavaScript code is responsible for handling the functionality of the website. Here's an overview:

DOM Selection:

Selects various elements from the DOM using document.querySelector and stores them in variables.
Cart and Buttons Initialization:

Initializes variables for the shopping cart (cart) and buttons (buttonsDOM).
Products Class:

Uses a class named Products to fetch product data from a JSON file (products.json). The class transforms the data and returns an array of product objects.
UI Class:

Uses a class named UI to handle the user interface functionality.
Displays products on the webpage.
Manages the shopping cart functionality, such as adding items to the cart, updating cart values, displaying cart items, and handling user interactions in the cart overlay.
Integrates with local storage to persist product and cart data.
Storage Class:

Uses a class named Storage to handle local storage operations.
Provides methods to save and retrieve product and cart data from local storage.
Event Listeners:

Sets up event listeners for buttons, including adding products to the cart, displaying the cart, and clearing the cart.
Initialization on DOM Content Load:

Listens for the "DOMContentLoaded" event and initializes instances of the UI and Products classes.
Fetches product data, displays products, and sets up event listeners.
Overall Flow:
Loading:

When the page loads, product data is fetched from a JSON file, displayed on the webpage, and stored in local storage.
User Interaction:

Users can view product details and add products to the shopping cart.
Clicking on the cart button reveals the cart overlay with added items and options to manage the cart.
Cart Functionality:

Users can increase or decrease the quantity of items in the cart, remove items, and clear the entire cart.
Cart data is stored in local storage for persistence across page reloads.


The code includes a payment integration using Razorpay, where users can click a "Pay" button in the cart overlay to initiate the payment process.
Notes:
This project is built with HTML, CSS, and JavaScript.
It utilizes classes to organize code and separate concerns.
The use of local storage helps in persisting user data.
The website is styled with inline styles, which can be further improved by using external CSS files.
Keep in mind that this is a simplified overview, and specific details may vary based on the actual content of the JSON file, the structure of the project, and the details of the payment integration using razorpay.

The server is built using Express.js, a popular web application framework for Node.js.
The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to handle requests from different origins.
The express.json() middleware is used to parse incoming JSON requests.
There's a basic route at the root ("/") that responds with "hello world!" when accessed.
The "/payment" route handles payment requests. It creates a new instance of Razorpay and generates a payment order with the specified amount.
The response includes details about the success of the request, the created order, and the payment amount.
The server is set to listen on port 3001.
Notes:
Ensure that the Razorpay API keys (key_id and key_secret) are kept secure. Avoid exposing them directly in client-side code.
This server provides a simple endpoint for creating payment orders. The actual payment processing may require additional steps, such as handling callbacks or redirects after successful payments.
The server currently lacks error handling, and in a production environment, you would want to implement more robust error handling and security measures.
