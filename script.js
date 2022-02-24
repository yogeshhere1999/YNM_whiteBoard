let menubutton = document.querySelector(".menubutton");
let toolheader = document.querySelector(".toolheader");

let colorpalette = document.querySelector(".colorpalette");
let colors = document.querySelector(".colors");

let pen = document.querySelector(".pen");
let penheader = document.querySelector(".penciltoolbox");

let eraser = document.querySelector(".eraser");
let eraserheader = document.querySelector(".erasertoolbox");
let colorpaletteflag = true;

// STICKY NOTES
let stickytool = document.querySelector(".stickytool");
stickytool.addEventListener("click", () => {
    let div = document.createElement("div")
    div.setAttribute("class", "stickynotescontainer")
    div.innerHTML = `<div class="stickyheader">
                        <div class="stickyminimizebutton">
                            <span class="material-icons-outlined">
                                do_disturb_on
                            </span>
                        </div>
                        <div class="stickycancelbutton">
                            <span class="material-icons-outlined">
                                cancel
                            </span>
                        </div>
                    </div>
                    <div class="stickycontentarea">
                        <textarea class="textarea"></textarea>
                    </div>`
    document.querySelector("body").append(div)
    let minimize = div.querySelector(".stickyminimizebutton")
    let minimizestatus = false
    minimize.addEventListener("click", () => {
        minimizestatus ? minimizestatus = false : minimizestatus = true
        if (minimizestatus) {
            let contentarea = div.querySelector(".stickycontentarea")
            contentarea.style.display = "none"
        } else if (!minimizestatus) {
            let contentarea = div.querySelector(".stickycontentarea")
            contentarea.style.display = ""
        }
    })

    let remove = div.querySelector(".stickycancelbutton")
    remove.addEventListener("click", () => {
        remove.parentElement.parentElement.remove()
    })
    draganddrop(div)
})


// STICKY IMAGE NOTES

let stickyimagetool = document.querySelector(".stickyimagetool");
stickyimagetool.addEventListener("click", () => {

    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();
    input.addEventListener('change', () => {

        let imagefile = input.files[0];

        let url = URL.createObjectURL(imagefile);

        let div = document.createElement("div")
        div.setAttribute("class", "stickynotescontainer")
        div.innerHTML = `<div class="stickyheader">
                        <div class="stickyminimizebutton">
                            <span class="material-icons-outlined">
                                do_disturb_on
                            </span>
                        </div>
                        <div class="stickycancelbutton">
                            <span class="material-icons-outlined">
                                cancel
                            </span>
                        </div>
                    </div>
                    <div class="stickycontentarea">
                        <img src = '${url}'>
                    </div>`
        document.querySelector("body").append(div)
        let minimize = div.querySelector(".stickyminimizebutton")
        let minimizestatus = false
        minimize.addEventListener("click", () => {
            minimizestatus ? minimizestatus = false : minimizestatus = true
            if (minimizestatus) {
                let contentarea = div.querySelector(".stickycontentarea")
                contentarea.style.display = "none"
            } else if (!minimizestatus) {
                let contentarea = div.querySelector(".stickycontentarea")
                contentarea.style.display = ""
            }
        })

        let remove = div.querySelector(".stickycancelbutton")
        remove.addEventListener("click", () => {
            remove.parentElement.parentElement.remove()
        })
        draganddrop(div)


    })


})



function draganddrop(div) {
    div.onmousedown = function (event) {

        let shiftX = event.clientX - div.getBoundingClientRect().left;
        let shiftY = event.clientY - div.getBoundingClientRect().top;

        div.style.position = 'absolute';
        div.style.zIndex = 1000;
        // document.body.append(div);

        moveAt(event.pageX, event.pageY);

        // moves the div at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
            div.style.left = pageX - shiftX + 'px';
            div.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // move the div on mousemove
        document.addEventListener('mousemove', onMouseMove);

        // drop the div, remove unneeded handlers
        div.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            div.onmouseup = null;
        };

    };
}

let tooleraserflag = true;
eraser.addEventListener("click", () => {
    tooleraserflag ? tooleraserflag = false : tooleraserflag = true
    if (tooleraserflag) {
        eraserheader.style.display = "none"
        eraserheader.classList.remove("toolanimation")
    } else if (!tooleraserflag) {
        eraserheader.style.display = ""
        eraserheader.classList.add("toolanimation")
    }
})

let toolpenflag = true;
pen.addEventListener("click", () => {
    toolpenflag ? toolpenflag = false : toolpenflag = true
    if (toolpenflag) {
        penheader.style.display = "none"
        penheader.classList.remove("toolanimation")
    } else if (!toolpenflag) {
        penheader.style.display = ""
        penheader.classList.add("toolanimation")
    }
})
let toolheaderflag = true;
menubutton.addEventListener("click", () => {
    toolheaderflag ? toolheaderflag = false : toolheaderflag = true
    if (toolheaderflag) {
        toolheader.style.display = "none"
        toolheader.classList.remove("toolanimation")
    } else if (!toolheaderflag) {
        toolheader.style.display = ""
        toolheader.classList.add("toolanimation")
    }
})

colorpalette.addEventListener("click", () => {
    colorpaletteflag ? colorpaletteflag = false : colorpaletteflag = true
    if (colorpaletteflag) {
        colors.style.display = "none"
        colors.classList.remove("toolanimation")
    } else if (!toolheaderflag) {
        colors.style.display = ""
        colors.classList.add("toolanimation")
    }
})