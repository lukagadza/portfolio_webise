var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})



document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.toggle-btn')
  const toggleBtnIcon = document.querySelector('.toggle-btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')
  toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
  }
  const isOpen = dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
});