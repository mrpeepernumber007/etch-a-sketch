const container = document.querySelector('.container')
const canvasBtn = document.querySelector('.btn')

function addColor (thingy) {
    const red = Math.floor(Math.random() * 255) 
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255) 
    thingy.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function boxMaker (size) {
    for (let i = 0; i < (size); i++) {
        let line = document.createElement('div')
        line.classList.add('line')
        container.appendChild(line)
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div')
            box.classList.add('box')
            box.style.width = `calc(960px * (1/${size}))`
            box.style.height = `calc(960px * (1/${size}))`
            line.appendChild(box)
            box.addEventListener('mouseover', () => addColor(box))
        }
    }
}

function sizePrompt () {
    let boxNum = prompt('How many boxes?', 16)
    if (boxNum > 100) {sizePrompt()}
    else {
        let lines = document.querySelectorAll('.line')
        let boxes = document.querySelectorAll('.box')
        boxes.forEach(box => box.remove())
        lines.forEach(line => line.remove())
        boxMaker(boxNum)
    }
}

canvasBtn.addEventListener('click', sizePrompt)


boxMaker(16)