const images = ["1.jpg", "2.jpg", "3.jpg"]; // 이미지 이름 동일하게 쓴다.

let random2 = Math.floor(Math.random() * images.length);
console.log(images[random2]);

const COUNT = "count";
for (let i = 0; i < 1; ) {
  if (localStorage.getItem(COUNT) === random2.toString()) {
    random2 = Math.floor(Math.random() * images.length);
  } else {
    localStorage.setItem(COUNT, random2);
    i++;
  }
}
const bgImage = document.createElement("img"); // 이제 js에서 html을 추가해보자 img태그를 만듬
bgImage.src = `./img/${images[random2]}`;
// console.log(bgImage); <img src="" /> 형식으로 만들었다.

document.body.appendChild(bgImage);
