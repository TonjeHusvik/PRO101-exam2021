import {RestaurantsModule} from './restaurantsModule.js'

const restaurantsSection = document.querySelector("#restaurants-section");
const modalContainer = document.querySelector("#modal-container");

let restaurantCardTxt = "";

RestaurantsModule.getAllRestaurants().forEach(restaurants => {
    restaurantCardTxt += `
            <!-- RESTAURANT CARDS -->
            <article class="column">
                <div class="card">
                    <section class="card-image">
                        <img src="../images/restaurants/${restaurants.image}">
                    </section>
                    <section class="card-content">
                        <a class="popup-btn">${restaurants.restaurant}</a>
                    </section>
                </div>
            </article>
            
            <!-- MODAL POPUP -->
            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">

                    <header class="modal-card-head">
                        <p class="modal-card-title">${restaurants.restaurant}</p>
                        <button class="delete" aria-label="close"></button>
                    </header>

                    <section class="modal-card-body">
                        <p>Address: ${restaurants.address}</p>
                        <p>Leader: ${restaurants.leader}</p>
                        <p>Phone: ${restaurants.phone}</p>
                        <p>Mail: ${restaurants.mail}</p>
                        <p>Opening times: ${restaurants.openingtimes}</p>
                        <p>Employees: ${restaurants.emplyees}</p>
                        <p>Established: ${restaurants.established}</p>
                    </section>

                    <footer class="modal-card-foot">
                            <button class="button is-success">Save changes</button>
                            <button class="delete">Cancel</button>
                    </footer>
                </div>
            </div>
    `;
});

restaurantsSection.innerHTML = restaurantCardTxt;