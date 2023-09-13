const container = document.querySelector('.container')
const canvasBtn = document.querySelector('.btn')

function boxMaker (size) {
    for (let i = 0; i < (size); i++) {
        let line = document.createElement('div')
        line.classList.add('.line')
        container.appendChild(line)
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div')
            box.classList.add('box')
            line.appendChild(box)
            box.addEventListener('click', () => box.classList.add('hovered-box'))
        }
    }
}

canvasBtn.addEventListener('click', () => {
    let boxNum = prompt('How many boxes?', 16)
    let lines = document.querySelectorAll('.line')
    let boxes = document.querySelectorAll('.box')
    lines.forEach(line => line.remove())
    boxes.forEach(box => box.remove())
    boxMaker(boxNum)
})

boxMaker(16)

//test comment, please ignore