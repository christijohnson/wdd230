const requestURL = "json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const directory = jsonObject["directory"];
        console.table(jsonObject);  // temporary checking 
        directory.forEach(displayDirectory);
    });

function displayDirectory(company) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let image = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");

    let order = ``;

    // change textContent property of h2 element to contain prophet's full name
    h2.textContent = `${company.name}`;
    address.textContent = `address:  ${company.birthdate}`;
    phone.textContent = `phone:  ${company.birthplace}`;

    // build image attributes using setAttribute method for src, alt, loading attribute value
    image.setAttribute("src", company.imageurl);
    image.setAttribute("alt", `Portrait of ${company.name} Latter-day President`);
    image.setAttribute("loading", "lazy");

    // add/append section/card with h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(image);

    // add/append existing HTML div with cards class with section/card
    // document.querySelector("div.cards").appendChild(card);
    cards.appendChild(card);
}