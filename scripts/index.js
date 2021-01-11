import { radioPlayerInit } from './radioPlayer.js'
import { audioPlayerInit } from './audioPlayer.js'
import { videoPlayerInit } from './videoPlayer.js'

//get items sections from document
const playerBtn = document.querySelectorAll('.player-btn')
const playeBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

//make the desired block of the player inactive when click
const deactivationPlayer = () => {
  temp.style.display = 'none'
  playerBtn.forEach(item => item.classList.remove('active'))
  playeBlock.forEach(item => item.classList.remove('active'))

  radioPlayerInit.stop()
  videoPlayerInit.stop()
}

//make the desired block of the player active when click
playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
  deactivationPlayer()
  btn.classList.add('active')
  playeBlock[i].classList.add('active')
}))

//call function all players
videoPlayerInit()
audioPlayerInit()
radioPlayerInit()
