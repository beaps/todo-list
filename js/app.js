const $form = document.querySelector(".form-task");
const $task = document.querySelector("#task");
<<<<<<< HEAD
=======

addImageElAndText()
>>>>>>> 8ab6fcd51640ce514a7065a0d0e01569ffc3edd9

const tasks = getSavedTasks();

tasks.forEach(task => {
  renderList(task);
});

<<<<<<< HEAD
addImageElAndText()
=======
>>>>>>> 8ab6fcd51640ce514a7065a0d0e01569ffc3edd9
addImageIfNoTasks(tasks);

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

  addImageIfNoTasks(tasks);
  $task.value = ""; // Reset text
});
