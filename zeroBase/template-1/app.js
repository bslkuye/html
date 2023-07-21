const toggleBtn = document.getElementsByClassName('toggle');
const btn = document.querySelector('i');
let body = document.querySelector('body');
let nav = document.querySelector('nav');

btn.addEventListener('click', toggle_btn_clicked);
let toggle = localStorage.getItem('toggle_TF');

toggle_check();

if(toggle === null){
  localStorage.setItem('toggle_TF', 'false');
  toggle = localStorage.getItem('toggle_TF');
}

window.addEventListener('load', function(){
  body.classList.remove('preload');
  body.style.visibility = 'visible';
});

function toggle_check() {
  if(toggle == 'true'){
    nav.classList.add('active');
  }
}

function toggle_btn_clicked() {
  if(toggle == 'false'){
    nav.classList.add('active');
    localStorage.setItem('toggle_TF', true);
    toggle = localStorage.getItem('toggle_TF');
  }else if(toggle == 'true'){
    nav.classList.remove('active');
    localStorage.setItem('toggle_TF', false);
    toggle = localStorage.getItem('toggle_TF');
  }
}
