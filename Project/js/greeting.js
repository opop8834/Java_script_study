// 이렇게 하나하나 다 가져올 수 있다.
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 좀더 코드를 줄이는 간단한 방법
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");  // form 사용으로 더는 필요 없다.

// 버튼없이 login form 활용
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logOut = document.querySelector("#logout");
const logOutButton = logOut.querySelector("button");

// function btnClick()
// {
//     const username = loginInput.value;
//     // console.dir(loginInput);   value object를 쓰면 입력한 값을 얻어올 수 있구나!
//     if (username)
//     {
//         if (username.length >= 15)
//         {
//             alert("Your name is too long");
//         }
//         else{
//             console.log("Login"+ " "+username);
//         }
//     }
//     else{
//         alert("Please write your name");
//     }
// }

function btnClick() {
  // 이제 html에서 form을 정의하고 input에서 유효성 검사를 하게 만듬  즉 원래 있는 기능을 사용하는 것이다.
  const username = loginInput.value;
  console.log(username);
}

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // string을 저장할때는 대문자로 쓰는게 관습
const USERNAME = "username";

function onLoginSubmit(info) {
  // 버튼이 아닌 submit으로 파악 즉 form을 submit할때 입력값을 받아내게
  info.preventDefault(); // preventDefault()는 event의 기본행동이 발생되지 않도록 막는 역할을 한다.
  // 브라우저가 기본적으로 수행하는 동작을 못하게 하는것이고
  // 즉 form submit할때 브라우저는 새로고침을 안하게 될 것이다.
  console.log(info); // 브라우저는 이렇게 argument를 포함해서 onloginsubmit(argument)형식으로 실행을 하는 것을 알 수 있다.
  // 즉 우리는 그냥 변수를 선언 ex)info로 선언해놓으면 event에 대한 정보를 이 info라는 공간안에 채워지게 되는 것이다.
  // 이 이벤트 정보를 안쓰고 싶으면 그냥 info를 선언조차 안하면 된다.
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username); // localstorage로 유저 네임 저장

  loginForm.classList.add(HIDDEN_CLASSNAME); //submit하면 hidden이란 클래스를 추가한다.

  // greeting.innerText = "Hello " + username;
  printGreeting();
  logOut.classList.remove(HIDDEN_CLASSNAME);
  console.log(username);
}

// loginButton.addEventListener("click", btnClick);
loginForm.addEventListener("submit", onLoginSubmit); // 이렇게 이제는 submit 이벤트로 파악해서 엔터를 누르거나 버튼을 클릭할때 발생한다.
// 브라우저는 이렇게 submit이벤트가 발생하면 onLoginSubmit()함수를 실행할텐데
// 사실 브라우저는 onLoginSubmit(argument) 형식으로 추가적인 정보를 가진 채로 호출을 한다.
// 즉 자바스크립트는 발생한 일에 대해 내가 필요로하는 정보들을 추가로 주는 것이다!
// js는 공짜로 이벤트에 대한 정보를 넘김

// 만약 이미 localstorage에 아이디가 있으면 greeting을 할것
// 일단 form과 greeting 모두 hidden으로 숨겨놓고 조건에 맞는 것만 보이게 하면 될거 같다.

const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  // show the greeting
  printGreeting();
  logOut.classList.remove(HIDDEN_CLASSNAME);
}

function printGreeting() {
  const username = localStorage.getItem(USERNAME);
  greeting.innerText = `Hello ${username}`; // 위와 동일한 방법 `를 사용  ${변수명} string  형식으로 사용
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1은 보이게 만든다.
}

function logoutClick() {
  localStorage.removeItem("username");
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logOut.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
  // window.location.reload();   // 새로고침을 해서 코드를 간단히 한줄로 표현할 수도 있지만.. 새로고침은 쫌..
}

logOutButton.addEventListener("click", logoutClick);

// 링크 테스트-------------------------------------
const link = document.querySelector("#link"); // 링크가 하나뿐이니 그냥 a로 지정
function linkClick(event) {
  event.preventDefault(); // 이렇게 해놓으면 이제 링크를 타고 다른 페이지로 못가게 막는다.
  console.dir(event); // form에서는 submitevent였는데 여기서는 pointerevent이다.  x좌표나 y좌표 같은 것들을 알 수도 있을 것이다.
  alert("Click"); // 이제 링크의 기본동작인 페이지이동을 alert로 막고있다. 물론 확인버튼을 누르면 링크페이지로 넘어간다.
  // 이렇게 alert는 모든 동작들을 막게되기 때문에 요즘에는 안쓰임
}

link.addEventListener("click", linkClick);
// 다시한번 말하자면 addeventlistener는 함수를 실행하는 것이 아니라 브라우저가 이 함수를 실행 하는 것이다. 동시에 그 함수의 event에 대한 정보도 넘겨준다
//------------------------------------------------------
