const clock = document.querySelector("#getClock");

function getClock() {
  const date = new Date();
  let Hours = date.getHours();
  let Minutes = date.getMinutes();
  let Seconds = date.getSeconds();
  //   console.log(`${Hours} : ${Minutes} : ${Second}`);
  if (Hours < 10) {
    Hours = `0${Hours}`;
  }
  if (Minutes < 10) {
    Minutes = `0${Minutes}`;
    // Minutes = String(Minutes).padStart(2, "0");
  }
  if (Seconds < 10) {
    // Seconds = `0${Seconds}`;
    Seconds = Seconds.toString().padStart(2, "0"); // 이렇게 padStart함수를 써서 바꿀 수도 있다. string길이가 2가 아니라면 "0"을 길이에 맞춰서 앞에 추가해줌 padEnd는 뒤에 추가해줌
  }
  //   console.log(typeof Seconds); // hour.mim,sec는 number형식인데 한자리일때만 0이랑 합쳐져서 string형식으로 출력된다.
  clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;
}

getClock(); // 웹사이트가 load되자마자 실행하고 그다음
setInterval(getClock, 1000); //몇 ms 간격으로 계속해서 함수를 실행시킨다. 5초 간격으로

// setTimeout(sayHello, 5000); // 5초뒤에 한번 실행 시킨다.
