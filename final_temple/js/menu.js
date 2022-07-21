let currentURL = window.location.href;

document.querySelectorAll("nav a").forEach(p => {
  if(currentURL.indexOf(p.getAttribute("href")) !== -1){
    p.classList.add("active");
  }
})

/*   hamburger button   */
function togglemenu() {
  document.getElementById("hamBtn").classList.toggle("open");
  document.getElementById("priNav").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = togglemenu;

/* - last modified date - */
const currentdate = new Date();
const year = currentdate.getFullYear();
const day = currentdate.getDate();
const dayofweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthname = months[currentdate.getMonth()];
const weekday = dayofweek[currentdate.getDay()];
document.querySelector('#updated').textContent = document.lastModified;
document.querySelector('#currentyear').textContent = currentdate.getFullYear();
