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
