import RestaurantsModule from './restaurantsModule.js'

const restaurantsSection = document.querySelector("#restaurants-section");

let htmlTxt = "";
RestaurantsModule.getAllRestaurants().forEach(restaurants => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                <section class="card-image">
                    <img src="../images/restaurants/${restaurants.image}">
                </section>
                <section class="card-content">
                    <h3>${restaurants.restaurant}</h3>
                </section>
            </div>
        </article>
    `;
});

restaurantsSection.innerHTML = htmlTxt;