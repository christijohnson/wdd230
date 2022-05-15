function toggleMenu () {
    document.getElementById('primNav').classList.toggle('open');
    document.getElementById('hamBtn').classList.toggle('open');
}

const x = document.getElementById('hamBtn');
x.onclick = toggleMenu; 

const currentdate = new Date();
const year = currentdate.getFullYear();
const day = currentdate.getDate();
const dayofweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthname = months[currentdate.getMonth()];
const weekday = dayofweek[currentdate.getDay()];
document.querySelector('#currentDate').textContent = `${weekday}, ${day} ${monthname} ${year}`;
document.querySelector('#updated').textContent = document.lastModified;
document.querySelector('#currentyear').textContent = currentdate.getFullYear();