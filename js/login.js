const loginForm = document.querySelector("#loginForm");
const loginName = loginForm.querySelector("#loginName");
const loginBtn = loginForm.querySelector("#loginBtn");

const logoutForm = document.querySelector("#logoutForm")
const userName = logoutForm.querySelector("#userName");
const logoutBtn = logoutForm.querySelector("#logoutBtn");

function loginClickHandler(event){
  event.preventDefault();
  if(loginName.value !== ""){
    userName.innerText = `안녕하세요 ${loginName.value}님`;
    saveName(loginName.value);

    loginName.value = "" //id 입력 후 input 초기화
    loginForm.classList.toggle("hidden");
    logoutForm.classList.toggle("hidden");
  } else {
    alert("Please login");
  }
}

function saveName(username){ //id 저장
  localStorage.setItem("loginName", username);
}

function logoutClickHandler(){
  localStorage.removeItem("loginName")
  loginForm.classList.toggle("hidden");
  logoutForm.classList.toggle("hidden");
}

loginBtn.addEventListener("click", loginClickHandler);
logoutBtn.addEventListener("click", logoutClickHandler);