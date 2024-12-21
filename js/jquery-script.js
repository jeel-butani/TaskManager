$(document).ready(function () {
    // Smooth Add Task Animation
    $("#add-task-btn").click(function () {
        // Get the input task value and trim spaces around it
        const taskName = $("#task-input").val().trim();

        // If task name is not empty
        if (taskName) {
            // Create a new list item with buttons for complete, edit, and delete actions
            const taskItem = $(`
                <li>
                    <span>${taskName}</span>
                    <div>
                        <button class="complete-btn">Mark Complete</button>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </li>
            `);

            // Apply fade-in animation when adding a new task
            taskItem.hide().appendTo("#tasks").fadeIn(500);

            // Clear the task input field after adding a task
            $("#task-input").val("");

            // Add functionality for the 'Complete' button
            taskItem.find(".complete-btn").click(function () {
                // Toggle 'completed' class on the parent list item to mark the task as completed
                $(this).parent().parent().toggleClass("completed");
            });

            // Add functionality for the 'Delete' button
            taskItem.find(".delete-btn").click(function () {
                // Apply fade-out animation on delete, then remove the task item
                $(this)
                    .parent()
                    .parent()
                    .fadeOut(500, function () {
                        $(this).remove();
                    });
            });

            // Add functionality for the 'Edit' button
            taskItem.find(".edit-btn").click(function () {
                // Get the current task name and prompt user to edit it
                const currentText = $(this).siblings("span").text();
                const newTaskName = prompt("Edit Task Name:", currentText);

                // If the user provides a valid new task name, update the task text
                if (newTaskName) {
                    $(this).siblings("span").text(newTaskName.trim());
                }
            });
        } else {
            // If the task name is empty, alert the user
            alert("Task cannot be empty!");
        }
    });

    // Filter Tasks
    $("#filter-tasks").change(function () {
        // Get the selected filter value
        const filter = $(this).val();

        // Loop through each task item and apply filter
        $("#tasks li").each(function () {
            // Check if the current task has the 'completed' class
            const isCompleted = $(this).hasClass("completed");

            // Show or hide the task based on filter selection
            if (
                filter === "all" ||
                (filter === "completed" && isCompleted) ||
                (filter === "pending" && !isCompleted)
            ) {
                // Show task with a fade-in effect
                $(this).fadeIn(300);
            } else {
                // Hide task with a fade-out effect
                $(this).fadeOut(300);
            }
        });
    });
});
