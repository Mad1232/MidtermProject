fetch("./shoes.json")
    .then(response => response.json())
    .then(shoes => loadShoes(shoes));

function loadShoes(shoes) {
    var mainContainer = document.getElementById("goodshoes");

    for (let i = 0; i < shoes.shoes.length; i++) {
        let name = shoes.shoes[i].name;
        let image = shoes.shoes[i].image;
        let price = shoes.shoes[i].price;
        let description = shoes.shoes[i].description;

        // Create card element
        let card = document.createElement("div");
        card.classList.add("col-md-4"); // Each watch occupies 4 columns on medium and larger screens
        card.classList.add("card"); // Add 'card' class
        card.classList.add("shadow-sm"); // Add 'shadow-sm' class
        card.style.transition = "transform 0.3s"; // Add transition for smooth zoom effect

        // Create card content
        let cardContent = `
            <img src="${image}" alt="${name}" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <h5 class="card-text" style = "color: red">Price: ${price}</p>
            </div>
        `;

        // Set card content to innerHTML
        card.innerHTML = cardContent;

        // Add hover effect
        card.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)"; // Zoom in on hover
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)"; // Reset to normal size on mouse leave
        });

        // Append card to main container
        mainContainer.appendChild(card);
    }
}
