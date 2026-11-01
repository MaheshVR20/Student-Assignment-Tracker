
function addTask() {

    const taskInput = document.getElementById("task");
    const deadlineInput = document.getElementById("deadline");

    const task = taskInput.value.trim();
    const deadline = deadlineInput.value;

    if (task === "" || deadline === "") {
        alert("Please enter assignment name and deadline.");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");

    taskText.textContent = task + " - Due: " + deadline;

    li.appendChild(taskText);

    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";
    completeButton.className = "complete-btn";

    completeButton.onclick = function() {
        taskText.classList.toggle("completed");
    };

    li.appendChild(completeButton);

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function() {

        li.remove();

        if (document.getElementById("taskList").children.length === 0) {
            document.getElementById("emptyMessage").style.display = "block";
        }

    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("emptyMessage").style.display = "none";

    taskInput.value = "";
    deadlineInput.value = "";

}
