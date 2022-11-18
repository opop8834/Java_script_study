const API_KEY = "c1f355da1bf9d8d3480b755dc6c4d96d";

function OnGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${lat}, ${lon}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //   fetch(URL); // URL을 직접 불러서 들어가는 fetch 즉 js가 URL을 직접 불러준다.
  // 근데 fetch는 promise로 당장 일어나지 않고 시간이 좀 걸린 뒤에 일어난다.
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // then을 사용하면 이제 서버에 응답을 다 하고난뒤에 response를 받게된다.
}
function OnGeoError() {
  console.log("Can't find! Error!!");
}

// 사용자의 위치를 파악할 수 있게 됨
navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError); // 성공했을때 error떴을때의 함수를 인자로 받는다.
