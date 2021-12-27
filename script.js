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
let toolPenFlag = false;
let pen = document.querySelector('.pen');
let penToolBox = document.querySelector('.penToolBox')
pen.addEventListener('click',()=>{

    toolPenFlag ? toolPenFlag = false: toolPenFlag = true;
    if(toolPenFlag){
        penToolBox.style.display  = "none";
        
    }else if(!toolPenFlag){
        penToolBox.style.display  = "";
       
    }

    

})