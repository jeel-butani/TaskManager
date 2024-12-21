// Wait until the entire DOM content has been loaded to ensure all elements are available for manipulation
document.addEventListener("DOMContentLoaded", () => {
    // Get the input field for the task name, the button to add a task, and the list where tasks will be displayed
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("tasks");

    // Add an event listener to the "Add Task" button to handle the task creation
    addTaskBtn.addEventListener("click", () => {
        // Get the value from the input field and remove any leading/trailing spaces
        const taskName = $("#task-input").val().trim();

        // If the task name is empty, alert the user and stop the function
        if (!taskName) {
            alert("Make Sure Task name cannot be empty!");
            taskInput.focus(); // Set focus back to the input field
            return;
        }

        // Create a new list item for the task
        const taskItem = document.createElement("li");

        // Set the inner HTML of the task item, including task name and action buttons
        taskItem.innerHTML = `
        <span>${taskName}</span>
        <div>
            <button class="complete-btn">Mark Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
        `;

        // Append the new task item to the task list with a smooth fade-in animation
        $(taskList).append($(taskItem).hide().fadeIn("slow"));

        // Clear the input field after adding the task
        taskInput.value = "";

        // Add an event listener for marking the task as completed
        taskItem.querySelector(".complete-btn").addEventListener("click", () => {
            taskItem.classList.toggle("completed"); // Toggle the "completed" class to visually mark the task as complete
        });

        // Add an event listener for deleting the task
        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
            // Fade out the task item before removing it from the list
            $(taskItem).fadeOut("slow", () => {
                taskItem.remove(); // Remove the task item from the DOM once the fade-out animation completes
            });
        });

        // Add an event listener for editing the task name
        taskItem.querySelector(".edit-btn").addEventListener("click", () => {
            const currentTaskName = taskItem.querySelector("span").textContent; // Get the current task name
            const newTaskName = prompt("Edit Task Name:", currentTaskName); // Prompt the user to input a new task name

            // If the new task name is valid (not empty), update the task item
            if (newTaskName && newTaskName.trim() !== "") {
                taskItem.querySelector("span").textContent = newTaskName.trim();
            } else {
                alert("Task name cannot be empty!"); // If empty, show an alert
            }
        });
    });
});
