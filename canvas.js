let canvas = document.querySelector("canvas");
canvas.height = window.screen.height;
canvas.width = window.screen.width;

let pencolor = "red"
let penwidth = 2

let erasercolor = "white"
let eraserwidth = 3

let canvasundoredodata = [];
let tracker = 0;

let tool = canvas.getContext("2d");
tool.strokeStyle = pencolor;

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    // tool.beginPath();
    // tool.moveTo(e.clientX, e.clientY);

    let data = {
        x:e.clientX,
        y:e.clientY
    }

    beginPath(data);

    function beginPath(data) {
        tool.beginPath();
        tool.moveTo(e.clientX, e.clientY);
    }
})

canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        tool.lineTo(e.clientX, e.clientY);
        tool.stroke();
    }
})

canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;
    let imagedata = canvas.toDataURL();
    canvasundoredodata.push(imagedata);
    tracker = canvasundoredodata.length - 1;
})

let toolcolorred = document.querySelector(".toolcolorred");
toolcolorred.addEventListener("click", () => {
    pencolor = "red"
    tool.strokeStyle = pencolor;
})

let toolcoloryellow = document.querySelector(".toolcoloryellow");
toolcoloryellow.addEventListener("click", () => {
    pencolor = "yellow"
    tool.strokeStyle = pencolor;
})

let toolcolorblue = document.querySelector(".toolcolorblue");
toolcolorblue.addEventListener("click", () => {
    pencolor = "blue"
    tool.strokeStyle = pencolor;
})

let rangeinput = document.querySelector(".inputpenciltool input")
rangeinput.addEventListener("change", () => {
    penwidth = rangeinput.value;
    tool.lineWidth = penwidth
})

let iseraser = false
let neweraser = document.querySelector(".eraser")
neweraser.addEventListener("click", () => {
    iseraser ? iseraser = false : iseraser = true;
    if (iseraser) {
        tool.strokeStyle = erasercolor
    }
    else if (!iseraser) {
        tool.strokeStyle = pencolor
        tool.lineWidth = penwidth
    }
})

let eraserrange = document.querySelector(".inputerasertool input")
eraserrange.addEventListener("change", () => {
    eraserwidth = eraserrange.value;
    tool.lineWidth = eraserwidth
})

let filedownload = document.querySelector(".filedownload");
filedownload.addEventListener("click", () => {
    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = url;
    a.download = "notesOpenBoard.jpeg"
    a.click();
})

let undo = document.querySelector(".undo");
undo.addEventListener("click", () => {
    if (tracker > 0) tracker--;
    console.log(tracker);
    canvasdrawimageagain(tracker, canvasundoredodata);
})

let redo = document.querySelector(".redo");
redo.addEventListener("click", () => {
    if (tracker < canvasundoredodata.length - 1) tracker++;
    console.log(tracker);
    canvasdrawimageagain(tracker, canvasundoredodata);
})

function canvasdrawimageagain(tracker, canvasundoredodata) {
    let imagedata = canvasundoredodata[tracker];

    let newImage = new Image();
    newImage.src = imagedata;
    newImage.onload = (e) => {
        tool.drawImage(newImage, 0, 0, canvas.width, canvas.height);
    }
}