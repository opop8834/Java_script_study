const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS = "todos";

// localstorage에 저장하기
let toDos = []; // 값들을 계속해서 저장해야 되기 때문에 let으로

function saveTodos() {
  //   localStorage.setItem("todos", toDos);
  // 이렇게 저장해버리면 a,b,c 형식인 텍스트 형식이기 때문에 맘대로 내용을 끄집어내거나 하지 못하게되고 하나의 텍스트로 보기때문에 새로고침하고 수정하면 값이 대체됨
  // 즉 array형식으로 ["a","b","c"] 이렇게 저장하고 싶다.

  localStorage.setItem(TODOS, JSON.stringify(toDos)); // json.stringify로 배열 자체를 string으로 바꿔주는 함수를 사용
  // 그리고 이 string을 json.parse로 다시 배열형태로 끄집어 낼 수 있게 된다.
}

function printTodo(info) {
  // info 라는 object를 받을 거임
  const li = document.createElement("li"); //js에서 html태그 만들기
  li.id = info.id; // li의 id를 info.id로
  const span = document.createElement("span");
  const button = document.createElement("button"); // 삭제버튼 추가
  button.innerText = "🗑";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span); // li는 span이라는 자식을 가지게 되었다.
  li.appendChild(button);
  span.innerText = info.text;
  //   console.log(li);
  todoList.appendChild(li); // todolist에 이 li를 넣으면 완성!
}

function deleteTodo(event) {
  //   console.dir(event.target.parentElement.innerText); // 여러개의 버튼중 어떤 버튼이 클릭 된건지 알 수 있게
  // 즉 target으로 현재 html element를 파악하고 button에서 그것의 부모인 span으로 적었던 글을 가리키게 된다.
  const li = event.target.parentElement;

  // filter함수는 어느 요소가 true이면 반환하고 false면 건너뛴다.
  // 이제 클릭한 버튼의 아이디를 가지고 비교하여 filter를 거쳐서 원하는 값만 출력되게 할 수 있다.
  toDos = toDos.filter((element) => {
    return element.id !== parseInt(li.id);
  });
  saveTodos(); //그리고 갱신해줌

  // console.log(li.id);
  li.remove();
}

function toDoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  const todoValueObject = {
    text: todoValue,
    id: Date.now(), // id를 date.now로 랜덤값처럼 주기
  }; // 특정 값을 delete할때 중복된 값이 있다면 지우기 곤란하기 때문에 랜덤id를 줄거다 즉 object로 만듦
  toDos.push(todoValueObject);
  saveTodos();

  todoInput.value = "";
  printTodo(todoValueObject);
}
todoForm.addEventListener("submit", toDoSubmit);

function sayHello(item) {
  // arrow function을 사용하지 않을때 이렇게 함수를 별도로 선언하고 사용
  console.log("Hello " + item); //배열의 원소까지도 인자로 파악할 수 있다니
}

const savedInTodos = localStorage.getItem(TODOS);
if (savedInTodos) {
  const parsedTodos = JSON.parse(savedInTodos);
  toDos = parsedTodos;

  //   parsedTodos.forEach(sayHello); // 배열에 있는 원소 하나하나마다 function이 실행되게 할 수 있다.
  // 밑에 방법처럼 밖에서 별도로 함수를 정의하지 않고도 이 안에서 정의 할 수도 있다.
  // 이러한 함수 정의 방식을 arrow function이라고 한다.
  parsedTodos.forEach((item) => {
    printTodo(item);
  });
  // parsedTodos.forEach(printTodo);  // 이렇게 간단히 작성도 가능
}
