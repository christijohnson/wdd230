const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject["prophets"];
        console.table(jsonObject);  // temporary checking 
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");

    let order = ``;

    if (prophet.order === 1) {
        order = `${prophet.order}st`;
    } else if (prophet.order === 2) {
        order = `${prophet.order}nd`;
    } else if (prophet.order === 3) {
        order = `${prophet.order}rd`;
    } else {
        order = `${prophet.order}th`;
    }

    // change textContent property of h2 element to contain prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Birthdate:  ${prophet.birthdate}`;
    birthplace.textContent = `Birthplace:  ${prophet.birthplace}`;

    // build image attributes using setAttribute method for src, alt, loading attribute value
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
    portrait.setAttribute("loading", "lazy");

    // add/append section/card with h2 element
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // add/append existing HTML div with cards class with section/card
    // document.querySelector("div.cards").appendChild(card);
    cards.appendChild(card);
}