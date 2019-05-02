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




function task(tasks) {
  return tasks[tasks.length - 1];
}


function renderList(task) {
  const $ul = document.querySelector('.list-container');
  $ul.appendChild(generateElementsDOM(task));
}


function generateElementsDOM(task) {
  const $li = document.createElement('li');
  const $label = document.createElement('label');
  const $checkbox = document.createElement('input');
  const $taskText = document.createElement('p');
  const $removeButton = document.createElement('button'); 

  // Setup checkbox
  $checkbox.setAttribute('type', 'checkbox');
  $checkbox.addEventListener('click', (e) => {
    $taskText.classList.toggle('list-item__text--line-through');

    if (task.done) {
      $checkbox.setAttribute('checked', 'checked');
    } else {
      $checkbox.removeAttribute('checked');
    }
    
    task.done = $checkbox.checked;
    saveTasks(tasks); 
  });

  // If there are already values in the localStorage
  if (task.done) {
    $checkbox.setAttribute('checked', 'checked');
    $taskText.classList.add('list-item__text--line-through');
  } else {
    $checkbox.removeAttribute('checked');
    $taskText.classList.remove('list-item__text--line-through');
  }

  $label.appendChild($checkbox);

  // Setup task text
  $taskText.textContent = task.text;
  $taskText.classList.add('list-item__text');
  $label.appendChild($taskText);

  // Setup remove button
  $removeButton.textContent = 'Borrar';
  $removeButton.addEventListener('click', e => {
    e.target.parentNode.remove(); 
    removeItemFromLocalStorage(task)
  });

  // Setup li
  $li.appendChild($label);
  $li.appendChild($removeButton);

  return $li;
}


function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getSavedTasks() {
  const tasksJSON = localStorage.getItem('tasks');

  try {
    return tasksJSON ? JSON.parse(tasksJSON) : [];
  } catch (e) {
    return [];
  }
}


function removeItemFromLocalStorage(task) {
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
  
  saveTasks(tasks)
}