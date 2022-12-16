const [ count ] = document.getElementsByTagName('span');
const countUpBtn = document.getElementById('count-up-button');

countUpBtn.onclick = (event) => {
  console.log(event);
  if(isNaN(Number(count.innerHTML))) return;
  count.innerHTML = Number(count.innerHTML) + 1;
};

count.onmouseover = () => {
  count.style.backgroundColor = 'gray';
  count.style.color = 'white';
};

count.onmouseout = () => {
  count.style.backgroundColor = 'transparent';
  count.style.color = 'black';
};

const input = document.getElementsByTagName('input')[0];
input.onfocus = () => {
  input.value = 'input';
};

const input2 = document.getElementsByTagName('input')[1];
const result = document.getElementById('result');

input2.onchange = (event) => {
  result.innerHTML = event.target.value;
};

const test = document.getElementById('test');

new Array(10).fill(0).forEach((_, index)=>{
  test.addEventListener('click', () =>{
    console.log(`test clicked ${index+1}`);
  });
})
