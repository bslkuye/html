const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

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
}

function onLinewidthCahenge(event){
    ctx.lineWidth = event.target.value;
    ctx.beginPath();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmousedown);
canvas.addEventListener("mouseup", onmouseup);
canvas.addEventListener("mouseleave", onmouseup);

lineWidth.addEventListener("change", onLinewidthCahenge);

// ctx.act(50,50,50,0,2 * Math.PI); // x, y, 지름, 원호 시작위치, 원호 끝나는 위치

// canvas.addEventListener("mousemove", onclick);

// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
//   ];

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

