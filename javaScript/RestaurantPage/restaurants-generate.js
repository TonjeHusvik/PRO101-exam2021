import {RestaurantsModule} from './restaurantsModule.js'

// getting all html-elements
const restaurantsSection = document.querySelector("#restaurants-section");
const deleteRestaurantsModal = document.querySelector("#delete-restaurants-modal");
const addRestaurantBtn = document.querySelector("#add-restaurant-btn");
const deleteRestaurantBtn = document.querySelector("#delete-restaurant-btn");
const confirmationMessage = document.getElementsByClassName("confirmation-message");
const deleteRestaurantIdValue = document.getElementsByClassName("delete-restaurant-id-value");

// function to push info from user input into restaurants array, to add a new restaurant
let pushData = (ev) => {
   ev.preventDefault(); // to stop the form from submitting    
    var result = confirm("Legg til restaurant?"); // popup to confirm before you submit
    var addOK = alert("Restauranten er lagt til!"); 
    if (result) {
        const input = {        
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
                
        RestaurantsModule.addNewRestaurant(input);
        addOK;
        document.querySelector('form').reset(); // reset form after submitting
        
        console.log(RestaurantsModule.restaurants);
    }
}

// confirmation message before deleting a restaurant, followed by a message confirming the removal

let editRestaurantOK = () => {
    var result = confirm("Vil du virkelig slette denne restauranten?"); // popup to confirm before you submit
    var deleteOK = alert("Restauranten er slettet!")
    if (result) {
        deleteOK;
        removeRestaurantModal.classList.remove('is-active');
    }
}

// delete restaurant?
/*
const deleteRestaurant = () =>{
    RestaurantsModule.deleteRestaurant(deleteRestaurantIdValue.value).forEach(restaurants =>{
        
        console.log(deleteRestaurantIdValue);
    })
}
*/

// looping through and printing out all restaurants with their modals
const showAll = () => {

let restaurantCardTxt = "";

    RestaurantsModule.getAllRestaurants().forEach(restaurants => {
        restaurantCardTxt += `
            <!-- RESTAURANT CARDS -->
            <article class="column is-3">
                <div class="card">
                    <section class="card-image">
                        <img src="../images/restaurants/${restaurants.image}">
                    </section>
                    <section class="card-content">
                        <p class="restaurant-popup-btn restaurant-card-name">${restaurants.restaurant}</p>
                    </section>
                </div>
            </article>
            
            <!-- MODAL POPUP -->
            <div class="modal restaurant-card-modal">
                <div class="modal-background restaurant-modal-bg"></div>
                <div class="modal-card">

                    <header class="modal-card-head">
                        <div class="modal-card-title">
                        <p class="modal-card-title-main">${restaurants.restaurant}</p>
                        <p class="modal-card-title-second">${restaurants.address}</p></div>
                        <button class="delete close-restaurant-modal" aria-label="close"></button>
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
                            <button class="button close-restaurant-modal">Avslutt</button>
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
        restaurantsSection.innerHTML = restaurantCardTxt;
    });
}

showAll();

// printing out all restaurant names so you can choose which one to delete
let deleteRestaurantsModalTxt = "";

RestaurantsModule.getAllRestaurants().forEach(restaurants => {
    deleteRestaurantsModalTxt += `
        <label class="restaurant${restaurants.id}" class="radio">
            <input id="delete-restaurant-id-value" type="radio" name="restaurant" value="class="${restaurants.id}"">
            ${restaurants.restaurant}
        </label><br>
    `;
});
deleteRestaurantsModal.innerHTML = deleteRestaurantsModalTxt;

// to make sure the document is loaded before function runs
document.addEventListener('DOMContentLoaded', () => {
    addRestaurantBtn.addEventListener('click', pushData);
    deleteRestaurantBtn.addEventListener('click', editRestaurantOK);
});

// MODAL POPUP OPEN/CLOSE
// getting html-elements for restaurant card popups
const popupViews = document.querySelectorAll('.restaurant-card-modal');
const popuppBtns = document.querySelectorAll('.restaurant-popup-btn');
const closeBtns = document.querySelectorAll('.close-restaurant-modal');
const modalBg = document.querySelectorAll('.restaurant-modal-bg');

// getting html-elements for add restaurant-button and delete restaurant-button
// add restaurant
const addRestaurantPopupBtn = document.querySelector('#add-restaurant-popup-btn');
const addRestaurantsModalCancelBtn = document.querySelector('#add-restaurant-modal-cancel-btn');
const addRestaurantsModalCancelBtn2 = document.querySelector('#add-restaurant-modal-cancel-btn2');
const addRestaurantModal = document.querySelector('#add-restaurant-modal');
//remove restaurant
const removeRestaurantPopupBtn = document.querySelector('#remove-restaurant-popup-btn');
const removeRestaurantCancelBtn = document.querySelector('#remove-restaurant-cancel-btn');
const removeRestaurantModal = document.querySelector('#remove-restaurant-modal');


// open restaurant popup
var popup = function(popupClick){
    popupViews[popupClick].classList.add('is-active');
}

popuppBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener('click', () => {
        popup(i);
    });
});

// close restaurant popup
// close when clicking the button
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});

// close when clicking outside the box/on the background
modalBg.forEach((modalB) => {
    modalB.addEventListener('click', () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});

// open add-restaurant popup
addRestaurantPopupBtn.addEventListener('click', () => {
    addRestaurantModal.classList.add('is-active');
})

// close add-restaurant popup and show the new restaurant, if any, when clicking "Legg til restaurant"
addRestaurantsModalCancelBtn.addEventListener('click', () => {
    addRestaurantModal.classList.remove('is-active');

    if(RestaurantsModule.restaurants.length >= 5){
        showAll();
    }
})

// close add-restaurant popup when clicking "Avslutt"
addRestaurantsModalCancelBtn2.addEventListener('click', () => {
    addRestaurantModal.classList.remove('is-active');
})

// open delete-restaurant popup
removeRestaurantPopupBtn.addEventListener('click', () => {
    removeRestaurantModal.classList.add('is-active');
})

// close delete-restaurant popup
removeRestaurantCancelBtn.addEventListener('click', () => {
    removeRestaurantModal.classList.remove('is-active');
})