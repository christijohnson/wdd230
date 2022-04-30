const currentdate = new Date();
document.querySelector('#currentyear').textContent = currentdate.getFullYear();

document.querySelector('#updated').textContent = document.lastModified;