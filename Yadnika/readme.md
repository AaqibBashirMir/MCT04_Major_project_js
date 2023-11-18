# Invoice Generator<br>
## Overview<br>
Welcome to the Invoice Generator! This HTML code provides a simple and interactive web page for generating invoices. 
It includes features for adding items, calculating totals, Downloading copy and also sending invoices and reviewing the generated invoice.
The code is designed to be user-friendly and customizable for different invoicing needs. 

## Table of Contents
Features<br>
Reviewing Invoice <br>
Modal Dialog <br>
Dynamic Date Display<br>
Item Management<br>
Currency and Total Calculation<br>
Sending Invoice via Email

## Features
### 1. Main Content
The main content section includes input fields for the due date, invoice number, and billing details. 
It provides a structured layout for organizing invoice information.

### 2. Item Details
The code includes a section for adding and managing individual items on the invoice. 
Users can input item names, descriptions, quantities, prices, and rates. The interface is designed for ease of use and dynamic updates.

### 3. Total Calculation
The code calculates and displays the subtotal, discount, and total amount based on the entered item details.
Users can dynamically update quantities and rates to see real-time changes in the total amount.

### 4. Review Invoice Modal
The Review Invoice section allows users to review the generated invoice before finalizing it. 
It includes options for setting a discount rate and choosing the currency. The modal also provides buttons for sending the invoice and downloading a copy.

## Reviewing Invoice
The "Review Invoice" button triggers a modal dialog that allows you to review and adjust the generated invoice. 
You can set a discount rate, choose the currency, and take final actions such as sending the invoice or downloading a copy.

## Modal Dialog
The modal dialog (my_modal) provides a user-friendly interface for finalizing and taking actions on the invoice. 
It includes buttons for closing the modal, sending the invoice, and downloading a copy.

## Dynamic Date Display
The code includes a feature to dynamically display the current date on the invoice. 
It fetches the HTML element with the ID 'date' and updates its content with the current date.

## Item Management
### Adding Items
The 'Add Item' functionality allows users to dynamically add items to the invoice. 
When the user clicks the 'Add Item' button, a new item section is created with input fields for item name, description, quantity, rate, and a delete button.

### Removing Items
Items can be removed from the invoice by clicking the delete button associated with each item. 
This action triggers the removal of the item section and updates the total amount.

## Currency and Total Calculation
The code handles currency selection and dynamically updates the total amount based on user input. 
Users can choose the currency type, and the total is recalculated accordingly. 
The total is also updated in real-time as users modify item quantities and rates.

## Sending Invoice via Email
The code provides a mechanism to send the invoice via email. 
When the user clicks the 'Send Invoice' button in the modal, an email is composed with the invoice details. 
This feature enhances the user experience by facilitating easy sharing of generated invoices.

