import saleModule from './saleModule.js'

//HTML
const saleSection = document.querySelector("#sale-section");
const searchTxtStore = document.querySelector("#search-txt-store");
const searchTxtYear = document.querySelector("#search-txt-year");
const searchTxtMonth = document.querySelector("#search-txt-month");
const searchStoresBtn = document.querySelector('#search-stores-btn');
const searchYearBtn = document.querySelector('#search-year-btn');
const searchMonthBtn = document.querySelector('#search-month-btn');
const dishesBtn = document.querySelector("#dishes-btn");3
//MARTINE
const dishesInputArray = document.querySelector("#dishes-input-array");
const drinksSortByOsloBtn = document.querySelector("#drinks-sort-by-oslo-btn");
const appetizerSortByOsloBtn = document.querySelector("#appetizer-sort-by-oslo-btn");
const mainCourseSortByOsloBtn = document.querySelector("#main-course-sort-by-oslo-btn");
const dessertSortByOsloBtn = document.querySelector("#dessert-sort-by-oslo-btn");
const pizzaSortByOsloBtn = document.querySelector("#pizza-sort-by-oslo-btn");
const allDishesOsloBtn = document.querySelector("#all-dishes-oslo-btn");
//Viser alle restauranter + årstall + måneder
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

//Viser kun restauranter
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

//Viser kun årstall
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

//Viser kun måneder
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

//MARTINE
//Henter ut alle rettene i arrayet og legger dem i en tabbel. Denne blir hentet når man trykker på omsetning-retter knappen
const mainteable = () => {

    let htmlTxt = "";

    saleModule.getAllDishes().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt +=`
            <tr>
                <td>${dishes.place}</td>
                <td>${dishes.name}</td>
                <td>${dishes.amount}</td>
                <td>${dishes.price}</td>
                <td>${dishes.category}</td>
                <td>${sumAmount}</td>
            </tr>
        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}

//Martine
//Henter alle retter som har "place: Oslo S".
//Prøv å få skriv ut det her. Mainteable fungerer (den over).
//Men denne har en feil. Finner den ikke. Men de skal egt fungere.
const sortByOsloSDishes = () => {

    let htmlTxt = "";

    saleModule.getOsloSDishes().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt +=`
        <tr>
                <td>${dishes.place}</td>
                <td>${dishes.name}</td>
                <td>${dishes.amount}</td>
                <td>${dishes.price}</td>
                <td>${dishes.category}</td>
                <td>${sumAmount}</td>
            </tr>

        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}
 
const sortByOsloSDrinks = () =>{

    let htmlTxt = "";

    saleModule.getOsloSDrink().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt +=`
        <tr>
                <td>${dishes.place}</td>
                <td>${dishes.name}</td>
                <td>${dishes.amount}</td>
                <td>${dishes.price}</td>
                <td>${dishes.category}</td>
                <td>${sumAmount}</td>
            </tr>

        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}

/** 
const sortByOsloSAppetizer = () =>{

    let htmlTxt = "";

    saleModule.getOsloSAppetizer().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt +=`
            <tr>
                <td>${dishes.place}</td>
                <td>${dishes.name}</td>
                <td>${dishes.amount}</td>
                <td>${dishes.price}</td>
                <td>${dishes.category}</td>
                <td>${sumAmount}</td>
            </tr>

        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}

*/

const sortByOsloSMainCourse = () =>{

    let htmlTxt = "";

    saleModule.getOsloSMainCourse().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt += `
        <tr>
            <td>${dishes.place}</td>
            <td>${dishes.name}</td>
            <td>${dishes.amount}</td>
            <td>${dishes.price}</td>
            <td>${dishes.category}</td>
            <td>${sumAmount}</td>
        </tr>
        `

    })

    dishesInputArray.innerHTML = htmlTxt;
}

const sortByOsloSAppetizer = () =>{
    
    let htmlTxt = "";

    saleModule.getOsloSAppetizer().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt += `
        <tr>
            <td>${dishes.place}</td>
            <td>${dishes.name}</td>
            <td>${dishes.amount}</td>
            <td>${dishes.price}</td>
            <td>${dishes.category}</td>
            <td>${sumAmount}</td>
        </tr>
        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}

const sortByOsloSPizza = () =>{
    let htmlTxt = "";

    saleModule.getOsloSPizza().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt += `
        <tr>
            <td>${dishes.place}</td>
            <td>${dishes.name}</td>
            <td>${dishes.amount}</td>
            <td>${dishes.price}</td>
            <td>${dishes.category}</td>
            <td>${sumAmount}</td>
        </tr>
        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}

const sortByOsloSDessert = () =>{
     
    let htmlTxt = "";

    saleModule.getOsloSDessert().forEach(dishes =>{
        const sumAmount = dishes.price + dishes.amount;
        htmlTxt += `
        <tr>
            <td>${dishes.place}</td>
            <td>${dishes.name}</td>
            <td>${dishes.amount}</td>
            <td>${dishes.price}</td>
            <td>${dishes.category}</td>
            <td>${sumAmount}</td>
        </tr>
        `
    })

    dishesInputArray.innerHTML = htmlTxt;
}

//omsetningsdel - knapper med søk
searchStoresBtn.addEventListener('click', getAllStores);
searchYearBtn.addEventListener('click', getAllYear);
searchMonthBtn.addEventListener('click', getAllMonth);
showAll();

//Martine. Knappen. Oslo dropdown meny

dishesBtn.addEventListener('click', mainteable); 
drinksSortByOsloBtn.addEventListener('click', sortByOsloSDrinks); //Knappen fungerer.
appetizerSortByOsloBtn.addEventListener('click', sortByOsloSAppetizer);
mainCourseSortByOsloBtn.addEventListener('click', sortByOsloSMainCourse);
pizzaSortByOsloBtn.addEventListener('click', sortByOsloSPizza);
dessertSortByOsloBtn.addEventListener('click', sortByOsloSDessert);
allDishesOsloBtn.addEventListener('click', sortByOsloSDishes);

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
const modalBackG = document.querySelectorAll('.modal-background');
modalBackG.forEach((modalB) => {
    modalB.addEventListener('click', () => {
        openModal.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});