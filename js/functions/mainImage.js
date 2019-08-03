const $section = document.getElementsByTagName("section")[0];
const $image = document.createElement("img");
const $textNoTasks = document.createElement("p");

function addImageIfNoTasks(tasks) {
  const $list = document.getElementsByTagName("li");
  const $ulElement = document.querySelector(".list-container");

  if ($list.length === 0 && tasks.length === 0) {
    $image.setAttribute("src", "img/img1.png");
    $image.setAttribute("alt", "");
    $image.classList.add("img-spaced", "img-width");
    $image.classList.remove("img-display");
    $ulElement.classList.add("list-container-display");
    $textNoTasks.classList.add("textNoTasks-align", "textNoTasks__text");
    $textNoTasks.classList.remove("textNoTasks-display");

    
  } else {
    $image.classList.add("img-display");
    $ulElement.classList.remove("list-container-display");
    $textNoTasks.classList.add("textNoTasks-display");
  }
}

function addImageElAndText() {
  $section.appendChild($image);
  $section.appendChild($textNoTasks);
  $textNoTasks.textContent = "No tienes tareas pendientes 🤪";
}
