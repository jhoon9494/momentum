const clock = document.querySelector("#clock");

function clockhandler(){
  const date = new Date();
  const getHours = date.getHours();
  const getMinutes = date.getMinutes();
  const getSeconds = date.getSeconds();

  const hours = (getHours < 10) ? `0${getHours}` : getHours; // 두자리수로 표현하기 위해 조건식 실행
  const minutes = (getMinutes < 10) ? `0${getMinutes}` : getMinutes;
  const seconds = (getSeconds < 10) ? `0${getSeconds}` : getSeconds;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clockhandler();
setInterval(clockhandler, 1000);
