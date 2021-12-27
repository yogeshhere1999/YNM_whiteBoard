let Menubtn = document.querySelector('.Menubtn');
let toolHeader = document.querySelector('.toolHeader');

    let toolHeaderFlag = true;
Menubtn.addEventListener("click",()=>{

    toolHeaderFlag ? toolHeaderFlag = false: toolHeaderFlag = true;
    if(toolHeaderFlag){
        toolHeader.style.display  = "none";
        toolHeader.classList.remove('toolHeaderAni')
    }else if(!toolHeaderFlag){
        toolHeader.style.display  = "";
        toolHeader.classList.add('toolHeaderAni')
    }

    
    
})
let toolPenFlag = true;
let pen = document.querySelector('.pen');
let penToolBox = document.querySelector('.penTool-Box')
pen.addEventListener('click',()=>{

    toolPenFlag ? toolPenFlag = false: toolPenFlag = true;
    if(toolPenFlag){
        penToolBox.style.display  = "none";
        
    }else if(!toolPenFlag){
        penToolBox.style.display  = "";
       
    }

    

})



let toolEraserBox = true;
let eraser = document.querySelector('.eraser');
let eraserToolBox = document.querySelector('.eraser-Box')
eraser.addEventListener('click',()=>{

    toolEraserBox ? toolEraserBox = false: toolEraserBox = true;
    if(toolEraserBox){
        eraserToolBox.style.display  = "none";
        
    }else if(!toolEraserBox){
        eraserToolBox.style.display  = "";
       
    }

    

})