const body = document.querySelector("body");
const nightModeBtn = document.getElementsByClassName("darkmode-icon")[0];
const cancel_btn = document.getElementsByClassName("nav-menu")[0];
const menu_container = document.querySelector(".nav-menu");
const menu = document.querySelector(".menu");
if (localStorage.getItem('theme') === 'dark') { body.classList.add("darkmode") }
//nightmode btn
nightModeBtn.addEventListener("click", () => {
  body.classList.toggle("darkmode")
  if (body.classList.contains("darkmode")) {
    localStorage.setItem('theme', 'dark')
  }
  else { localStorage.setItem('theme', 'light') }
});
//cancel btn
cancel_btn.addEventListener("click", () => {
  menu_container.style.width = "0"
})
//menu btn
menu.addEventListener("click", () => {
  menu_container.style.width = "280px"
})

console.log(menu);
console.log(menu_container);
