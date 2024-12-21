# Task Manager Web Application

A simple yet powerful Task Manager web application designed to allow users to create, edit, mark tasks as completed, delete tasks, and filter tasks based on their status. It’s a user-friendly tool for efficiently managing your tasks.

## Features
- **Add Tasks**: Users can add new tasks to the task list.
- **Complete Tasks**: Tasks can be marked as completed, which applies a visual style change.
- **Edit Tasks**: Users can edit the name of a task after creation.
- **Delete Tasks**: Tasks can be deleted from the list.
- **Filter Tasks**: Users can filter tasks by their completion status (All, Completed, or Pending).
- **Smooth Animations**: Tasks fade in and out for a smooth and user-friendly experience.

## Technologies Used
- **HTML5**: Markup language to create the structure of the web page.
- **CSS3**: Used for styling and responsive design of the page.
- **JavaScript**: Client-side scripting to handle user interactions (task addition, completion, editing, and deleting).
- **jQuery**: For DOM manipulation and smooth animations.
- **Responsive Design**: The app is designed to be mobile-friendly and works well on different screen sizes.

## Screenshots
Here you can show some sample screenshots of your web application in action.
![Screenshot 2024-12-21 153729](https://github.com/user-attachments/assets/ecfcf76d-9a22-4603-9152-628e0a8658f4)
![Screenshot 2024-12-21 153815](https://github.com/user-attachments/assets/7f97e5ff-7b09-4ada-a5ae-0a4deea2d217)
![Screenshot 2024-12-21 153846](https://github.com/user-attachments/assets/ce210a72-afe5-430a-b0ce-01e3fc9fbbdf)
![Screenshot 2024-12-21 153829](https://github.com/user-attachments/assets/dd780b23-70f3-4361-b2ea-d29242e42d36)


## Installation Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/jeel-butni/task-manager.git
```

### 2. Open the project folder:
Navigate into the folder where the repository was cloned:

```bash
cd task-manager
```

### 3. Open the index.html file:
To run the application, simply open the index.html file in your preferred web browser.

### 4. View in browser:
Your Task Manager application should now be visible in your web browser. Enjoy managing your tasks!

## Project Structure

```bash
task-manager/
│
├── index.html        # Main HTML file that structures the page
├── css/
│   └── style.css     # Styles and responsive CSS rules for the app
├── js/
│   ├── script.js     # JavaScript logic for task management
│   └── jquery-script.js  # Optional, for additional jQuery effects/animations
├── README.md         # Project documentation file
```

## How It Works

## 1. Adding a Task
- Users can enter a task name in the input field.
- Upon clicking the **"Add Task"** button, the task is added to the list.
- The input field is then cleared, and the task is displayed with three buttons:
  - **Complete**: Marks the task as completed.
  - **Edit**: Allows the task name to be updated.
  - **Delete**: Deletes the task from the list.

## 2. Marking a Task as Completed
- Clicking the **Mark Complete** button applies the `completed` class, which visually changes the task's appearance (e.g., text will be struck through).
- This action toggles the task's completion status.

## 3. Editing a Task
- Users can click the **Edit** button to modify the task name.
- A prompt will appear allowing the user to input a new name for the task.

## 4. Deleting a Task
- Clicking the **Delete** button will trigger a fade-out animation, followed by removal of the task from the list.

## 5. Filtering Tasks
- There is a dropdown filter (**All, Completed, Pending**) that enables users to hide or show tasks based on their completion status:
  - **All**: Displays all tasks.
  - **Completed**: Shows only completed tasks.
  - **Pending**: Shows only tasks that are not completed.

## 6. Smooth Animations
- When tasks are added, the page applies a fade-in animation.
- When tasks are deleted, they fade out smoothly before being removed from the list.


---

## Code Details

The application uses **Vanilla JavaScript** and **jQuery** for DOM manipulation. Here's how the core functionalities are implemented:

### Task Addition
- The **"Add Task"** button triggers the addition of a task to the list:
  - The new task is appended to the task list with a fade-in animation for smooth transitions.

### Mark Complete
- The task’s completion state is toggled with a class that changes its appearance (e.g., text strikethrough).

### Editing Task Name
- When the **Edit** button is clicked, a prompt appears, allowing the user to input a new task name.

### Deleting Tasks
- The task item fades out and is then removed upon clicking the **Delete** button.

### Filtering Tasks
- The tasks are filtered based on completion status via a dropdown selection.
- The filtered tasks fade in or out based on their state.

---

## Customization

You can customize the application by modifying the following:

- **Styling**: Update the CSS in the `css/style.css` file to match your preferred design.
- **Task Data**: Update the logic in the JavaScript files to implement more complex behaviors or add additional features.
- **Animations**: Customize the animation speeds or transitions (e.g., in fade-in and fade-out actions).

---
