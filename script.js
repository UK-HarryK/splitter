"use strict"

function split4(pointerEvent){
    if(!pointerEvent.shiftKey){
        addQuarter(this)
        addQuarter(this)
        addQuarter(this)
        addQuarter(this)
        this.removeEventListener("click", split4)
    }else{
        this.parentNode.addEventListener("click", split4)
        this.parentNode.innerHTML = ""
    }
    pointerEvent.stopPropagation()
}

function rbgGenerator(){
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
}

function addQuarter(intoDiv){
    let q = document.createElement("div")
    q.classList.add("quarter")
    q.classList.add("flexy")
    q.style.backgroundColor = rbgGenerator()
    q.addEventListener("click", split4)
    intoDiv.appendChild(q)
}

function deleteQuarters(parentDiv){
    let p = parentDiv.childNodes
    for(let x of p){
        x.remove()
    }
}

addQuarter(document.body)
addQuarter(document.body)
addQuarter(document.body)
addQuarter(document.body)