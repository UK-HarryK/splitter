"use strict"

function split4(){
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
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

addQuarter(document.body)
addQuarter(document.body)
addQuarter(document.body)
addQuarter(document.body)