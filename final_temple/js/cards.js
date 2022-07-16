const requesturl = "https://christijohnson.github.io/wdd230/final_temple/json/temples.json";
const cards = document.querySelector(".cards");

fetch (requesturl)
.then(function(response) {
    return response.json();
})

.then (function(jsonobject) {
    const temples = jsonobject["temples"];
    temples.forEach(displayTemples);
});

function displayTemples(temple) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let picture = document.createElement("img");
    let address = document.createElement("address");
    let phone = document.createElement("p");
    let services = document.createElement("p");
    let servicesList = document.createElement("ul");
    let milestones = document.createElement("p");
    let milestonesList = document.createElement("ul");
    let templeclosure = document.createElement("p");
    let templeclosureList = document.createElement("ul");
    likeBtn.classList.add("btn", "like");

    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    services.textContent = `Services offered:`;
    servicesList.textContent = `<li>${s1}</li><li>${s2}</li>`;
    milestones.textContent = `Milestones:`;
    milestonesList.textContent = `<li>${m1}</li><li>${m1}</li>`;
    templeclosure.textContent = `Temple Closures`;
    templeclosureList.textContent = `<li>${c1}</li><li>${c2}</li>`;

    picture.setAttribute("src", temple.imageurl);
    picture.setAttribute("alt", `Image of the ${temple.name}`);
    picture.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(servicesList);
    card.appendChild(milestones);
    card.appendChild(milestonesList);
    card.appendChild(templeclosure);
    card.appendChild(templeclosureList);
    card.appendChild(likeBtn);

    cards.appendChild(card);
}
