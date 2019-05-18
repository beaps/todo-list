const $form = document.querySelector(".form-task");
const $task = document.querySelector("#task");
const $ulElement = document.querySelector(".list-container");
const $list = document.getElementsByTagName("li");
const $section = document.getElementsByTagName("section")[0];
const $image = document.createElement("img");
const $textNoTasks = document.createElement("p");
$section.appendChild($image);
$section.appendChild($textNoTasks);
$textNoTasks.textContent = "No tienes tareas pendientes 🤪";

const tasks = getSavedTasks();

tasks.forEach(task => {
  renderList(task);
});

noTasks($list, tasks, $image, $ulElement, $textNoTasks);

$form.addEventListener("submit", e => {
  e.preventDefault(); // Don't reload the page

  if ($task.value.trim().length > 0) {
    tasks.push({
      text: $task.value.trim(),
      done: false
    });

    let aTask = task(tasks);

    renderList(aTask);
    saveTasks(tasks);
  }
  noTasks($list, tasks, $image, $ulElement, $textNoTasks);
  $task.value = ""; // Reset text
});
