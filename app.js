const container = document.querySelector('.container')
const canvasBtn = document.querySelector('.btn')

function boxMaker (size) {
    for (let i = 0; i < (size*size); i++) {
        let box = document.createElement('div')
        box.classList.add('box')
        container.appendChild(box)
    }
}

canvasBtn.addEventListener('click', () => {
    let boxNum = prompt('How many boxes?', 16)
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
    boxMaker(boxNum)
})

boxMaker(5)