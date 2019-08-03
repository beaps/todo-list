function generateElementsDOM(task) {
  const $li = document.createElement("li");
  const $label = document.createElement("label");
  const $checkbox = document.createElement("input");
  const $taskText = document.createElement("p");
  const $removeButton = document.createElement("button");

  setCheckbox(task, $checkbox, $taskText, $li, $label)
  setTaskText(task, $taskText, $label)
  setRemoveButton(task, $removeButton)
  setItem($li, $label, $removeButton)

  return $li;
}



function setCheckbox(task, $checkbox, $taskText, $li, $label) {
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

  styleCheckbox(task, $checkbox, $taskText, $li)

  $label.appendChild($checkbox);
}

function styleCheckbox(task, $checkbox, $taskText, $li) {
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
}

function setTaskText(task, $taskText, $label) {
  $taskText.textContent = task.text;
  $taskText.classList.add("list-item__text");
  $label.appendChild($taskText);
}

function setRemoveButton(task, $removeButton) {
  $removeButton.textContent = "Borrar";
  $removeButton.addEventListener("click", e => {
    e.target.parentNode.remove();
    removeItemFromLocalStorage(task);
    // addImageIfNoTasks(tasks)
    addImageIfNoTasks(tasks, $image, $textNoTasks)
    // noTasks($list, tasks, $image, $ulElement, $textNoTasks);
  });
  $removeButton.classList.add("btn__remove");
}

function setItem($li, $label, $removeButton) {
  $li.appendChild($label);
  $li.appendChild($removeButton);
}
