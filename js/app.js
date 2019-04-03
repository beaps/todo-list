const $form = document.querySelector('.form-task'); 
const $btn = document.querySelector('.btn');
let $task = document.querySelector('#task');
//const tasks = [];


$form.addEventListener('submit', (e) => {
  e.preventDefault();

  if ($task.value.length > 0) {
    //tasks.push($task.value); 
    renderList($task);
  }
  // Reset text
  $task.value = '';
});

function listTemplate(task) {
  return (
    `<li>${task.value}</li>`
  );
}

function renderList(task) {
  const $ul = document.querySelector('.list');
  $ul.innerHTML = listTemplate(task);
}