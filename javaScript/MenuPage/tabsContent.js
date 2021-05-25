const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })
    })
})


// Modaler

//Legg til produkt modal 1
const addMenuBtn = document.querySelector('#add-menu-item-btn');
const modal1a = document.querySelector('#modal-1a');
const modalBg1a = document.querySelector('#modal-bg-1a');
const cancelAddBtn = document.querySelector('#cancel-add-btn');
const cancelAddBtn2 = document.querySelector('#cancel-add-btn-2');
const addItemBtn = document.querySelector('#add-item-btn')

addMenuBtn.addEventListener('click', () => {
    modal1a.classList.add('is-active');
})
modalBg1a.addEventListener('click', () => {
    modal1a.classList.remove('is-active');
})
cancelAddBtn.addEventListener('click', () => {
    modal1a.classList.remove('is-active');
})
cancelAddBtn2.addEventListener('click', () => {
    modal1a.classList.remove('is-active');
})
addItemBtn.addEventListener('click', () => {
    modal1b.classList.add('is-active');
    modal1a.classList.remove('is-active');
})

// Modal 1b som ber om konfirmasjon om å legge til produkt
const modal1b = document.querySelector('#modal-1b');
const modalBg1b = document.querySelector('#modal-bg-1b');
const cancelAddBtn1b = document.querySelector('#cancel-add-btn-1b');
const cancelAddBtn1b2 = document.querySelector('#cancel-add-btn-1b-2');
const confirmAddBtn = document.querySelector('#confirm-add-btn');

confirmAddBtn.addEventListener('click', () => {
    modal1c.classList.add('is-active');
    modal1b.classList.remove('is-active');
})
modalBg1b.addEventListener('click', () => {
    modal1b.classList.remove('is-active');
})
cancelAddBtn1b.addEventListener('click', () => {
    modal1b.classList.remove('is-active');
})
cancelAddBtn1b2.addEventListener('click', () => {
    modal1b.classList.remove('is-active');
})

// Modal 1c som bekrefter at produkt har blitt lagt til
const modal1c = document.querySelector('#modal-1c');
const confirmAddBtn2 = document.querySelector('#confirm-add-btn-2');
const modalBg1c = document.querySelector('#modal-bg-1c');
const cancelAddBtn1c = document.querySelector('#cancel-add-btn-1c');

confirmAddBtn2.addEventListener('click', () => {
    modal1c.classList.remove('is-active');
})
modalBg1c.addEventListener('click', () => {
    modal1c.classList.remove('is-active');
})
cancelAddBtn1c.addEventListener('click', () => {
    modal1c.classList.remove('is-active');
})

//Dropdown meny i Legg til ansatt modal
//Dropdown Hovedkategori
const dropdown1 = document.querySelector('#dropdown1');

dropdown1.addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('is-active');
})
//Dropwdown Underkategori
const dropdown2 = document.querySelector('#dropdown2');

dropdown2.addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('is-active');
})

// Rediger modal
// Modal 2a for å spørre om hvilket produkt du vil endre på
const editMenuBtn = document.querySelector('#edit-menu-item-btn');
const modalBg2a = document.querySelector('#modal-bg-2a');
const modal2a = document.querySelector('#modal-2a');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
const cancelEditBtn2 = document.querySelector('#cancel-edit-btn-2');
const confirmEditBtn = document.querySelector('#confirm-edit-btn');

editMenuBtn.addEventListener('click', () => {
    modal2a.classList.add('is-active');
})
cancelEditBtn.addEventListener('click', () => {
    modal2a.classList.remove('is-active');
})
modalBg2a.addEventListener('click', () => {
    modal2a.classList.remove('is-active');
})
cancelEditBtn2.addEventListener('click', () => {
    modal2a.classList.remove('is-active');
})
confirmEditBtn.addEventListener('click', () => {
    modal2a.classList.remove('is-active');
    modal2b.classList.add('is-active');
})

// Modal 2b
const modal2b = document.querySelector('#modal-2b');
const modalBg2b = document.querySelector('#modal-bg-2b');
const confirmEditBtn2b = document.querySelector('#confirm-edit-btn-2b');
const cancelEditBtn2b = document.querySelector('#cancel-edit-btn-2b');
const cancelEditBtn2b2 = document.querySelector('#cancel-edit-btn-2b-2');

cancelEditBtn2b.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
})
modalBg2b.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
})
cancelEditBtn2b2.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
})
confirmEditBtn2b.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
    modal2c.classList.add('is-active');
})

//Modal 2c
const modal2c = document.querySelector('#modal-2c');
const modalBg2c = document.querySelector('#modal-bg-2c');
const confirmEditBtn2c = document.querySelector('#confirm-edit-btn-2c');
const cancelEditBtn2c = document.querySelector('#cancel-edit-btn-2c');
const cancelEditBtn2c2 = document.querySelector('#cancel-edit-btn-2c-2');

modalBg2c.addEventListener('click', () => {
    modal2c.classList.remove('is-active');
})
cancelEditBtn2c.addEventListener('click', () => {
    modal2c.classList.remove('is-active');
})
cancelEditBtn2c2.addEventListener('click', () => {
    modal2c.classList.remove('is-active');
})
confirmEditBtn2c.addEventListener('click', () => {
    modal2c.classList.remove('is-active');
    modal2d.classList.add('is-active');
})

//Modal 2d
const modal2d = document.querySelector('#modal-2d');
const modalBg2d = document.querySelector('#modal-bg-2d');
const confirmEditBtn2d = document.querySelector('#confirm-edit-btn-2d');
const cancelEditBtn2d = document.querySelector('#cancel-edit-btn-2d');

modalBg2d.addEventListener('click', () => {
    modal2d.classList.remove('is-active');
})
cancelEditBtn2d.addEventListener('click', () => {
    modal2d.classList.remove('is-active');
})
confirmEditBtn2d.addEventListener('click', () => {
    modal2d.classList.remove('is-active');
})

//Dropdown meny i Redigere ansatt
//Dropdown Hovedkategori
const dropdown1b = document.querySelector('#dropdown1b');

dropdown1b.addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('is-active');
})
//Dropwdown Underkategori
const dropdown2b = document.querySelector('#dropdown2b');

dropdown2b.addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('is-active');
})

//Modal 3
//Modal 3a
const removeItemBtn = document.querySelector('#remove-menu-item-btn');
const modalBg3a = document.querySelector('#modal-bg-3a');
const modal3a = document.querySelector('#modal-3a');
const cancelRemoveBtn3a = document.querySelector('#cancel-remove-btn-3a');
const cancelRemoveBtn3a2 = document.querySelector('#cancel-remove-btn-3a-2');
const confirmremoveBtn = document.querySelector('#confirm-remove-btn');

removeItemBtn.addEventListener('click', () =>{
    modal3a.classList.add('is-active');
})
modalBg3a.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
})
cancelRemoveBtn3a.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
})
cancelRemoveBtn3a2.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
})
confirmremoveBtn.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
    modal3b.classList.add('is-active');
})

//Modal 3b
const modalBg3b = document.querySelector('#modal-bg-3b');
const modal3b = document.querySelector('#modal-3b');
const cancelRemoveBtn3b = document.querySelector('#cancel-remove-btn-3b');
const cancelRemoveBtn3b2 = document.querySelector('#cancel-remove-btn-3b-2');
const confirmremoveBtn3b = document.querySelector('#confirm-remove-btn-3b');

modalBg3b.addEventListener('click', () => {
    modal3b.classList.remove('is-active');
})
cancelRemoveBtn3b.addEventListener('click', () => {
    modal3b.classList.remove('is-active');
})
cancelRemoveBtn3b2.addEventListener('click', () => {
    modal3b.classList.remove('is-active');
})
confirmremoveBtn3b.addEventListener('click', () => {
    modal3b.classList.remove('is-active');
    modal3c.classList.add('is-active');
})

//Modal 3c
const modalBg3c = document.querySelector('#modal-bg-3c');
const modal3c = document.querySelector('#modal-3c');
const cancelRemoveBtn3c = document.querySelector('#cancel-remove-btn-3c');
const confirmremoveBtn3c = document.querySelector('#confirm-remove-btn-3c');

modalBg3c.addEventListener('click', () => {
    modal3c.classList.remove('is-active');
})
cancelRemoveBtn3c.addEventListener('click', () => {
    modal3c.classList.remove('is-active');
})
confirmremoveBtn3c.addEventListener('click', () => {
    modal3c.classList.remove('is-active');
})