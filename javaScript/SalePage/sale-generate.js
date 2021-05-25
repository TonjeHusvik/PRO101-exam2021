import saleModule from './saleModule.js'

const saleSection = document.querySelector("#sale-section");
const searchTxtStore = document.querySelector("#search-txt-store");
const searchTxtYear = document.querySelector("#search-txt-year");
const searchTxtMonth = document.querySelector("#search-txt-month");
const searchTxtSale = document.querySelector("#search-txt-sale");

const showAll = () => {
    let htmlTxt = "";
    saleModule.getAllSales().forEach(sales => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                </section>
                <section class="card-content">
                    <h3>${sales.store}</h3>
                    <p>${sales.year}, ${sales.month}, ${sales.brutto}, ${sales.netto} </p>
                </section>
            </div>
        </article>
    `;
});

saleSection.innerHTML = htmlTxt;
}

const getAllStores = () => {
    let htmlTxt = "";
    saleModule.getStores(searchTxtStore.value).forEach(sales => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                </section>
                <section class="card-content">
                    <h3>${sales.store}</h3>
                    <p>${sales.year}, ${sales.month}, ${sales.brutto}, ${sales.netto} </p>
                </section>
            </div>
        </article>
    `;
});

saleSection.innerHTML = htmlTxt;
}

const getAllYear = () => {
    let htmlTxt = "";
    saleModule.getYear(searchTxtYear.value).forEach(sales => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                </section>
                <section class="card-content">
                    <h3>${sales.store}</h3>
                    <p>${sales.year}, ${sales.month}, ${sales.brutto}, ${sales.netto} </p>
                </section>
            </div>
        </article>
    `;
});

saleSection.innerHTML = htmlTxt;
}

const getAllMonth = () => {
    let htmlTxt = "";
    saleModule.getMonth(searchTxtMonth.value).forEach(sales => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                </section>
                <section class="card-content">
                    <h3>${sales.store}</h3>
                    <p>${sales.year}, ${sales.month}, ${sales.brutto}, ${sales.netto} </p>
                </section>
            </div>
        </article>
    `;
});

saleSection.innerHTML = htmlTxt;
}


/*
//input + buttons
function getCertainStore(){
    sales.forEach(store => {
        if(getAllStores === getAllKarlJohan){

        }
    })
    return getAllStores;
}*/

const searchStoresBtn = document.querySelector('#search-stores-btn');
searchStoresBtn.addEventListener('click', getAllStores);

const searchYearBtn = document.querySelector('#search-year-btn');
searchYearBtn.addEventListener('click', getAllYear);

const searchMonthBtn = document.querySelector('#search-month-btn');
searchMonthBtn.addEventListener('click', getAllMonth);

showAll();


//tabs
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
                box.classList.toggle('is-hidden');
            }
        });
    })
})

//modal buttons
const openModal = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll('.open-modal-btn');
const closeModal = document.querySelectorAll('.delete, .modal-cancel-btn');
const modalBackG = document.querySelectorAll('.modal-background');
const modalNewWindow = document.querySelectorAll('.new-window-modal');

// open popup
var popup = function(popupClick){
    openModal[popupClick].classList.add('is-active');
}

modalBtn.forEach((popupBtn, i) => {
    popupBtn.addEventListener('click', () => {
        popup(i);
    });
});

// close popup
// close when clicking the button
closeModal.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        openModal.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});

// close when clicking outside the box/on the background
modalBackG.forEach((modalB) => {
    modalB.addEventListener('click', () => {
        openModal.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});