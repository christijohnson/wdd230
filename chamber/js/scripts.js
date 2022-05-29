/* - hamburger button and navigation - */
function toggleMenu () {
    document.getElementById('primNav').classList.toggle('open');
    document.getElementById('hamBtn').classList.toggle('open');
}

const x = document.getElementById('hamBtn');
x.onclick = toggleMenu; 

/* - Date banner and last modified date - */
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

/* - conditional banner - */
if (currentdate.getDay() == 1 || currentdate.getDay() == 5) {
    document.getElementById('inviteBanner').innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    document.getElementById('inviteBanner').classList.remove('hide');
   } else {document.getElementById('inviteBanner').classList.values('hide');}

