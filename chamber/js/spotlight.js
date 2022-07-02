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
        console.log(spot);   // temp line - remove
        spot.forEach(displayBusinesses);

    });

    let num = 1;

    function displayBusinesses(business) {
        // create elements to add to the document
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
        let tagline = document.createElement("p");
        //let address = document.createElement("p");
        //let citystate = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        //let membership = document.createElement("p");

        card.setAttribute("class", `section spot${num}`);
    
        // change textContent property of h2 element to contain prophet's full name
        h2.textContent = `${business.name}`;
        tagline.textContent = `${business.tagline}`;
        //address.textContent = `${business.address}`;
        //citystate.textContent = `${business.citystate}`;
        phone.textContent = `${business.phone}`;
        website.textContent = `${business.website}`;
        //membership.textContent = `${business.membership} member`;
    
        console.log(business)


        // build image attributes using setAttribute method for src, alt, loading attribute value
        logo.setAttribute("src", business.imageurl);
        logo.setAttribute("alt", `Logo of ${business.name}`);
        //logo.setAttribute("loading", "lazy");
    
        // add/append section/card with h2 element
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(tagline);
        //card.appendChild(address);
        //card.appendChild(citystate);
        card.appendChild(phone);
        card.appendChild(website);
        //card.appendChild(membership);

        cards.append(card);
        num += 1;
    
        // add/append existing HTML div with cards class with section/card
        // document.querySelector("div.cards").appendChild(card);
        //cards.appendChild(cards);
    }