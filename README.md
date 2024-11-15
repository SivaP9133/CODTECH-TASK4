# CODTECH-TASK4  

## <ins>PROJECT NAME</ins> :- TO-DO LIST APPLICATION WITH LOGICAL STORAGE  

**<ins>NAME</ins>:-** POGIRI SIVA  

**<ins>COMPANY NAME</ins>:-** CODTECH IT SOLUTIONS

**<ins>ID</ins>:-** CT12DS2488  

**<ins>DOMAIN</ins>:-** FRONTEND DEVELOPMENT

**<ins>DURATION</ins>:-** SEPTEMBER 20th,2024 to NOVEMBER 20th,2024

**<ins>MENTOR</ins>:-** NEELA SNTHOSH KUMAR   

This HTML code outlines a simple, interactive "To-Do List" web application with features for task management. Here’s a breakdown of each section:

### 1. **HTML Document Declaration and Structure**
   - **`<!DOCTYPE html>`**: Declares the document as HTML5.
   - **`<html lang="en" data-theme="bumblebee">`**: Defines the document language as English and sets a theme attribute to "bumblebee" (likely used for styling in `style.css`).

### 2. **`<head>` Section**
   - **`<meta charset="UTF-8">`**: Sets the character encoding to UTF-8.
   - **`<meta http-equiv="X-UA-Compatible" content="IE=edge">`**: Ensures compatibility with Internet Explorer.
   - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Ensures the page is responsive across devices.
   - **CSS and Icons**:
      - **`<link rel="stylesheet" href="style.css">`**: Links to an external CSS file for styling.
      - **`<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>`**: Includes icon support from Boxicons for adding icons to buttons.
      - **`<link rel="icon" type="image/x-icon" href="images/to do.png">`**: Sets a favicon for the page.
   - **`<title>Todo List</title>`**: Sets the page title as "Todo List."

### 3. **`<body>` Section**
   - **Main Container (`<div class="container">`)**: Wraps all to-do list components for easier layout control.

   #### Header Section
   - **Header**: Contains the page title and input section.
      - **`<h1><u>Todo List</u></h1>`**: Main title.
      - **Input Section**: 
         - **`<input id="todo-input" type="text" placeholder="📑 Add your todo here..">`**: An input field for entering to-do items.
         - **`<button id="add-button" class="btn btn-add">`**: An "Add" button to add new items to the to-do list, with an icon (`bx bx-plus`) for styling.

   #### Delete Buttons Section
   - **Delete Controls**:
      - **`<button id="delete-selected">Delete Selected</button>`**: Button to delete selected tasks.
      - **`<button id="delete-all">Delete All</button>`**: Button to delete all tasks.

   #### Dynamic To-Do Content
   - **`<ul id="all-todos" class="todos-list"></ul>`**: An empty list that will be populated dynamically with to-do items using JavaScript.

   #### Filters Section
   - **Filter Options**:
      - **Dropdown Filter**: Contains filtering options to show all tasks, only pending tasks, or completed tasks.
      - **Task Count Display**: Displays the count of completed tasks and total tasks:
         - **`<p>Completed: <span id="c-count">0</span></p>`**: Shows the count of completed tasks.
         - **`<p>Total Tasks: <span id="r-count">0</span></p>`**: Shows the total count of tasks.

### 4. **JavaScript File Inclusion**
   - **`<script src="index.js"></script>`**: Links to an external JavaScript file (`index.js`) for handling interactions, such as adding, deleting, marking tasks as complete, and filtering.

### Purpose of the Code
This code sets up a functional to-do list application where users can:
   - Add new tasks.
   - View tasks in different states (All, Pending, Completed).
   - Delete individual or all tasks.
   - Track the count of completed and total tasks.

The layout is structured and styled via `style.css`, with icons and dynamic interactions powered by `index.js`. This setup allows for a modular and interactive to-do list that users can easily manage.

# <ins>OUTPUT</ins>  
