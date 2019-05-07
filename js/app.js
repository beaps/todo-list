const $form = document.querySelector('.form-task'); 
const $btn = document.querySelector('.btn');
let $task = document.querySelector('#task');

const tasks = getSavedTasks();


tasks.forEach(task => {
  renderList(task);
})


$form.addEventListener('submit', (e) => {
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
  
  $task.value = ''; // Reset text
});