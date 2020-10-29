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
      const card = el.querySelector('.map-pins__card')
      card.classList.remove('hide')
      card.classList.remove('open')
    })
    const card = item.querySelector('.map-pins__card')
    card.classList.add('open')

    if (e.target.classList.contains('map-pins__close')) {
      card.classList.remove('open')
    }

    if (item.offsetTop < 400) {
      card.style.bottom = '-80px'
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

const factoryInfo = [
  {
    title: 'Завод Ейсмана',
    addres: 'Либідська площа',
    img: 'factory-1.jpg',
    text: `
      Власник: Cпочатку аптекар Іван Ейсман, 
      згодом заводом володів його син, Густав Ейсман, 
      професор Університету св. ВОлодимира, київський міський голова у 1872-1873, 
      1879-1884 рр. Далі завод перейшов у спадок до його доньки Емілії Суботіної
      <br>
      Цікаві факти: Один з провідних київських заводів. У 1848 році випустив 1,5 млн цеглин.
      З цегли заводу побудовані Червоний корпус, Перша та Друга Київські гімназії, 
      Кадетський корпус (тепер Міністерство оборони).
    `
  },
  {
    title: 'Монастирський завод Лаври',
    addres: 'При в\'їзді на сучасний Південний міст, коло вулиці Інженерної',
    img: 'factory-2.jpg',
    text: `
      Власник: Києво-Печерська лавра
      <br>
      Цікаві факти: Один з найбільших цегляних заводів Києва. Так у 1859 році виробив 1 млн цеглин.
    `
  },
  {
    title: 'Казенний завод №1',
    addres: 'Залізничне шосе',
    img: 'factory-3_4.jpg',
    text: `
      Власник: Держава, належав до відомства Київський інженерний департамент
      <br>
      Цікаві факти: Продукція заводу йшла переважно для будівництва укріплень Київської фортеці. Працювали на виробництві переважно солдати та засуджені.
    `
  },
  {
    title: 'Казенний завод №2',
    addres: 'Корчувате',
    img: 'factory-3_4.jpg',
    text: `
      Власник: держава, належав до відомства Київський інженерний департамент
      <br>
      Цікаві факти: Випускав невеликі партії цегли для військово-інженерних потреб. Працювали на виробництві переважно солдати та засуджені.
    `
  },
  {
    title: 'Завод Гудимів-Левковичів',
    addres: 'Нижньоюрківська 2',
    img: 'factory-5_6.png',
    text: `
      Власники: родина Гудимів-Левковичів
      <br>
      Цікаві факти: Один з найстаріших заводів Києва. 
      Функціонував з 1765 року. 
      Річна потужність була досить невеликою - 100 тис. цеглин на рік, проте цегла вирізнялась якістю.
    `
  },
  {
    title: 'Завод Романовського',
    addres: 'Нижньоюрківська 4',
    img: 'factory-5_6.png',
    text: `
      Власник: київський міщанин Романовський
      <br>
      Цікаві факти: Про завод дуже мало відомостей, імовірно випускав обмежені партії цегли під конкретні замовлення.
    `
  },
]

const shopsInfo = [
  {
    title: 'Бакалійна лавка Якова Ромащенка',
    addres: 'вулиця Фундуклеївська, 92',
    img: 'shop-1.jpg',
    text: `
      Що продавали: сухі їстівні товари 
      (сухофрукти, копченості), а також чай, каву та прянощі
      <br>
      Цікавий факт – свою назву бакалійні магазини отримали від турецького слова bakkal – продавець
      овочів. Згодом, окрім продуктів харчування, які мають довгий термін придатності, почали
      продавались і побутові товари.
    `
  },
  {
    title: 'Галантерейні магазини',
    addres: 'вулиця Печерська, 64',
    img: 'shop-2.jpg',
    text: `
      Що продавали: аксесуари та предмети одягу (краватки, рукавички, шарфи)
      <br>
      Цікавий факт – свою назву галантерейні магазини отримали від турецького слова galanterie –
      галантність, вишуканість. Окрім прикрас та елементів одяг яку в таких магазинах також продають
      щітки для волосся та дзеркала.
    `
  },
  {
    title: 'Суконно-мануфатурні магазини',
    addres: '«Торговий будинок М.С. Джигіт І Ко», Катеринослав, 52',
    img: 'shop-3.jpg',
    text: `
      Що продавали: вовняна та напіввовняна тканина, а також нитки
      <br>
      Цікавий факт – у таких магазинах не продавався готовий одяг, лише тканина для його виготовлення, а
      також допоміжні матеріали при пошиві.
    `
  },
  {
    title: 'Магазини готового одягу',
    addres: 'вул. Крещатик, 29',
    img: 'shop-4.jpg',
    text: `
      Що продавали: вовняна та напіввовняна тканина, а також нитки
      <br>
      Цікавий факт – для людей XXI ст. 
      може видатись дивним, що такі магазини виносились в окрему категорію, але оскільки у ХІХ ст. ще багато жителів міста замовляли одяг на пошив, 
      то саме магазини готового одягу ставали першими прототипами масмаркету.
    `
  },
  {
    title: 'Взуттєвий магазин',
    addres: 'вул. Крещатик, 29',
    img: 'shop-5.jpg',
    text: `
      Що продавали: різного виду взуття
      <br>
      Цікавий факт – оскільки якісне взуття було недешевим задоволенням, 
      бо для його виготовлення закуповувались імпортні матеріали, 
      то дозволити собі гарну пару могли лише найзаможніші кияни.
    `
  },
  {
    title: 'Булочні та кондитерські магазини',
    addres: 'кав’ярня-кондитерська «Жоржь», Хрещатицька, 28',
    img: 'shop-6.jpeg',
    text: `
      Що продавали: торти, тістечка, цукерки
      <br>
      Цікавий факт – окрім великого асортименту солодощів у таких кондитерських 
      можна було замовити бонбоньєрки за власним дизайном (невеликі коробочки для цукерок у вигляді скриньки, 
      які часто використовувались як подарунок на весілля чи званій вечері).
    `
  },
  {
    title: 'Тютюнові магазини',
    addres: 'вул. Крещатик, 29',
    img: 'shop-7.jpg',
    text: `
      Що продавали: різні види табаку та нюхальні суміші
      <br>
      Цікавий факт – Одним з найбільших імпортерів цигарок до 
      Російської імперії була Львівська тютюнова фабрика, яка діє і досі
    `
  },
  {
    title: 'Книжкові магазини «Книжний магазин Литова»',
    addres: 'вулиця Хрещатик, 50',
    img: 'shop-8.jpg',
    text: `
      Що продавали: друкована продукція (книги, журнали та брошури)
      <br>
      Цікавий факт – у ХІХ ст. книги були дорогим задоволенням, 
      ціна одного примірника (в залежності від популярності автора) могла коливатись у проміжку 7-20 рублів 
      (до прикладу, 1 хлібина – 1 коп.). Найулюбленішим жанром киян був роман.
    `
  },
  {
    title: 'Магазини сільськогосподарського інвентаря',
    addres: 'кав’ярня-кондитерська «Жоржь», Хрещатицька, 28',
    img: 'shop-9.jpg',
    text: `
      Що продавали: вила, лопати, сапи, граблі
      <br>
      Цікавий факт - лише в цих магазинах можна було придбати інструменти, 
      виготовлені з так званої “крупівської сталі” ( сталь з заводів найбільшого німецького концерну “Крупп”). 
      Їх цінували за дуже високу якість та часті поставки до міста.
    `
  }
]


function openInfoModal(array) {
  const modalInfo = document.querySelector('.modal-info')
  const modalContent = document.querySelector('.modal-info__content')
  const cardLink = document.querySelectorAll('.card__link')

  array.forEach((el, indexArr) => {

    const html = `
      <button type="button" class="modal-info__close"></button>
      <div class="modal-info__img">
        <img src="image/${el.img}" alt="">
      </div>
      <div class="modal-info__descr">
        <div class="modal-info__top">
          <h3 class="modal-info__title">${el.title}</h3>
          <address class="modal-info__addres">${el.addres}</address>
          <p>${el.text}</p>
        </div>
        <div class="modal-info__bottom">
          <button class="btn card__btn modal-info__btn">На мапі</button>
        </div>
      </div>
    `
    
    cardLink.forEach((link, indexLink) => {

      link.addEventListener('click', (e) => {
        e.preventDefault()
        if (indexArr === indexLink) {
          modalContent.innerHTML = html
          modalInfo.classList.add('open')

          document.querySelector('.modal-info__close')
            .onclick = () => modalInfo.classList.remove('open')

          document.querySelector('.modal-info__btn')
            .addEventListener('click', () => {
              mapItems.forEach(item => {
                const index = item.dataset.index
          
                if (indexArr + 1 == index) {
                  modalInfo.classList.remove('open')
                  const card = item.querySelector('.map-pins__card')
                  modalMap.classList.add('open')
                  item.classList.add('open')
                  card.classList.add('open')
                }
              })
            })
        }
      })

    })
    
  })

}

const modalInfoFactory = document.querySelector('#modal-info-factory')
const modalInfoShops = document.querySelector('#modal-info-shops')

if (modalInfoFactory) {
  openInfoModal(factoryInfo)
}

if (modalInfoShops) {
  openInfoModal(shopsInfo)
}


