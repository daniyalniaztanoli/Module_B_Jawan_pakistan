const cards = [
    {
    "id": 1,
    "title": "newTitle",
    "price": 205,
    "priceold": 500,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "image_url": "https://i.imgur.com/R2PN9Wq.jpeg"
    },
    {
    "id": 2,
    "title": "Ergonomic Wooden Tuna",
    "price": 743,
    "priceold": 1500,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image_url": "https://i.imgur.com/mp3rUty.jpeg"
    },
    {
    "id": 3,
    "title": "Electronic Bronze Chips",
    "price": 808,
    "priceold": 1000,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "image_url": "https://i.imgur.com/R3iobJA.jpeg"
    },
    {
    "id": 4,
    "title": "Awesome Bronze Car",
    "price": 382,
    "priceold": 500,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
    },
    {
    "id": 5,
    "title": "Recycled Rubber Cheese",
    "price": 300,
    "priceold": 500,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
    }
    ]


    const cardGroup = document.getElementById("cardGroup");


    cards.forEach(card=>{
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");


    cardElement.innerHTML  = `
    <img src="${card.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${card.title}</h5><hr>
                <div class="d-flex justify-content-between flex-wrap">
                <h6 class="card-title">Rs. ${card.price}</h6>
                <s class="card-title">Rs. ${card.priceold}</s>
                <div>
                <hr>
              <small class="card-text ">${card.description}</small>
            </div>`

    cardGroup.appendChild(cardElement)        
})