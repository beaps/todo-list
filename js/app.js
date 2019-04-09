const $form = document.querySelector('.form-task'); 
const $btn = document.querySelector('.btn');
let $task = document.querySelector('#task');
//const tasks = [];
const tasks = getSavedTasks();

/*Object.entries(tasks).forEach(([key, value]) => {
  renderList(value);  
});*/

// tasks.forEach(task => {
//   renderList(task.text); 
// })


renderList(tasks);

  


$form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if ($task.value.trim().length > 0) {
    tasks.push({
      text: $task.value.trim()
    }); 
    renderList(tasks);
    saveTasks(tasks);
  }
  // Reset text
  $task.value = '';
});


function renderList(task) {
  const $ul = document.querySelector('.list-container');
  $ul.appendChild(generateElementsDOM(task));
}


function generateElementsDOM(tasks) {
  const $li = document.createElement('li');
  const $label = document.createElement('label');
  const $checkbox = document.createElement('input');
  const $taskText = document.createElement('p');
  const $removeButton = document.createElement('button'); 

  // Setup checkbox
  $checkbox.setAttribute('type', 'checkbox');
  $checkbox.addEventListener('click', () => $taskText.classList.toggle('list-item__text--line-through'));
  $label.appendChild($checkbox);

  // Setup task text
  //$taskText.textContent = tasks;

  tasks.forEach(task => {
    $taskText.textContent = task.text;
  });

  /*Object.entries(tasks).forEach(([key, value]) => {
    $taskText.textContent = value;
  });*/
  
  $taskText.classList.add('list-item__text');
  $label.appendChild($taskText);

  // Setup remove button
  $removeButton.textContent = 'Borrar';
  $removeButton.addEventListener('click', e => e.target.parentNode.remove());


  // Setup li
  $li.appendChild($label);
  $li.appendChild($removeButton);

  return $li;
}

function saveTasks(tasks) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getSavedTasks() {
  const tasksJSON = localStorage.getItem('tasks');

  try {
    return tasksJSON ? JSON.parse(tasksJSON) : [];
  } catch (e) {
    return [];
  }
  // try {
  //   return tasksJSON ? JSON.parse(tasksJSON) : {};
  // } catch (e) {
  //   return {};
  // }
};