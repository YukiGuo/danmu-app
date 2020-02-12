let input = document.querySelector('.content')
let screen = document.querySelector('.screen')
let shoot = document.querySelector('.shoot')
let clear = document.querySelector('.clear')

shoot.addEventListener('click', () => {
    console.log(shoot)
    let newNode = document.createElement('div')
    newNode.style.top = 400 * Math.random() + 'px'

    newNode.className = 'danmu'
    newNode.innerHTML = input.value;
    move(newNode)
    screen.append(newNode)

})
clear.addEventListener('click', () => {
    screen.innerHTML = '';
})
let id
function move(ele) {
    id = setTimeout(() => {
        ele.style.left = '400px'
        console.log('xxxxxxxxxxxxx')
        ele.style.left -= '10px'
        console.log('vvvvvvvvvvvvvvvvv')
    }, 3000)

}