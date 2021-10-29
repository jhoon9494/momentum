const loginForm = document.querySelector("#loginForm");
const loginName = loginForm.querySelector("#loginName");
const loginBtn = loginForm.querySelector("#loginBtn");

const logoutForm = document.querySelector("#logoutForm");
const userName = logoutForm.querySelector("#userName");
const logoutBtn = logoutForm.querySelector("#logoutBtn");

const HIDDEN_CLASSNAME = "hidden";
const LOGINNAME_KEY = "loginName";

function loginSubmitHandler(event){
  event.preventDefault();
  userName.innerText = `안녕하세요 ${loginName.value}님`;
  localStorage.setItem(LOGINNAME_KEY, loginName.value); //id 저장
  toggle(HIDDEN_CLASSNAME);
}

function logoutSubmitHandler(event){
  event.preventDefault(); 
  localStorage.removeItem(LOGINNAME_KEY);
  loginName.value = ""; //id 입력창 초기화
  toggle(HIDDEN_CLASSNAME);
}

function toggle(className){
  loginForm.classList.toggle(className);
  logoutForm.classList.toggle(className);
}

const savedUsername = localStorage.getItem(LOGINNAME_KEY);

if(savedUsername === null){
  loginForm.addEventListener("submit", loginSubmitHandler);
} else {
  userName.innerText = `안녕하세요 ${savedUsername}님`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.addEventListener("submit", logoutSubmitHandler);
}