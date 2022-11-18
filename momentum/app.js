const a = 5;
let b = 6;
// const는 상수이고 값이 바뀔 수 없는 것이다.
// let 은 변경 가능
// 이렇게 자바스크립트는 선언문만 보고도 개발자의 의도 파악 가능
// 예전에는 var만 있어서 이것만 사용했는데 var로만 사용하면 값이 바뀌어도 프로그램이 말해주지 않아 안전하지 않음
// 즉 var는 그냥 쓰지말 것
// null은 개발자가 값이 없다는 것을 보여줄때 사용
// undefined는 정의되지 않은건데 프로그램내에서 메모리는 차지하고 있는 상태이다.

const myName = "nico";
// alert("hi");
console.log(myName + "hello");

const daysOfWeek= [ "mon", "tue", "wed", "thr", "fri", "sat", "sun"];
// push, indexOf, splice, map, sort, filter 기능들이 있음
console.log(daysOfWeek[3]);

// 리스트 대신 object로 표현하기
// 각각의 index가 멀 의미하는지 표현할 수 있다는 장점이 있다.
const player = {
    name: "홍길동",
    points: 10,
    fat: "true",
    sayHello: function(other){    // object안에서의 함수 정의
        console.log("Hello my name is " + other);
    }
};
console.log(player.name);
console.log(player["name"]);

player.lastName = "lastname";   // 이렇게 property를 임의로 추가할 수도 있다.
console.log(player);


// function : 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해줌
function hello (name){   // parameter
    console.log("Hello my name is " + name);
}
hello(player.name);   // argument
player.sayHello("노길동");   // object 내부에서 정의


const age = parseInt(prompt("How old are you?"));    // 사용자에게 창을 띄울 수 있게 해줌 (CSS 적용 불가, 안예쁨, 너무 오래된 방법)
console.log(typeof age);  // string타입 number로
if (age)
{
    console.log(age);
}
else{            // isNaN(age)
    console.log("Input number!!!!!!!!!!");
}

const tid = document.getElementById("title");   // html에서 특정 id를 찾을 수 있게 해줌
console.dir(tid);    // innerHTML, autofocus 같은 object 집합들이 많이 있다.

tid.innerText= "Got You";          // 이렇게 javascript에서 html요소를 가져올 수 있다.
tid.style.color = "blue";   // js에서도 object를 통해 color변경 가능
console.dir(tid.id);
console.dir(tid.className);
console.log("-----------------------");
const tquery = document.querySelector(".hello h1");  // 주로 queryselector사용 hello클래스 안에있는 h1을 가져오라는 뜻 CSS형식 만약 여러개라면 첫번째껄 return
// const tquery = document.querySelectorAll(".hello h1");   // 중복인 hello클래스들 모두 가져오기
// const tquery = document.querySelectorAll(".hello h1:first-child");  // 이렇게 h1의 첫번째 자식이라고 지정도 가능
// const tquery = document.querySelectorAll("#hello");   // class명이아닌 id로 찾을때는 #명시

// const tquery = document.querySelector("div h1");
console.log(tquery);

// 이벤트 추가하기
const h1 = document.querySelector("div.hello h1:first-child");   // div의 클래스 이름이 hello이고 그의 자식중 첫번째 h1가져오기
console.log(h1);

function handleTitleClick()
{
    // CSS 파일과 상호작용
    // const cssName = "active";
    // if (h1.className === cssName)
    // {
    //     h1.className = "";
    // }
    // else{
    //     h1.className = cssName;
    // }
// h1.className으로 그냥 class를 바꿔버리면 html에서 만약 h1에 class 이름 sexyfont를 정의해버리면 그 class모두 포함해서 교체가 되버린다. 즉 폰트가 사라지게 되는 것이다.
    
    // CSS 파일과 상호작용 classList이용
    // const cssName = "active";
    // if (h1.classList.contains(cssName))
    // {
    //     h1.classList.remove(cssName);
    // }
    // else{
    //     h1.classList.add(cssName);
    // }
// 이제 h1에 sexy-font를 적용한 것이 사라지지 않음!!

    //CSS 파일과 상호작용 classList이용 toggle 이용
    const cssName = "active";
    h1.classList.toggle(cssName)    //cssName이 있는지 파악해서 있으면 제거하고 존재하지 않는다면 추가해준다.
// 이렇게 간단히 두줄로 표현 가능!!



    // 그냥 js에서 css편집하기 근데 권장하지는 않음 style은 css 파일안에서 바꿔주기
    // const currentColor = h1.style.color;
    // let newColor;
    // console.log(currentColor  + " color");
    // if (currentColor === "blue")
    // {
    //     newColor = "tomato";
    // }
    // else
    // {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
}
h1.addEventListener("click",handleTitleClick);   //handleTitleClick() 라고 쓰지 말 것 왜? ()붙이면 곧바로 실행되기 때문에

// 마우스 이벤트
function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!"
}
h1.addEventListener("mouseenter", handleMouseEnter);  // mouse를 갖다댈때 event  hover같은 기능인듯
// title.onclick = handleMouseEnter;  위랑 동일 선호하지는 않음 eventlistener를 지울 수 없어서
h1.addEventListener("mouseleave", handleMouseLeave);   // mouse point를 치워버릴때


// more 이벤트
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier");
}
window.addEventListener("resize", handleWindowResize);  // 창크기가 바뀔 때 이벤트
window.addEventListener("copy", handleWindowCopy);      // ctrl + c 했을 때 이벤트