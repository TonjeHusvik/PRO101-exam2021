import {RestaurantsModule} from './restaurantsModule.js'

// får tak i html-elementer
const restaurantsSection = document.querySelector("#restaurants-section");
const deleteRestaurantsModal = document.querySelector("#delete-restaurants-modal");
const addRestaurantBtn = document.querySelector("#add-restaurant-btn");
const deleteRestaurantBtn = document.querySelector("#delete-restaurant-btn");

// funksjon for å pushe brukerinput til restaurants-array, og legge til ny restaurant
let pushData = (ev) => {
   ev.preventDefault(); // for at skjemaet ikke skal submitte 
    var result = confirm("Legg til restaurant?"); // popup for å bekrefte før man submitter
    var addOK = alert("Restauranten er lagt til!"); 

    // hvis man trykker OK på confirm-alert, så kjører funksjonen
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
        addOK; // bekrefter at restauranten blir lagt til
        document.querySelector('form').reset(); // reset form after submitting

        console.log(RestaurantsModule.restaurants);
    }
}

// bekreftelsesmelding før man sletter restaurant, etterfulgt av alert på at restauranten er slettet
let editRestaurantOK = () => {
    var result = confirm("Vil du virkelig slette denne restauranten?"); // popup for å bekrefte før man sletter
    var deleteOK = alert("Restauranten er slettet!") // popup for å bekrefte at restauranten er slettet
    if (result) {
        deleteOK;
        removeRestaurantModal.classList.remove('is-active');
    }
}

// looper igjennom og printer ut alle restauranter i cards, sammen med deres modal
const showAll = () => {

let restaurantCardTxt = "";

    RestaurantsModule.getAllRestaurants().forEach(restaurants => {
        restaurantCardTxt += `
            <!-- ${restaurants.restaurant} RESTAURANT CARD -->
            <article class="column is-3">
                <div class="card">
                    <section class="card-image">
                        <img src="../images/restaurants/${restaurants.image}" alt="${restaurants.restaurant}-restaurantbilde">
                    </section>
                    <section class="card-content">
                        <p class="restaurant-popup-btn restaurant-card-name">${restaurants.restaurant}</p>
                    </section>
                </div>
            </article>
            
            <!-- ${restaurants.restaurant} MODAL POPUP -->
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

// printer ut alle restaurantnavn, så du kan velge hvem som skal slettes
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

// kjører funksjoner når tilhørende knapper blir trykket på
// forsikrer seg om at sokumentet er lastet før funksjonene kjøres
document.addEventListener('DOMContentLoaded', () => {
    addRestaurantBtn.addEventListener('click', pushData);
    deleteRestaurantBtn.addEventListener('click', editRestaurantOK);
});

// MODAL POPUP ÅPNE/LUKKE
// henter html-elementene for restaurant-card-popups
const popupViews = document.querySelectorAll('.restaurant-card-modal');
const popuppBtns = document.querySelectorAll('.restaurant-popup-btn');
const closeBtns = document.querySelectorAll('.close-restaurant-modal');
const modalBg = document.querySelectorAll('.restaurant-modal-bg');

// henter html-elementer for legg til restaurant-knapp og slett restaurant-knapp
// legg til restaurant
const addRestaurantPopupBtn = document.querySelector('#add-restaurant-popup-btn');
const addRestaurantsModalCancelBtn = document.querySelector('#add-restaurant-modal-cancel-btn');
const addRestaurantsModalCancelBtn2 = document.querySelector('#add-restaurant-modal-cancel-btn2');
const addRestaurantModal = document.querySelector('#add-restaurant-modal');
// slett restaurant
const removeRestaurantPopupBtn = document.querySelector('#remove-restaurant-popup-btn');
const removeRestaurantCancelBtn = document.querySelector('#remove-restaurant-cancel-btn');
const removeRestaurantModal = document.querySelector('#remove-restaurant-modal');


// felles funksjon for å åpne restaurant-card-popups
var popup = function(popupClick){
    popupViews[popupClick].classList.add('is-active');
}

popuppBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener('click', () => {
        popup(i);
    });
});

// felles funksjon for å lukke restaurant-card-popups
// lukkes når man trykker på "Avslutt" eller krysset i hjørnet
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});

// lukkes når man trykker på bakgrunnen/uttafor boksen
modalBg.forEach((modalB) => {
    modalB.addEventListener('click', () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});

// åpner legg-til-restaurant-popup
addRestaurantPopupBtn.addEventListener('click', () => {
    addRestaurantModal.classList.add('is-active');
})

// lukker legg-til-restaurant-popup og viser den nye restauranten, hvis noen, når man trykker på "Legg til restaurant"
addRestaurantsModalCancelBtn.addEventListener('click', () => {
    addRestaurantModal.classList.remove('is-active');

    if(RestaurantsModule.restaurants.length >= 5){
        showAll();
    }
})

// lukker legg-til-restaurant-popup når man trykker på "Avslutt"
addRestaurantsModalCancelBtn2.addEventListener('click', () => {
    addRestaurantModal.classList.remove('is-active');

    if(RestaurantsModule.restaurants.length >= 5){
        showAll();
    }
})

// åpner slett-restaurant-popup
removeRestaurantPopupBtn.addEventListener('click', () => {
    removeRestaurantModal.classList.add('is-active');
})

// lukker slett-restaurant-popup
removeRestaurantCancelBtn.addEventListener('click', () => {
    removeRestaurantModal.classList.remove('is-active');
})