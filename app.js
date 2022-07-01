const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function onSubmit(event) {
  event.preventDefault();
  console.log(event);
}


loginForm.addEventListener("submit",onSubmit);

