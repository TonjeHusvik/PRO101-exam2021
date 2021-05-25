import {RestaurantsModule} from './restaurantsModule.js'

// getting all html-elements
const restaurantsSection = document.querySelector("#restaurants-section");
const editRestaurantsModal = document.querySelector("#edit-restaurants-modal");
const deleteRestaurantsModal = document.querySelector("#delete-restaurants-modal");
const addRestaurantBtn = document.querySelector("#add-restaurant-btn");

// empty variables
let restaurantCardTxt = "";
let editRestaurantsModalTxt = "";
let deleteRestaurantsModalTxt = "";

// looping through and printing out all restaurants with their modals
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
                        <button class="button modal-cancel-btn">Cancel</button>
                </footer>
            </div>
        </div>
    `;
});

// printing out all restaurant names so you can choose which one to edit
RestaurantsModule.getAllRestaurants().forEach(restaurants => {
    editRestaurantsModalTxt += `
        <input type="checkbox" class="restaurant${restaurants.id}" name="restaurant${restaurants.id}" value="${restaurants.id}">
        <label for="restaurant${restaurants.id}">${restaurants.restaurant}</label><br>
    `;
});

// printing out all restaurant names so you can choose which one to delete
RestaurantsModule.getAllRestaurants().forEach(restaurants => {
    deleteRestaurantsModalTxt += `
        <input type="checkbox" class="restaurant${restaurants.id}" name="restaurant${restaurants.id}" value="${restaurants.id}">
        <label for="restaurant${restaurants.id}">${restaurants.restaurant}</label><br>
    `;
});

// function for user to add a new restaurant to the array
const pushData = () =>{
    var result = confirm("Want to delete?");
    if (result) {
        const nameInput = document.getElementById('name-input').value;
        const addressInput = document.getElementById('address-input').value;
        const leaderInput = document.getElementById('leader-input').value;
        const phoneInput = document.getElementById('phone-input').value;
        const mailInput = document.getElementById('mail-input').value;
        const openingTimesInput = document.getElementById('opening-times-input').value;
        const employeesInput = document.getElementById('employees-input').value;
        const establishedInput = document.getElementById('established-input').valuue;
        
        RestaurantsModule.restaurants.push(`"restaurant: ${nameInput}", "image: ${addressInput}", "id: 5", "address: ${addressInput}", "leader: ${leaderInput}", "phone: ${phoneInput}", "mail: ${mailInput}", "openingtimes: ${openingTimesInput}", "emplyees: ${employeesInput}", "established: ${establishedInput}"`)
    }
}


restaurantsSection.innerHTML = restaurantCardTxt;
editRestaurantsModal.innerHTML = editRestaurantsModalTxt;
deleteRestaurantsModal.innerHTML = deleteRestaurantsModalTxt;


document.addEventListener('DOMContentLoaded', () => {
    addRestaurantBtn.addEventListener('click', pushData);
});