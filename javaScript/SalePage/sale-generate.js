import saleModule from './saleModule.js'

//HTML
const saleSection = document.querySelector("#sale-section");
const searchTxtStore = document.querySelector("#search-txt-store");
const searchTxtYear = document.querySelector("#search-txt-year");
const searchTxtMonth = document.querySelector("#search-txt-month");
const searchStoresBtn = document.querySelector('#search-stores-btn');
const searchYearBtn = document.querySelector('#search-year-btn');
const searchMonthBtn = document.querySelector('#search-month-btn');
const dishesBtn = document.querySelector("#dishes-btn");
//OSLO S - RETTER DROPDOWN //MARTINE
const dishesInputArray = document.querySelector("#dishes-input-array");
const drinksSortByOsloBtn = document.querySelector("#drinks-sort-by-oslo-btn");
const appetizerSortByOsloBtn = document.querySelector("#appetizer-sort-by-oslo-btn");
const mainCourseSortByOsloBtn = document.querySelector("#main-course-sort-by-oslo-btn");
const dessertSortByOsloBtn = document.querySelector("#dessert-sort-by-oslo-btn");
const pizzaSortByOsloBtn = document.querySelector("#pizza-sort-by-oslo-btn");
const allDishesOsloBtn = document.querySelector("#all-dishes-oslo-btn");
//MAJORSTUEN - RETTER DROPDOWN 
const drinksSortByMajoBtn = document.querySelector("#drinks-sort-by-majo-btn");
const appetizerSortByMajoBtn = document.querySelector("#appetizer-sort-by-majo-btn");
const mainCourseSortByMajoBtn = document.querySelector("#main-course-sort-by-majo-btn");
const dessertSortByMajoBtn = document.querySelector("#dessert-sort-by-majo-btn");
const pizzaSortByMajoBtn = document.querySelector("#pizza-sort-by-majo-btn");
const allDishesMajoBtn = document.querySelector("#all-dishes-majo-btn");
//KARL JOHAN - RETTER DROPDOWN
const drinksSortByKarljohanBtn = document.querySelector("#drinks-sort-by-karljohan-btn");
const appetizerSortByKarljohanBtn = document.querySelector("#appetizer-sort-by-karljohan-btn");
const mainCourseSortByKarljohanBtn = document.querySelector("#main-course-sort-by-karljohan-btn");
const dessertSortByKarljohanBtn = document.querySelector("#dessert-sort-by-karljohan-btn");
const pizzaSortByKarljohanBtn = document.querySelector("#pizza-sort-by-karljohan-btn");
const allDishesKarljohanBtn = document.querySelector("#all-dishes-karljohan-btn");
//TORSHOV - RETTER DROPDOWN
const drinksSortByTorshovBtn = document.querySelector("#drinks-sort-by-torshov-btn");
const appetizerSortByTorshovBtn = document.querySelector("#appetizer-sort-by-torshov-btn");
const mainCourseSortByTorshovBtn = document.querySelector("#main-course-sort-by-torshov-btn");
const dessertSortByTorshovBtn = document.querySelector("#dessert-sort-by-torshov-btn");
const pizzaSortByTorshovBtn = document.querySelector("#pizza-sort-by-torshov-btn");
const allDishesTorshovBtn = document.querySelector("#all-dishes-torshov-btn");

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

//MAJORSTUEN
const sortByMajoDishes = () => {

    let htmlTxt = "";

    saleModule.getMajoDishes().forEach(dishes =>{
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
 
const sortByMajoDrinks = () =>{

    let htmlTxt = "";

    saleModule.getMajoDrink().forEach(dishes =>{
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

const sortByMajoMainCourse = () =>{

    let htmlTxt = "";

    saleModule.getMajoMainCourse().forEach(dishes =>{
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

const sortByMajoAppetizer = () =>{
    
    let htmlTxt = "";

    saleModule.getMajoAppetizer().forEach(dishes =>{
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

const sortByMajoPizza = () =>{
    let htmlTxt = "";

    saleModule.getMajoPizza().forEach(dishes =>{
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

const sortByMajoDessert = () =>{
     
    let htmlTxt = "";

    saleModule.getMajoDessert().forEach(dishes =>{
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
//KARL JOHAN
const sortByKarljohanDishes = () => {

    let htmlTxt = "";

    saleModule.getKarljohanDishes().forEach(dishes =>{
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
 
const sortByKarljohanDrinks = () =>{

    let htmlTxt = "";

    saleModule.getKarljohanDrink().forEach(dishes =>{
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

const sortByKarljohanMainCourse = () =>{

    let htmlTxt = "";

    saleModule.getKarljohanMainCourse().forEach(dishes =>{
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

const sortByKarljohanAppetizer = () =>{
    
    let htmlTxt = "";

    saleModule.getKarljohanAppetizer().forEach(dishes =>{
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

const sortByKarljohanPizza = () =>{
    let htmlTxt = "";

    saleModule.getKarljohanPizza().forEach(dishes =>{
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

const sortByKarljohanDessert = () =>{
     
    let htmlTxt = "";

    saleModule.getKarljohanDessert().forEach(dishes =>{
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

//TORSHOV
//KARL JOHAN
const sortByTorshovDishes = () => {

    let htmlTxt = "";

    saleModule.getTorshovDishes().forEach(dishes =>{
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
 
const sortByTorshovDrinks = () =>{

    let htmlTxt = "";

    saleModule.getTorshovDrink().forEach(dishes =>{
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

const sortByTorshovMainCourse = () =>{

    let htmlTxt = "";

    saleModule.getTorshovMainCourse().forEach(dishes =>{
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

const sortByTorshovAppetizer = () =>{
    
    let htmlTxt = "";

    saleModule.getTorshovAppetizer().forEach(dishes =>{
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

const sortByTorshovPizza = () =>{
    let htmlTxt = "";

    saleModule.getTorshovPizza().forEach(dishes =>{
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

const sortByTorshovDessert = () =>{
     
    let htmlTxt = "";

    saleModule.getTorshovDessert().forEach(dishes =>{
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

//MAJORSTUEN

drinksSortByMajoBtn.addEventListener('click', sortByMajoDrinks); //Knappen fungerer.
appetizerSortByMajoBtn.addEventListener('click', sortByMajoAppetizer);
mainCourseSortByMajoBtn.addEventListener('click', sortByMajoMainCourse);
pizzaSortByMajoBtn.addEventListener('click', sortByMajoPizza);
dessertSortByMajoBtn.addEventListener('click', sortByMajoDessert);
allDishesMajoBtn.addEventListener('click', sortByMajoDishes);

//KARLJOHAN

drinksSortByKarljohanBtn.addEventListener('click', sortByKarljohanDrinks); //Knappen fungerer.
appetizerSortByKarljohanBtn.addEventListener('click', sortByKarljohanAppetizer);
mainCourseSortByKarljohanBtn.addEventListener('click', sortByKarljohanMainCourse);
pizzaSortByKarljohanBtn.addEventListener('click', sortByKarljohanPizza);
dessertSortByKarljohanBtn.addEventListener('click', sortByKarljohanDessert);
allDishesKarljohanBtn.addEventListener('click', sortByKarljohanDishes);

//TORSHOV

drinksSortByTorshovBtn.addEventListener('click', sortByTorshovDrinks); //Knappen fungerer.
appetizerSortByTorshovBtn.addEventListener('click', sortByTorshovAppetizer);
mainCourseSortByTorshovBtn.addEventListener('click', sortByTorshovMainCourse);
pizzaSortByTorshovBtn.addEventListener('click', sortByTorshovPizza);
dessertSortByTorshovBtn.addEventListener('click', sortByTorshovDessert);
allDishesTorshovBtn.addEventListener('click', sortByTorshovDishes);

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


const openModal = document.querySelectorAll('.modal'); //åpen popup. (gjelder alle popups)

// close when clicking outside the box/on the background
const modalBackG = document.querySelectorAll('.modal-background');
modalBackG.forEach((modalB) => {
    modalB.addEventListener('click', () => {
        openModal.forEach((popupView) => {
            popupView.classList.remove('is-active');
        });
    });
});


//MODALS LEGG TIL SALG
const addSaleBtn = document.querySelector("#add-sale-btn"); //knapp til popup
const modalAddSale = document.querySelector("#modal-add-sale"); //popup side 1
const addSaleApproveBtn = document.querySelector("#modal-add-sale-approve-btn"); //godkjenn knapp
const addSaleCancelBtn = document.querySelector("#modal-add-sale-cancel-btn"); //avbryt-knapp
const modalValidateAddSale = document.querySelector("#modal-validate-add-sale"); //popup side2
const validateAddSaleApproveBtn = document.querySelector("#modal-validate-add-sale-approve-btn"); //godkjenn knapp
const validateAddSaleCancelBtn = document.querySelector("#modal-validate-add-sale-cancel-btn");//avbryt-knapp
const modalAddSaleValidation = document.querySelector("#modal-add-sale-validation"); //popup side3
const addSaleValidationApproveBtn = document.querySelector("#modal-add-sale-validation-approve-btn"); //godkjenn knapp

addSaleBtn.addEventListener('click', () =>{
    modalAddSale.classList.add('is-active'); //går inn i popup
})

addSaleApproveBtn.addEventListener('click', () =>{
    modalAddSale.classList.remove('is-active'); //går ut fra popup
    //funksjon addSale();
    modalValidateAddSale.classList.add('is-active'); //neste side
}) 

addSaleCancelBtn.addEventListener('click', () =>{
    modalAddSale.classList.remove('is-active'); //går ut fra popup
}) 

validateAddSaleApproveBtn.addEventListener('click', () =>{
    modalValidateAddSale.classList.remove('is-active'); //går ut fra popup
    modalAddSaleValidation.classList.add('is-active'); //neste side
}) 

validateAddSaleCancelBtn.addEventListener('click', () =>{
    modalValidateAddSale.classList.remove('is-active'); //går ut fra popup
}) 

addSaleValidationApproveBtn.addEventListener('click', () =>{
    modalAddSaleValidation.classList.remove('is-active'); //går ut fra popup
    showAll();
})


//MODALS KNAPPER ENDRE SALG
const editSaleBtn = document.querySelector("#edit-sale-btn"); //knapp til popup side 1
const modalEditSale = document.querySelector("#modal-edit-sale"); //popup side 1
const editSaleApproveBtn = document.querySelector("#modal-edit-sale-approve-btn"); //godkjenn knapp
const editSaleCancelBtn = document.querySelector("#modal-edit-sale-cancel-btn"); //avbryt-knapp
const modalEditSaleDetails = document.querySelector("#modal-edit-sale-details"); //popup side 2
const editSaleDetailsApproveBtn = document.querySelector("#modal-edit-sale-details-approve-btn"); //godkjenn knapp
const editSaleDetailsCancelBtn = document.querySelector("#modal-edit-sale-details-cancel-btn"); //avbryt-knapp
const modalEditSaleValidate = document.querySelector("#modal-edit-sale-validate"); //popup side 3
const editSaleValidateApproveBtn = document.querySelector("#modal-edit-sale-validate-approve-btn"); //godkjenn knapp
const editSaleValidateCancelBtn = document.querySelector("#modal-edit-sale-validate-cancel-btn"); //avbryt-knapp
const modalEditSaleValidation = document.querySelector("#modal-edit-sale-validation"); //popup side 4
const editSaleValidationApproveBtn = document.querySelector("#modal-edit-sale-validation-approve-btn"); //godkjenn knapp

editSaleBtn.addEventListener('click', () =>{
    modalEditSale.classList.add('is-active'); //åpner popup
})

editSaleApproveBtn.addEventListener('click', () =>{
    modalEditSale.classList.remove('is-active'); //går ut fra popup
    modalEditSaleDetails.classList.add('is-active');//neste side
})

editSaleCancelBtn.addEventListener('click', () =>{
    modalEditSale.classList.remove('is-active'); //går ut fra popup
})

editSaleDetailsApproveBtn.addEventListener('click', () =>{
    modalEditSaleDetails.classList.remove('is-active'); //går ut fra popup
    modalEditSaleValidate.classList.add('is-active');//neste side
})

editSaleDetailsCancelBtn.addEventListener('click', () =>{
    modalEditSaleDetails.classList.remove('is-active'); //går ut fra popup
})

editSaleValidateApproveBtn.addEventListener('click', () =>{
    modalEditSaleValidate.classList.remove('is-active'); //går ut fra popup
    modalEditSaleValidation.classList.add('is-active');//neste side
})

editSaleValidateCancelBtn.addEventListener('click', () =>{
    modalEditSaleValidation.classList.remove('is-active'); //går ut fra popup
})

editSaleValidationApproveBtn.addEventListener('click', () =>{
    modalEditSaleValidation.classList.remove('is-active'); //går ut fra popup
    showAll();
})


//MODALS KNAPPER LEGG TIL RETTER - SALG
const addDishBtn = document.querySelector("#add-dish-btn"); //knapp til popup
const modalAddDish = document.querySelector("#modal-add-dish"); //popup side 1
const addDishApproveBtn = document.querySelector("#modal-add-dish-approve-btn"); //godkjenn knapp
const addDishCancelBtn = document.querySelector("#modal-add-dish-cancel-btn"); //avbryt-knapp
const modalValidateAddDish = document.querySelector("#modal-validate-add-dish"); //popup side2
const validateAddDishApproveBtn = document.querySelector("#modal-validate-add-dish-approve-btn"); //godkjenn knapp
const validateAddDishCancelBtn = document.querySelector("#modal-validate-add-dish-cancel-btn");//avbryt-knapp
const modalAddDishValidation = document.querySelector("#modal-add-dish-validation"); //popup side3
const addDishValidationApproveBtn = document.querySelector("#modal-add-dish-validation-approve-btn"); //godkjenn knapp

addDishBtn.addEventListener('click', () =>{
    modalAddDish.classList.add('is-active'); //går inn i popup
})

addDishApproveBtn.addEventListener('click', () =>{
    modalAddDish.classList.remove('is-active'); //går ut fra popup
    //funksjon addSale();
    modalValidateAddDish.classList.add('is-active'); //neste side
}) 

addDishCancelBtn.addEventListener('click', () =>{
    modalAddDish.classList.remove('is-active'); //går ut fra popup
}) 

validateAddDishApproveBtn.addEventListener('click', () =>{
    modalValidateAddDish.classList.remove('is-active'); //går ut fra popup
    modalAddDishValidation.classList.add('is-active'); //neste side
}) 

validateAddDishCancelBtn.addEventListener('click', () =>{
    modalValidateAddDish.classList.remove('is-active'); //går ut fra popup
}) 

addDishValidationApproveBtn.addEventListener('click', () =>{
    modalAddDishValidation.classList.remove('is-active'); //går ut fra popup
    showAll();
})

//MODALS KNAPPER ENDRE RETTER - SALG
const editDishBtn = document.querySelector("#edit-dish-btn"); //knapp til popup side 1
const modalEditDish = document.querySelector("#modal-edit-dish"); //popup side 1
const editDishApproveBtn = document.querySelector("#modal-edit-dish-approve-btn"); //godkjenn knapp
const editDishCancelBtn = document.querySelector("#modal-edit-dish-cancel-btn"); //avbryt-knapp
const modalEditDishDetails = document.querySelector("#modal-edit-dish-details"); //popup side 2
const editDishDetailsApproveBtn = document.querySelector("#modal-edit-dish-details-approve-btn"); //godkjenn knapp
const editDishDetailsCancelBtn = document.querySelector("#modal-edit-dish-details-cancel-btn"); //avbryt-knapp
const modalEditDishValidate = document.querySelector("#modal-edit-dish-validate"); //popup side 3
const editDishValidateApproveBtn = document.querySelector("#modal-edit-dish-validate-approve-btn"); //godkjenn knapp
const editDishValidateCancelBtn = document.querySelector("#modal-edit-dish-validate-cancel-btn"); //avbryt-knapp
const modalEditDishValidation = document.querySelector("#modal-edit-dish-validation"); //popup side 4
const editDishValidationApproveBtn = document.querySelector("#modal-edit-dish-validation-approve-btn"); //godkjenn knapp

editDishBtn.addEventListener('click', () =>{
    modalEditDish.classList.add('is-active'); //åpner popup
})

editDishApproveBtn.addEventListener('click', () =>{
    modalEditDish.classList.remove('is-active'); //går ut fra popup
    modalEditDishDetails.classList.add('is-active');//neste side
})

editDishCancelBtn.addEventListener('click', () =>{
    modalEditSale.classList.remove('is-active'); //går ut fra popup
})

editDishDetailsApproveBtn.addEventListener('click', () =>{
    modalEditDishDetails.classList.remove('is-active'); //går ut fra popup
    modalEditDishValidate.classList.add('is-active');//neste side
})

editDishDetailsCancelBtn.addEventListener('click', () =>{
    modalEditDishDetails.classList.remove('is-active'); //går ut fra popup
})

editDishValidateApproveBtn.addEventListener('click', () =>{
    modalEditDishValidate.classList.remove('is-active'); //går ut fra popup
    modalEditDishValidation.classList.add('is-active');//neste side
})

editDishValidateCancelBtn.addEventListener('click', () =>{
    modalEditDishValidation.classList.remove('is-active'); //går ut fra popup
})

editDishValidationApproveBtn.addEventListener('click', () =>{
    modalEditDishValidation.classList.remove('is-active'); //går ut fra popup
    showAll();
})

