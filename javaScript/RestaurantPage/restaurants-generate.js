import {RestaurantsModule} from './restaurantsModule.js'

let confirmationMessage = document.getElementsByClassName(".confirmation-message");

// function to push info from user input into restaurants array, to add a new restaurant
let pushData = () => {
   // ev.preventDefault(); // to stop the form from submitting    
    var result = confirm("Legg til restaurant?"); // popup to confirm before you submit
    if (result) {
        var input = {};
        
        input.restaurant = document.getElementById('name-input').value;
        input.image = "default.png";
        input.id = 5;
        input.address = document.getElementById('address-input').value;
        input.leader = document.getElementById('leader-input').value;
        input.phone = document.getElementById('phone-input').value;
        input.mail = document.getElementById('mail-input').value;
        input.openingtimes = document.getElementById('opening-times-input').value;
        input.employees = document.getElementById('employees-input').value;
        input.established = document.getElementById('established-input').value
                
        RestaurantsModule.restaurants.push(input);
        confirmationMessage.innerHTML = "Restauranten har blitt lagt til!";
        document.querySelector('form').reset(); // reset form after submitting
    }
}

// confirmation message before deleting a restaurant, followed by a message confirming the removal
let editRestaurantOK = () => {
    var result = confirm("Vil du virkelig slette denne restauranten?"); // popup to confirm before you submit
    if (result) {
        confirmationMessage.innerHTML = "Restauranten er slettet!";
    }
}

// getting all html-elements
const restaurantsSection = document.querySelector("#restaurants-section");
const deleteRestaurantsModal = document.querySelector("#delete-restaurants-modal");
const addRestaurantBtn = document.querySelector("#add-restaurant-btn");
const deleteRestaurantBtn = document.querySelector(".delete-restaurant-btn");

// empty variables
let restaurantCardTxt = "";
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
                    <p class="popup-btn restaurant-card-name">${restaurants.restaurant}</p>
                </section>
            </div>
        </article>
        
        <!-- MODAL POPUP -->
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">

                <header class="modal-card-head">
                    <div class="modal-card-title">
                    <p class="modal-card-title-main">${restaurants.restaurant}</p>
                    <p class="modal-card-title-second">${restaurants.address}</p></div>
                    <button class="delete" aria-label="close"></button>
                </header>

                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column is-6">
                            <p><b>Leder</b><br>${restaurants.leader}</p><br>
                            <p><b>Telefon</b></p><p>${restaurants.phone}</p><br>
                            <p><b>E-post</b></p><p>${restaurants.mail}</p>
                        </div>
                        <div class="column is-6">
                            <p><b>Åpningstider</b></p><p>${restaurants.openingtimes}</p><br>
                            <p><b>Ansatte</b></p><p>${restaurants.emplyees}</p><br>
                            <p><b>Etablert</b></p><p>${restaurants.established}</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <a class="button is-warning is-small">
                            <span class="icon is-small">
                                <i class="fas fa-coins"></i>
                            </span>
                            <span>Omsetning</span>
                        </a>
                        <a class="button is-warning is-small">
                            <span class="icon is-small">
                                <i class="fas fa-user-friends"></i>
                            </span>
                            <span>Ansatte</span>
                        </a>
                        <a class="button is-warning is-small">
                            <span class="icon is-small">
                                <i class="fas fa-utensils"></i>
                            </span>
                            <span>Meny</span>
                        </a>
                    </div>
                </section>


                <footer class="modal-card-foot">
                        <button class="button modal-cancel-btn">Avslutt</button>
                        <button class="button is-light is-small edit-button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                            <span>Rediger</span>
                        </button>
                </footer>
            </div>
        </div>
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
/*
const pushData = (ev) =>{
    ev.preventDefault(); // to stop the form from submitting

    // popup to confirm before you submit
    var result = confirm("Legg til restaurant?"); 
    if (result) {
        let array = {
            restaurant: document.getElementById('name-input').value,
            image: "default.png",
            id: 5,
            address: document.getElementById('address-input').value,
            leader: document.getElementById('leader-input').value,
            phone: document.getElementById('phone-input').value,
            mail: document.getElementById('mail-input').value,
            openingtimes: document.getElementById('opening-times-input').value,
            employees: document.getElementById('employees-input').value,
            established: document.getElementById('established-input').value
        }
                
        RestaurantsModule.restaurants.push(input);
        document.querySelector('form').reset(); // reset form after submitting
    }
}
*/
/*
    let data_array = [];
    
    let my_object = {}; 

    my_object.name = "stack";
    my_object.age = 20;
    my_object.hair_color = "red";
    my_object.eye_color = "green";
    
    data_array.push(my_object);

var array = [];
var obj = {};
obj["01"] = array.label;
obj["02"] = array.value;
array.push(obj);
*/

restaurantsSection.innerHTML = restaurantCardTxt;
deleteRestaurantsModal.innerHTML = deleteRestaurantsModalTxt;

// to make sure the document is loaded before function runs
document.addEventListener('DOMContentLoaded', () => {
    addRestaurantBtn.addEventListener('click', pushData);
});

document.addEventListener('DOMContentLoaded', () => {
    deleteRestaurantBtn.addEventListener('click', editRestaurantOK);
});


