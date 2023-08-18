let icon = document.querySelector(".icon i");
let checkMenu = document.querySelector(".links ul");
let checkLi = document.querySelectorAll(".ul-check li");
icon.addEventListener('click', () => {
  checkMenu.classList.toggle('check');
  document.addEventListener('click', (e) => {
  if (e.target !== icon) {
    checkMenu.classList.remove('check');
  }
})
});
checkLi.forEach((li) => {
  li.addEventListener('click', () => {
    checkMenu.classList.remove('check');
  })
})
