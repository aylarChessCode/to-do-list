const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskBox = document.getElementById("taskBox");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", () => {
  const newTask = taskInput.value.trim();
  // console.log(newTask);
  if (newTask !== "") {
    const addedTask = document.createElement("div");
    addedTask.classList.add("task");
    addedTask.innerHTML = `
    <input type="checkbox" class="taskCheckbox" id="taskCheckbox">
        <span class="styleSpan">${newTask}</span>
        <button class="deleteBtn" id="deleteBtn">Delete</button>
    `;
    taskBox.appendChild(addedTask);

    taskInput.value = "";

    // checking task
    const taskCheckbox = addedTask.querySelector(".taskCheckbox");
    const styleSpan = addedTask.querySelector(".styleSpan");

    taskCheckbox.addEventListener("click", () => {
      if (taskCheckbox.checked) {
        styleSpan.style.textDecoration = "line-through";
      } else {
        styleSpan.style.textDecoration = "none";
      }
    });

    // delete task
    const deleteBtn = addedTask.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
    //   taskBox.remove(addedTask);
    addedTask.remove();
    });

    // change task
    addedTask.addEventListener("dblclick", () => {
      styleSpan.contentEditable = true;
      styleSpan.focus();
    });
  } else {
    alert("Please enter a task.");
  }
});
clearBtn.addEventListener("click", () => {
  taskBox.remove(taskBox);
});
