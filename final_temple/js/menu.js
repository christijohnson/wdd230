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