// jshint esversion:6

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
    let name = document.createElement("h4");
    let picture = document.createElement("img");
    let address = document.createElement("address");
    let phone = document.createElement("p");
    let services = document.createElement("p");
    let servicesList = document.createElement("ul");
    let milestones = document.createElement("p");
    let milestonesList = document.createElement("ul");
    let templeclosure = document.createElement("p");
    let templeclosureList = document.createElement("ul");
    let likeBtn = document.createElement("div");
    likeBtn.classList.add("btn", "like");
    likeBtn.setAttribute("id","likeBtn");
    likeBtn.setAttribute("id",`${temple.id}`);
    likeBtn.setAttribute("onClick", "togglelike(this.id)");

    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.telephone}`;
    services.textContent = `Services offered:`;
    servicesList.innerHTML = buildList(temple.services[0]);
    milestones.textContent = `Milestones:`;
    milestonesList.innerHTML = buildList(temple.milestones[0]);
    templeclosure.textContent = `Temple Closures:`;
    templeclosureList.innerHTML = buildList(temple.templeclosure[0]);
    likeBtn.innerHTML = `<button><img src="images/temple.svg" height="35px" alt="like button"></button>`;
    
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

    if (window.localStorage.getItem('liked' + temple.id) == "on") {
        likeBtn.classList.add('liked');}

//like button

likeBtn.addEventListener('click', () => { 
    likeBtn.classList.toggle('liked');
    });
}


// build li from json
function buildList(data){
    var html = "";
    for(item in data){
        html += '<li>';
            html += data[item];
        html += '</li>';
    }
    return html;
}

function togglelike(clicked_id){
    if (window.localStorage.getItem('liked' + clicked_id) == "on") {
        window.localStorage.setItem('liked' + clicked_id, 'off');
    } else {
        window.localStorage.setItem('liked' + clicked_id, 'on');
    }
}
