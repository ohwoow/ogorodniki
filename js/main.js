const modalClose = document.querySelector('.modal-map__close')
const modalOpen = document.querySelector('.top__btn')
const modalMap = document.querySelector('.modal-map')
const mapItems = document.querySelectorAll('.map-pins__item')
const сardsItem = document.querySelectorAll('.cards__item')

modalClose.addEventListener('click', (e) => {
  modalMap.classList.remove('open')
  document.body.classList.remove('lock')
})

modalOpen.addEventListener('click', (e) => {
  e.preventDefault()
  modalMap.classList.add('open')
  document.body.classList.add('lock')
})

mapItems.forEach(item => {

  item.addEventListener('click', function(e) {
    mapItems.forEach(el => {
      this.classList.remove('open')
      const card = el.querySelector('.map-pins__card')
      card.classList.remove('hide')
      card.classList.remove('open')
    })

    this.classList.add('open')
    const card = item.querySelector('.map-pins__card')
    card.classList.add('open')

    if (e.target.classList.contains('map-pins__close')) {
      card.classList.remove('open')
    }
  })
})

сardsItem.forEach((item, i) => {
  const btn = item.querySelector('.card__btn')

  btn.addEventListener('click', (e) => {
    document.body.classList.add('lock')
    mapItems.forEach(item => {
      const index = item.dataset.index

      if (i + 1 == index) {
        const card = item.querySelector('.map-pins__card')
        modalMap.classList.add('open')
        item.classList.add('open')
        card.classList.add('open')
      }
    })

  })
})
