const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const circle = document.querySelector('.circle')
let time = 0
let score = 0

const colors = ['#4e8df2', '#4ed7f2', '#4ef2b6', '#72f24e', '#c9f24e', '#f2dc4e', '#d64bc1']

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.
      getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})


function startGame() {
  setInterval(decreaseTime, 1000)

  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }

}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.remove()
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span><br>
  <a href="" class="repeat">Повторить игру</a></h1>`

}


function createRandomCircle() {
  const circle = document.createElement
    ('div')
  const size = getRandomNumber(10, 50)

  const { width, height } = board.
    getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = setColor(circle);
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function setColor(el) {
  const color = getRandomColor()
  el.style.backgroundColor = color;
}
