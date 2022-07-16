let currentURL = window.location.href;

document.querySelectorAll("nav a").forEach(p => {
  if(currentURL.indexOf(p.getAttribute("href")) !== -1){
    p.classList.add("active");
  }
})