const requestURL = "https://christijohnson.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let citystate = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    let membership = document.createElement("p");

    h2.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    citystate.textContent = `${business.citystate}`;
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;
    membership.textContent = `${business.membership} member`;

    // build image attributes using setAttribute method for src, alt, loading attribute value
    logo.setAttribute("src", business.imageurl);
    logo.setAttribute("alt", `Logo of ${business.name}`);

    // add/append section/card with elements
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(citystate);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    // add/append existing HTML div with cards class with section/card
    cards.appendChild(card);
}

// directory page layout toggle 
function griddirectory () {
    document.getElementById('dirlayout').classList.add('gridview');
    document.getElementById('dirlayout').classList.remove('listview');
    document.getElementById('gridBtn').classList.add('dirselect');
    document.getElementById('listBtn').classList.remove('dirselect');
}

function listdirectory () {
    document.getElementById('dirlayout').classList.add('listview');
    document.getElementById('dirlayout').classList.remove('gridview');
    document.getElementById('listBtn').classList.add('dirselect');
    document.getElementById('gridBtn').classList.remove('dirselect');
}

const g = document.getElementById('gridBtn');
g.onclick = griddirectory;

const l = document.getElementById('listBtn');
l.onclick = listdirectory;