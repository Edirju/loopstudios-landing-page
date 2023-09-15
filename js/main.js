let openMenu = document.querySelector('#open-menu')
let closeMenu = document.querySelector("#close-menu");
let menu = document.querySelector('#mobile-menu')

openMenu.addEventListener('click', () => {
  menu.classList.remove('disabled')
})

closeMenu.addEventListener('click', () => {
  menu.classList.add('disabled')
})



