const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function handleLinkClick() {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  
  console.log(username);
}


loginForm.addEventListener("submit",onSubmit);
link.addEventListener("click", handleLinkClick);
