const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

function onMove(event){
    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onmousedown(event){
    isPainting = true;
}

function onmouseup(event){
    isPainting = false;
    ctx.beginPath();
}

function onLinewidthCahenge(event){
    ctx.lineWidth = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
  }

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill"
    }else {
        isFilling = true;
        modeBtn.innerText = "Draw"
    }

}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    cts.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }

}

function onDoubleClick(event){
    const text = textInput.value;
    if(text !== ""){
        ctx.save();// ctx상태를 저장
        ctx.lineWidth = 1;
        ctx.font = "48px seris";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore(); // 저장상태로 되돌림
    }
    
}

function onSaveClick(){
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmousedown);
canvas.addEventListener("mouseup", onmouseup);
canvas.addEventListener("mouseleave", onmouseup);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLinewidthCahenge);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick)

destroyBtn.addEventListener("click", onDestroyClick);

eraserBtn.addEventListener("click", onEraserClick);

file.addEventListener("change", onFileChange);

saveBtn.addEventListener("click", onSaveClick);

// ctx.act(50,50,50,0,2 * Math.PI); // x, y, 지름, 원호 시작위치, 원호 끝나는 위치

// canvas.addEventListener("mousemove", onclick);

// ctx.lineWidth = 2;
// ctx.moveTo(0,0);

// function onclick(event) {
//     ctx.beginPath();
//     ctx.moveTo(Math.floor(Math.random() * 800),Math.floor(Math.random() * 800));
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
//   }

