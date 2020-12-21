import { radioPlayerInit } from './radioPlayer.js'
import { audioPlayerInit } from './audioPlayer.js'
import { videoPlayerInit } from './videoPlayer.js'

const playerBtn = document.querySelectorAll('.player-btn')
const playeBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')


const deactivationPlayer = () => {
  temp.style.display = 'none'
  playerBtn.forEach(item => item.classList.remove('active'))
  playeBlock.forEach(item => item.classList.remove('active'))
}


playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
  deactivationPlayer()
  btn.classList.add('active')
  playeBlock[i].classList.add('active')
}))


radioPlayerInit()
audioPlayerInit()
videoPlayerInit()