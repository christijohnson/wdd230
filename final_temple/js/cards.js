const requesturl = "/wdd230/final_temple/json/temples.json";
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
    let name = document.createElement("h3");
    let picture = document.createElement("img");
    let address = document.createElement("address");
    let phone = document.createElement("p");
    let services = document.createElement("p");
    let servicesList = document.createElement("ul");
    let milestones = document.createElement("p");
    let milestonesList = document.createElement("ul");
    let templeclosure = document.createElement("p");
    let templeclosureList = document.createElement("ul");
    let likeBtn = document.createElement("button");
    likeBtn.classList.add("btn");
    likeBtn.setAttribute("id","likeBtn")

    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.telephone}`;
    services.textContent = `Services offered:`;
    servicesList.innerHTML = `<li>${temple.services[0].s1}</li><li>${temple.services[0].s2}</li>`;
    milestones.textContent = `Milestones:`;
    milestonesList.innerHTML = `<li>${temple.milestones[0].m1}</li><li>${temple.milestones[0].m2}</li>`;
    templeclosure.textContent = `Temple Closures`;
    templeclosureList.innerHTML = `<li>${temple.templeclosure[0].c1}</li><li>${temple.templeclosure[0].c2}</li>`;
    likeBtn.innerHTML = `<img src="images/temple.svg" height="30px">`;
    
    picture.setAttribute("src", temple.picture);
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