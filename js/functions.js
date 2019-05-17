// Return the last object of the array 'tasks'
function task(tasks) {
  return tasks[tasks.length - 1];
}

// Render an individual task
function renderList(task) {
  const $ul = document.querySelector(".list-container");
  $ul.appendChild(generateElementsDOM(task));
}

// Get the DOM elements for an individual task
function generateElementsDOM(task) {
  const $li = document.createElement("li");
  const $label = document.createElement("label");
  const $checkbox = document.createElement("input");
  const $taskText = document.createElement("p");
  const $removeButton = document.createElement("button");

  // Setup checkbox
  $checkbox.setAttribute("type", "checkbox");
  $checkbox.classList.add("list-item__checkbox-position");
  $checkbox.addEventListener("click", e => {
    $taskText.classList.toggle("list-item__text--line-through");
    $li.classList.toggle("list-item__color-green");

    if (task.done) {
      $checkbox.setAttribute("checked", "checked");
    } else {
      $checkbox.removeAttribute("checked");
    }

    task.done = $checkbox.checked;
    saveTasks(tasks);
  });

  // If there are already values in the localStorage
  if (task.done) {
    $checkbox.setAttribute("checked", "checked");
    $taskText.classList.add("list-item__text--line-through");
    $li.classList.add("list-item__color-green");
  } else {
    $checkbox.removeAttribute("checked");
    $taskText.classList.remove("list-item__text--line-through");
    $li.classList.remove("list-item__color-green");
  }

  $label.appendChild($checkbox);

  // Setup task text
  $taskText.textContent = task.text;
  $taskText.classList.add("list-item__text");
  $label.appendChild($taskText);

  // Setup remove button
  $removeButton.textContent = "Borrar";
  $removeButton.addEventListener("click", e => {
    e.target.parentNode.remove();
    removeItemFromLocalStorage(task);
  });
  $removeButton.classList.add("btn__remove");

  // Setup li
  $li.appendChild($label);
  $li.appendChild($removeButton);

  return $li;
}

// Save tasks to localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fetch existing tasks from localStorage
function getSavedTasks() {
  const tasksJSON = localStorage.getItem("tasks");

  try {
    return tasksJSON ? JSON.parse(tasksJSON) : [];
  } catch (e) {
    return [];
  }
}

// Remove an individual task
function removeItemFromLocalStorage(task) {
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);

  saveTasks(tasks);
}
