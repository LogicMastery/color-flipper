const body = document.querySelector("body")

function setColorGreen(){
    body.addEventListener('click', function(event){
        body.style.backgroundColor = "green"
    })
}

function setColorRed(){
    body.addEventListener('click', function(event){
        body.style.backgroundColor = "red"
    })
}

function setColorBlue(){
    body.addEventListener('click', function(event){
        body.style.backgroundColor = "blue"
    })
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}