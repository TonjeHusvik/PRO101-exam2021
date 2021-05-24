import {RestaurantsModule} from './restaurantsModule.js'

function pushData(){
    const addressInput = document.getElementById('address-input').value;
    const leaderInput = document.getElementById('leader-input').value;
    const phoneInput = document.getElementById('phone-input').value;
    const mailInput = document.getElementById('mail-input').value;
    const openingTimesInput = document.getElementById('opening-times-input').value;
    const employeesInput = document.getElementById('employees-input').value;
    const establishedInput = document.getElementById('established-input').valuue;

}

// MODAL POPUP OPEN/CLOSE
const popupViews = document.querySelectorAll('.modal');
const popuppBtns = document.querySelectorAll('.popup-btn');
const closeBtns = document.querySelectorAll('.delete, .modal-cancel-btn');
const modalBg = document.querySelectorAll('.modal-background');

// open popup
var popup = function(popupClick){
    popupViews[popupClick].classList.add('is-active');
}

popuppBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener('click', () => {
        popup(i);
    });
});

// close popup
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