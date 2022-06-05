// display elements
const daysDisplay = document.querySelector(".days");
const visitsDisplay = document.querySelector(".visits");

// value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let timesince = Number(window.localStorage.getItem("last-visit"));

//first visit or number of visits
if (numVisits !==0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit, welcome!`;
}

// increment number of visits
numVisits++;
//store number of visits value
localStorage.setItem("visits-ls", numVisits);

dayssince = Math.round((Date.now() - timesince) / 86400000);
if (dayssince !== 0) {
    daysDisplay.textContent = dayssince;
} else {
    daysDisplay.textContent = `0`;
}
localStorage.setItem("last-visit", Date.now());