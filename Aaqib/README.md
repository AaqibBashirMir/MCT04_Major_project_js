<h1>Readme.md</h1>
<h3>Hosted Link:-</h3>
https://aaqibbashirmir.github.io/MCT04_TEAM02/Aaqib/resume.html

<h1>Description</h1>
<hr style="font-weight:bolder">

<h3>🚀 Introducing My Resume Generator Project! 🚀</h3> 

💡 The provided HTML code constitutes a web page, presumably designed for creating a resume. The structure includes a navbar with a 
   logo and a "Download PDF" button. The form is divided into sections for personal details, professional information, employment 
   history, projects, and education. Each section contains input fields for relevant information such as name, email, skills, and more.

   The resume display section is segmented into a header and body, with the body further divided into left and right sides. The left 
     side features an image upload section, contact details, skills, languages, hobbies, and a signature field. The right side displays a summary, professional experience, projects, and educational background. The use of JavaScript and the Signature Pad library suggests additional dynamic features, possibly enabling users to add a signature to their resumes. External script links and a local script file, "resume.js," imply the integration of external libraries and custom scripting to enhance the functionality of the resume creation form.

💡The provided CSS code is part of a comprehensive stylesheet designed for a web-based resume generator application. It begins with a universal selector, setting default styles like zero margin, padding, and specifying a font stack for the entire document. The styles applied to the body element include a light gray background.

The #navbar section is styled to create a navigation bar with a white background, flex container properties for spacing and alignment, and padding. Specific styles are defined for elements like #resume-logo, #download-btn, and #download-pdf, giving a distinctive appearance to a download button.

The #body section is configured with a flex column layout, aligning items to the start and incorporating padding. The stylesheet contains styles for various sections of the resume generator, such as #template-type, #personal-detail-container, #proffesional-detail-container, #outer-employement-container, #outer-project-container, #inner-education-detail, and more.

Media queries are utilized to make the application responsive, adjusting styles based on screen width. For instance, certain elements are hidden or their sizes are modified for smaller screens, ensuring a seamless user experience across different devices.

In summary, the CSS code demonstrates a well-organized and responsive design approach for the resume generator, covering a range of elements and layouts to enhance user interaction and readability on various screen sizes. If you have specific inquiries or if there's a particular aspect you'd like further clarification on, please feel free to ask.

<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210304115719/animation1111.jpg" height="250px" width="600px">

🚀<h3>Here starts functionality with JavaScript </h3>
<h4>Template Type Changer:</h4>

The code begins with selecting HTML elements representing different sections of the resume (#type, #resume-field, #res-header-cont, #res-bdy-left).
An event listener is added to the #type element to detect changes in the selected template type (presumably a dropdown).
Depending on the selected template type ("Two-Column" or "Minimalist"), the code dynamically adjusts various styles, widths, and displays to change the appearance of the resume.
<h4>Responsive Design:</h4>

There's a conditional statement checking the screen width, and if it's less than or equal to 460 pixels, it adjusts the width of an element with the id #body to 200 pixels.
<h4>Logo Reload:</h4>

There's a reload function defined, which likely reloads the page. This function is associated with a logo on the page.
<h4>Background and Text Color Changers:</h4>

Event listeners are set up for input elements with the ids #bg-color and #text-col. These listeners change the background color of an element with the id #res-bdy-left and the text color of certain resume elements.
<h4>User Image Upload:</h4>

There's a function named loadFile that gets triggered when the user selects an image file. It displays the selected image on the page.
<h4>Signature Pad:</h4>

The code initializes a signature pad using the SignaturePad library, allowing users to draw a signature. There's also a button (#clear-btn) to clear the signature.
<h4>Fetching User Input for Resume:</h4>h4>

There are several event listeners capturing user input for various resume sections, including name, job title, email, location, contact number, summary, skills, hobbies, languages, etc.
The user inputs are dynamically updated in corresponding sections of the resume.
<h4>Section Display Toggling (Employment, Project, Education):</h4>

There are event listeners for buttons (#add-employe, #project-btn, #edu-btn) that reveal inner HTML elements related to employment, project, and education sections, respectively.
User inputs for these sections are captured and dynamically updated in the resume.
<h4>Resume Download Functionality:</h4>

There's a button (#download-btn) that, when clicked, adjusts styling and initiates the printing of the resume, presumably for downloading or printing purposes.
Overall, your JavaScript code is responsible for creating a dynamic and interactive user experience in a web application where users can customize and generate their resumes based on different templates and input data. The code includes functionality for handling various user inputs, adjusting styles based on template choices, and managing the display of different resume sections.

Thank you for your attention. Feel free to explore the HTML code further and customize it for your needs.<br>

<h3>UI:-</h3>




![Screenshot 2023-11-18 222659](https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/35392012/2eecd069-9054-4116-8964-914d6144a648)


