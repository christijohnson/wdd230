const requestURL = "json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject["businesses"];
        console.table(jsonObject);  // temporary checking 
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    //let birthdate = document.createElement("p");
    //let birthplace = document.createElement("p");

    // change textContent property of h2 element to contain prophet's full name
    h2.textContent = `${businesses.name}`;
    //birthdate.textContent = `Birthdate:  ${businesses.address}`;
    //birthplace.textContent = `Birthplace:  ${businesses.phone}`;

    // build image attributes using setAttribute method for src, alt, loading attribute value
    portrait.setAttribute("src", businesses.imageurl);
    portrait.setAttribute("alt", `Portrait of ${businesses.name} Latter-day President`);
    portrait.setAttribute("loading", "lazy");

    // add/append section/card with h2 element
    card.appendChild(h2);
    //card.appendChild(birthdate);
    //card.appendChild(birthplace);
    card.appendChild(portrait);

    // add/append existing HTML div with cards class with section/card
    // document.querySelector("div.cards").appendChild(card);
    cards.appendChild(card);
}