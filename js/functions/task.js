// Return the last object of the array 'tasks'
function task(tasks) {
  return tasks[tasks.length - 1];
}

// Render an individual task
function renderList(task) {
  const $ul = document.querySelector(".list-container");
  $ul.appendChild(generateElementsDOM(task));
}