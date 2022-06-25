let isDrag = false,
  clientOffset = 0,
  currentOffset = 0,
  posInit = 0;

const speed = 0.06

const slider = document.querySelector('.gallery__slider')

slider.addEventListener('pointerdown', (event) => {
  event.preventDefault()
  posInit = event.clientX + clientOffset
  isDrag = true})

window.addEventListener('pointermove', (event) => {
  if (isDrag) {
    clientOffset = posInit - event.clientX
  }
})
window.addEventListener('pointerup', () => {
  isDrag = false})

slider.addEventListener('touchstart', (event) => {
  event.preventDefault()
})


function drag() {
  const {width} = slider.getBoundingClientRect()
  const maxScroll = width - window.innerWidth
  currentOffset += (-clientOffset - currentOffset) * speed
  if (currentOffset > 0) {
    clientOffset = 0
    currentOffset = 0
  } else if (Math.abs(currentOffset) > Math.abs(maxScroll)) {
    currentOffset = -maxScroll
    clientOffset = maxScroll
  }
  slider.style.setProperty('--drag', currentOffset + 'px')
  requestAnimationFrame(drag)
}

drag()