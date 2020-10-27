const modalClose = document.querySelector('.modal-map__close')
const modalOpen = document.querySelector('.top__btn')
const modalMap = document.querySelector('.modal-map')
const mapItems = document.querySelectorAll('.map-pins__item')

modalClose.addEventListener('click', (e) => {
  modalMap.classList.remove('open')
})

modalOpen.addEventListener('click', (e) => {
  e.preventDefault()
  modalMap.classList.add('open')
})

mapItems.forEach(item => {

  item.addEventListener('click', function() {
    mapItems.forEach(el => {
      this.classList.remove('open')
      const card = el.querySelector('.map-pins__card')
      card.classList.remove('open')
    })
    
    this.classList.add('open')
    const card = item.querySelector('.map-pins__card')
    card.classList.add('open')
  })
})