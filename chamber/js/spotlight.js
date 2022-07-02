const requestURL = "https://christijohnson.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        var businesses = jsonObject["businesses"];
        businesses = businesses.filter( element => element.membership =="Gold" || element.membership =="Silver");
        const spot = [];
        for (var i = 0; i < 3; i++) {
            const randomElement = businesses[Math.floor(Math.random() * businesses.length)];
            spot.push(randomElement);
            businesses = businesses.filter( element => element.name != randomElement.name);
        }
        spot.forEach(displayBusinesses);

    });

    let num = 1;

    function displayBusinesses(business) {
        // create elements to add to the document
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
        let tagline = document.createElement("h3");
        let phone = document.createElement("p");
        let website = document.createElement("p");
    
        card.setAttribute("class", `section spot${num}`);
    
        // change textContent property of elements
        h2.textContent = `${business.name}`;
        tagline.textContent = `${business.tagline}`;
        phone.textContent = `${business.phone}`;
        website.textContent = `${business.website}`;
    
        // build image attributes using setAttribute method for src, alt, loading attribute value
        logo.setAttribute("src", business.imageurl);
        logo.setAttribute("alt", `Logo of ${business.name}`);
    
        // add/append section/card elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(tagline);
        card.appendChild(phone);
        card.appendChild(website);

        cards.append(card);
        num += 1;
    }