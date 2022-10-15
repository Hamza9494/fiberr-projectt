const navToggle = document.querySelector('.nav-toggle')
const navbar = document.querySelector('.nav-links')

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('show')
})
