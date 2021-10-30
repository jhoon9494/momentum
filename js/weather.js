const API_KEY = "0e88019b235e77810f19d26c5942b161";

function success(pos){
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}°C`;
      city.innerText = `@${data.name}`;
    });
}

function error(err) {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(success, error);