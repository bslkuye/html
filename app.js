const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const userName = loginInput.value;
  // if(userName == "" || userName == "input name"){
  //   console.log("please write your name");
  // }else if(userName.length > 15){
  //   console.log("your name is too long");
  // }else{
    console.log(userName);
  // }
}

function onLoginputBtnClick() {
  if(loginInput.value =="input name"){
    loginInput.value = "";
  }
}

loginInput.addEventListener("click",onLoginputBtnClick);

loginButton.addEventListener("click",onLoginBtnClick);