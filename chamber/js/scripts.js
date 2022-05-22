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

//const feedbackElement = document.getElementById('feedback');
  // get the form so we can read what was entered in it.
  //const formElement = document.forms[0];
  // add a 'listener' to wait for a submission of our form. When that happens run the code below.
  if (weekday == 'Monday' || weekday == 'Tuesday') {
    document.getElementById("inviteBanner").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  //formElement.addEventListener('submit', function(e) {
    //stop the form from doing the default action
    //e.preventDefault();
    // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
    //feedbackElement.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    // make the feedback element visible.
    //feedbackElement.style.display = "block";
    // add a class to move everything down so our message doesn't cover it.
    //document.body.classList.toggle('moveDown');
   }