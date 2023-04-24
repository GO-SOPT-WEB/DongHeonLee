import { TODO_DATA } from "./data.js";

let todoData = [];
let todoNum = 0;

//초기 데이터 세팅.
window.onload = () => {
  localStorage.getItem("todo_data") === null &&
    localStorage.setItem("todo_data", JSON.stringify(TODO_DATA));
  todoData = JSON.parse(localStorage.getItem("todo_data"));
  makeTodo(todoData);
  clickTodo();
  todoCount();
};

//list를 탐색하면서 요소를 하나씩 투두로 만드는 함수
function makeTodo(list) {
  todoNum = 0;
  const todoSection = document.getElementById("todo");
  const todoTemplate = document.getElementById("todo_category_template");
  todoSection.replaceChildren();
  list.forEach((item) => {
    let listNewHtml = makeList(item.list, item.category);

    let todoContent = todoTemplate.cloneNode(true);
    let todoNewHtml = todoContent.innerHTML;

    todoNewHtml = todoNewHtml
      .replace("{category_name}", item.category)
      .replace("{todos}", listNewHtml);

    todoContent.innerHTML = todoNewHtml;
    todoSection.appendChild(todoContent.content);
  });
  todoCount();
}
//todo에 들어가는 list 만드는 함수
function makeList(list, categoryName) {
  const listTemplate = document.getElementById("todo_list_template");
  let returnHtml = "";
  list.forEach((item) => {
    item.done === false && todoNum++;
    let listContent = listTemplate.cloneNode(true);
    let listNewHtml = listContent.innerHTML;
    listNewHtml = listNewHtml
      .replace("{done}", item.done)
      .replace("{category_name}", categoryName)
      .replace(/{todo_content}/gi, item.content);
    returnHtml += listNewHtml;
  });
  return returnHtml;
}

//미완료 할일의 수를 표시하는 함수
function todoCount() {
  const selectedTodoNum = document.getElementById("selected_todonum");
  selectedTodoNum.innerText = todoNum;
}

//할일 완료 처리하는 함수
function clickTodo() {
  let localStorageData = JSON.parse(localStorage.getItem("todo_data"));

  const doneBtn = document.getElementsByClassName("done_btn");
  const doneBtnList = [...doneBtn];

  doneBtnList.forEach((item) => {
    item.addEventListener("click", () => {
      const clickedTodo = item.id;
      const clickedCategory = item.nextElementSibling.attributes.category.value;
      console.log(clickedCategory);
      const doneValue = item.children[0].attributes.done.value;
      if (doneValue === "true") {
        localStorageData
          .find((item) => item.category === clickedCategory)
          .list.find((item) => item.content === clickedTodo).done = false;
        item.children[0].attributes.done.value = "false";
        todoNum++;
      } else {
        localStorageData
          .find((item) => item.category === clickedCategory)
          .list.find((item) => item.content === clickedTodo).done = true;
        item.children[0].attributes.done.value = "true";
        todoNum--;
      }
      localStorage.setItem("todo_data", JSON.stringify(localStorageData));
      todoCount();
    });
  });
}
