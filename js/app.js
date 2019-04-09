const $form = document.querySelector('.form-task'); 
const $btn = document.querySelector('.btn');
let $task = document.querySelector('#task');
//const tasks = [];


$form.addEventListener('submit', (e) => {
  e.preventDefault();

  if ($task.value.trim().length > 0) {
    //tasks.push($task.value); 
    renderList($task);
  }
  // Reset text
  $task.value = '';
});


function renderList(task) {
  const $ul = document.querySelector('.list-container');
  $ul.appendChild(generateElementsDOM(task));
}


function generateElementsDOM(task) {
  const $li = document.createElement('li');
  const $label = document.createElement('label');
  const $checkbox = document.createElement('input');
  const $taskText = document.createElement('p');  

  // Setup checkbox
  $checkbox.setAttribute('type', 'checkbox');
  $label.appendChild($checkbox);

  // Setup task text
  $taskText.textContent = task.value.trim();
  $label.appendChild($taskText);

  // Setup li
  $li.appendChild($label);

  return $li;
}