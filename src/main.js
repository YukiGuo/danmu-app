let input = document.querySelector('.content')
let screen = document.querySelector('.screen')
let shoot = document.querySelector('.shoot')
let clear = document.querySelector('.clear')
let close = document.querySelector('.close')
let open = document.querySelector('.open')
let id
shoot.addEventListener('click', () => {
    let newNode = document.createElement('div')
    newNode.style.color = `rgb(${color()},${color()},${color()})`
    newNode.style.top = 400 * Math.random() + 'px'
    newNode.style.left = '400px'
    newNode.className = 'danmu'
    newNode.innerHTML = input.value;
    screen.append(newNode)
    id = setInterval(() => {
        move(newNode)
    }, 100)
    function move(ele) {
        let a = parseInt(ele.style.left)
        let b = parseInt(window.getComputedStyle(ele).width)
        console.log(b)
        if (a >= -b) {
            ele.style.left = a - 10 + 'px'
        } else {
            clearInterval(id)
        }
    }

})

clear.addEventListener('click', () => {
    screen.innerHTML = '';
})
close.addEventListener('click', () => {
    screen.style.display = 'none'
})
open.addEventListener('click', () => {
    screen.style.display = 'block'
})

function color() {
    return parseInt(255 * Math.random())
}