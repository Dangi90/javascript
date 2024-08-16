let inputBox = document.getElementById("inputField");
let addToDo = document.getElementById("addTodo");
let toDoList = document.getElementById("todoList");

// 로컬 스토리지에서 할 일 목록 불러오기
function loadToDos() {
  const toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  toDos.forEach((todo) => {
    createTodoElement(todo);
  });
  toggleTodoListBorder();
}

// 할 일 항목 생성 함수
function createTodoElement(todo) {
  var list = document.createElement("li");
  var deleteButton = document.createElement("span");
  deleteButton.innerText = "❌";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.marginLeft = "10px";

  // 텍스트 노드를 사용하여 할 일을 추가
  list.appendChild(document.createTextNode(todo));
  list.appendChild(deleteButton);
  toDoList.appendChild(list);

  // 삭제 버튼 클릭 이벤트
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toDoList.removeChild(list);
    removeTodoFromStorage(todo);
    toggleTodoListBorder();
  });

  toggleTodoListBorder(); // 항목 추가 후 테두리 조정
}

// 로컬 스토리지에 할 일 추가
function addTodoToStorage(todo) {
  const toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  toDos.push(todo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

// 로컬 스토리지에서 할 일 삭제
function removeTodoFromStorage(todo) {
  let toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  toDos = toDos.filter((t) => t !== todo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

// 할 일 목록의 테두리 토글
function toggleTodoListBorder() {
  if (toDoList.children.length === 0) {
    toDoList.style.border = "none";
  } else {
    toDoList.style.border = "2px solid #ccc";
  }
}

// 페이지 로드 시 할 일 목록 불러오기
loadToDos();

addToDo.addEventListener("click", function () {
  if (!inputBox.value) {
    alert("내용을 입력해 주세요!");
  } else {
    createTodoElement(inputBox.value);
    addTodoToStorage(inputBox.value);
    inputBox.value = "";
  }
});
