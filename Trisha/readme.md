<h2>Project Title: Youtube Chrome Extention</h2>
<hr>
<h2>Table Of Content</h2>

👉 About the project

👉 Key Features

👉 Code Explanation

👉 Technology Used

👉 Summary

<h2> About the project </h2>

Simplify your YouTube experience with this Chrome extension that adds a plus button to the video page. Click the button to instantly bookmark the current timestamp, allowing you to effortlessly revisit your favorite moments. Manage your saved timestamps through the extension interface for a seamless and personalized video-watching experience. Enjoy the convenience of quick and intuitive bookmarking with the YouTube Timestamp Bookmark Extension.

<h2> Key Features </h2>

1. One-Click Bookmarking: Effortlessly bookmark your favorite YouTube video moments with a single click on the plus button.
2. Quick Access: Easily revisit saved timestamps through the extension interface, providing quick and organized access to your bookmarked video segments.

<h2>Code explanation </h2>

<h4> ✍ HTML:- </h4>
The provided HTML code establishes the structure for a webpage featuring bookmarks for a video. It includes a container with a title ("Your bookmarks for this video") and a div element with the class "bookmarks" where the bookmarks will be displayed. The JavaScript file "popup.js" is linked to this HTML file using the script tag with the "type" attribute set to "module". This setup suggests that the functionality and interactivity, particularly related to bookmarks, are implemented in the linked JavaScript file.

<h4> ✍ CSS:- </h4>
This CSS code defines a container with a fixed width, a title with specific styling, and a textbox with width and font size settings. It further styles a list of bookmarks, each represented as a flex container with a border-radius, shadow, and background color. The individual bookmarks contain titles and controls, including images with hover effects and adjustments on transition. The controls are aligned to the right. The design creates a visually appealing and organized bookmark section.

<h4> ✍ JavaScript:- </h4>

<h4> background.js (to check the link of the YT) </h4>
The code is a Chrome extension content script with an onUpdated listener. It detects updates in tabs, specifically targeting YouTube video pages. If a YouTube video tab is found, it extracts the video ID from the URL parameters and sends a "NEW" message with the video ID to the content script using chrome.tabs.sendMessage. The script focuses on efficiently handling updates and communicating with the content script for YouTube video pages.

<h4> contentScript.js (to check the content and manipulate YT's DOM) </h4>
The code is a Chrome extension content script that enhances YouTube video pages with bookmarking functionality. It injects a bookmark button into the video player controls, allowing users to bookmark the current timestamp of the video. Bookmarks are stored in Chrome sync storage for each specific video, sorted by timestamp. The script listens for messages from the background script, handling events such as creating new bookmarks, setting the video playback time, and deleting bookmarks. The getTime function formats seconds into a timestamp.

<h4> util.js (to activate the current window) </h4>
The code defines a concise asynchronous function, getActiveTabURL, using the chrome.tabs API in a Chrome extension. It queries and returns the URL of the active tab in the current window.

<h4> popup.js (to activate the current window) </h4>
The code is part of a Chrome extension for managing bookmarks on YouTube videos. Key features include adding, viewing, playing, and deleting bookmarks. It imports the getActiveTabURL function, defines functions for UI manipulation, and includes event handlers for play and delete actions. The document load event listener initializes the extension by fetching and displaying bookmarks for the current YouTube video.

<h4> ✍ JSON:- </h4>
The JSON represents a browser extension ("demo Bookmarks") for saving YouTube timestamps. It has permissions for storage and tabs, injects scripts into YouTube pages, and follows Manifest Version 3.

<h2> Technology Used </h2>

✔ HTML
✔ CSS
✔ Jvascript
✔ JSON

<h2> Summary </h2>
The provided code is a Chrome extension designed for managing bookmarks on YouTube videos. It imports the getActiveTabURL function and defines functions for handling UI, including adding, viewing, playing, and deleting bookmarks. The extension initializes on the document load event, fetching and displaying bookmarks for the current YouTube video. Notably, the code focuses on providing a streamlined bookmarking experience within the YouTube environment.

<h2> UI </h2>

![image](https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/126088849/52131cdd-7e1a-4df4-9cf4-162c2766741a)

![image](https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/126088849/ea5f75d1-f948-4cad-be6c-f6b642d9795a)

![image](https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/126088849/07dd1628-2eec-496e-b150-6ba30846f96e)

![image](https://github.com/AaqibBashirMir/MCT04_TEAM02/assets/126088849/db3dfa28-1f91-46c2-9b38-b0cf9148cd89)



