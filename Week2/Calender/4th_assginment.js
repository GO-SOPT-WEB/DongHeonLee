import { TODO_DATA } from "./data.js";

let todoData = [];
let todoNum = 0;

window.onload = () => {
  localStorage.getItem("todo_data") === null &&
    localStorage.setItem("todo_data", JSON.stringify(TODO_DATA)); //localStorage 초기화
  todoData = JSON.parse(localStorage.getItem("todo_data")); //localStorage에 저장된 목록을 가져옴
  listToTodo(todoData);
};

//list를 탐색하면서 요소를 하나씩 투두로 만드는 함수
function listToTodo(list) {
  todoNum = 0;
  const todoSection = document.getElementById("todo");
  const todoTemplate = document.getElementById("todo_category_template");
  todoSection.replaceChildren();
  list.forEach((item) => {
    let todoListNewHtml = listToTodoList(item.list, item.category);

    let todoContent = todoTemplate.cloneNode(true);
    let todoNewHtml = todoContent.innerHTML;

    todoNewHtml = todoNewHtml
      .replace("{category_name}", item.category)
      .replace("{todos}", todoListNewHtml);

    todoContent.innerHTML = todoNewHtml;
    todoSection.appendChild(todoContent.content);
  });
  todoCount();
}
//미완료 할일의 수를 표시하는 함수
function todoCount() {
  const selectedTodoNum = document.getElementById("selected_todonum");
  selectedTodoNum.innerText = todoNum;
}

function listToTodoList(list, categoryName) {
  const todoListTemplate = document.getElementById("todo_list_template");
  let finalHtml = "";
  list.forEach((item) => {
    item.done === false && todoNum++;
    let todoListContent = todoListTemplate.cloneNode(true);
    let todoListNewHtml = todoListContent.innerHTML;
    todoListNewHtml = todoListNewHtml
      .replace("{done}", item.done)
      .replace("{category_name}", categoryName)
      .replace(/{todo_content}/gi, item.content);
    finalHtml += todoListNewHtml;
  });
  return finalHtml;
}
