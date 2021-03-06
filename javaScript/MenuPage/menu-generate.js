import PizzaModule from './menuModules.js'

const pizzaSection = document.querySelector("#pizza-section");

const showMenu = () => {

    let htmlTxt= "";

    PizzaModule.getAllPizzas().forEach( pizzamenu => {
    htmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${pizzamenu.title},  ${pizzamenu.pris}, ID: ${pizzamenu.id}</p>
            </section>
        </div>
    </article>
    `;

    pizzaSection.innerHTML = htmlTxt;
});


    const maindishSection = document.querySelector("#maindish-section");

    let mainhtmlTxt = "";

    PizzaModule.getAllMaindishes().forEach( maindishes => {
    mainhtmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${maindishes.title}, Pris: ${maindishes.pris}, ID: ${maindishes.id}</p>
            </section>
        </div>
    </article>
    `;

    maindishSection.innerHTML = mainhtmlTxt;
    }); 

    const drinksSection = document.querySelector("#drinks-section");

    let drinkshtmlTxt= "";

    PizzaModule.getAllDrinks().forEach( drinksmenu => {
    drinkshtmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${drinksmenu.title}, ${drinksmenu.pris}, ID: ${drinksmenu.id}</p>
            </section>
        </div>
    </article>
    `;
    drinksSection.innerHTML = drinkshtmlTxt;
    });

    const sidesSection = document.querySelector("#sides-section");

    let sideshtmlTxt= "";

    PizzaModule.getAllSides().forEach( sidesmenu => {
    sideshtmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${sidesmenu.title}, ${sidesmenu.pris}, ID: ${sidesmenu.id}</p>
            </section>
        </div>
    </article>
    `;
    sidesSection.innerHTML = sideshtmlTxt;
    });

    const dessertSection = document.querySelector("#dessert-section");

    let desserthtmlTxt= "";

    PizzaModule.getAllDessert().forEach( dessertmenu => {
    desserthtmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${dessertmenu.title}, ${dessertmenu.pris}, ID: ${dessertmenu.id}</p>
            </section>
        </div>
    </article>
    `;
    dessertSection.innerHTML = desserthtmlTxt;
    });

}

showMenu();

 //Legge til produkt
const categoryAddTxt = document.querySelector('#category-add-text');
const titleAddTxt = document.querySelector('#title-add-txt');
const priceAddTxt = document.querySelector('#price-add-txt');
const idAddTxt = document.querySelector('#id-add-txt');
const inputAddMenu = document.querySelector('#input-add-menu');

const addMenu = () =>{

    const tester2 ={
        category: categoryAddTxt.value,
        title: titleAddTxt.value,
        pris: priceAddTxt.value,
        id: idAddTxt.value
    };
    
    PizzaModule.addNewMenu(tester2);

    const htmlTxt= `
        <p>Navn p?? rett: ${tester2.title}</p>
        <p>Pris: ${tester2.pris}</p>
        <p>ID: ${tester2.id}</p>
    `;
    inputAddMenu.innerHTML = htmlTxt;
};

//Slette produkt
const menuIdInputTxt = document.querySelector('#menu-id-input-txt');
const inputDeleteMenu = document.querySelector('#input-delete-menu');

const deleteMenu = () =>{
    let htmlTxt = "";

    PizzaModule.deleteMenu(menuIdInputTxt.value).forEach(menu =>{
        htmlTxt +=`
            <p>${menu.title}</p>
        `;

        console.log(menuIdInputTxt);
    });
    inputDeleteMenu.innerHTML = htmlTxt;
};
// Modaler
//Modal 1a for ?? begynne ?? legge til nytt produkt
const addMenuBtn = document.querySelector('#add-menu-item-btn');
const modal1a = document.querySelector('#modal-1a');
const cancelAddBtn = document.querySelector('#cancel-add-btn');
const cancelAddBtn2 = document.querySelector('#cancel-add-btn-2');
const addItemBtn = document.querySelector('#add-item-btn')

addMenuBtn.addEventListener('click', () => {
    modal1a.classList.add('is-active');
})
cancelAddBtn.addEventListener('click', () => {
    modal1a.classList.remove('is-active');
})
cancelAddBtn2.addEventListener('click', () => {
    modal1a.classList.remove('is-active');
})
addItemBtn.addEventListener('click', () => {
    modal1a.classList.remove('is-active');
    addMenu();
    modal1b.classList.add('is-active');
})

// Modal 1b forsikrer om ?? legge til dette produktet
const modal1b = document.querySelector('#modal-1b');
const cancelAddBtn1b = document.querySelector('#cancel-add-btn-1b');
const cancelAddBtn1b2 = document.querySelector('#cancel-add-btn-1b-2');
const confirmAddBtn = document.querySelector('#confirm-add-btn');

confirmAddBtn.addEventListener('click', () => {
    modal1c.classList.add('is-active');
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
const cancelAddBtn1c = document.querySelector('#cancel-add-btn-1c');

confirmAddBtn2.addEventListener('click', () => {
    modal1c.classList.remove('is-active');
    showMenu();
})
cancelAddBtn1c.addEventListener('click', () => {
    modal1c.classList.remove('is-active');
})

// Rediger modal
// Modal 2a for ?? sp??rre om hvilket produkt du vil endre p??
const editMenuBtn = document.querySelector('#edit-menu-item-btn');
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
cancelEditBtn2.addEventListener('click', () => {
    modal2a.classList.remove('is-active');
})
confirmEditBtn.addEventListener('click', () => {
    modal2a.classList.remove('is-active');
    modal2b.classList.add('is-active');
})

// Modal 2b for ?? skrive inn endringene til et produkt
const modal2b = document.querySelector('#modal-2b');
const confirmEditBtn2b = document.querySelector('#confirm-edit-btn-2b');
const cancelEditBtn2b = document.querySelector('#cancel-edit-btn-2b');
const cancelEditBtn2b2 = document.querySelector('#cancel-edit-btn-2b-2');

cancelEditBtn2b.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
})
cancelEditBtn2b2.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
})
confirmEditBtn2b.addEventListener('click', () => {
    modal2b.classList.remove('is-active');
    modal2c.classList.add('is-active');
})

//Modal 2c ber om forsikring om at produktet ??nskes redigert
const modal2c = document.querySelector('#modal-2c');
const confirmEditBtn2c = document.querySelector('#confirm-edit-btn-2c');
const cancelEditBtn2c = document.querySelector('#cancel-edit-btn-2c');
const cancelEditBtn2c2 = document.querySelector('#cancel-edit-btn-2c-2');

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

//Modal 2d gir en melding om at produktet har blitt endret
const modal2d = document.querySelector('#modal-2d');
const confirmEditBtn2d = document.querySelector('#confirm-edit-btn-2d');
const cancelEditBtn2d = document.querySelector('#cancel-edit-btn-2d');

cancelEditBtn2d.addEventListener('click', () => {
    modal2d.classList.remove('is-active');
})
confirmEditBtn2d.addEventListener('click', () => {
    modal2d.classList.remove('is-active');
})

//Modal 3 Slette produkt
//Modal 3a ber om hvilket produkt du ??nsker slettet
const removeItemBtn = document.querySelector('#remove-menu-item-btn');
const modal3a = document.querySelector('#modal-3a');
const cancelRemoveBtn3a = document.querySelector('#cancel-remove-btn-3a');
const cancelRemoveBtn3a2 = document.querySelector('#cancel-remove-btn-3a-2');
const confirmremoveBtn = document.querySelector('#confirm-remove-btn');

removeItemBtn.addEventListener('click', () =>{
    modal3a.classList.add('is-active');
})
cancelRemoveBtn3a.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
})
cancelRemoveBtn3a2.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
})
confirmremoveBtn.addEventListener('click', () => {
    modal3a.classList.remove('is-active');
    deleteMenu();
    modal3b.classList.add('is-active');
})

//Modal 3b for ?? forsikre at det er dette produktet som vil slettes
const modal3b = document.querySelector('#modal-3b');
const cancelRemoveBtn3b = document.querySelector('#cancel-remove-btn-3b');
const cancelRemoveBtn3b2 = document.querySelector('#cancel-remove-btn-3b-2');
const confirmremoveBtn3b = document.querySelector('#confirm-remove-btn-3b');

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

//Modal 3c bekrefter at produktet har blitt slettet
const modal3c = document.querySelector('#modal-3c');
const cancelRemoveBtn3c = document.querySelector('#cancel-remove-btn-3c');
const confirmremoveBtn3c = document.querySelector('#confirm-remove-btn-3c');

cancelRemoveBtn3c.addEventListener('click', () => {
    modal3c.classList.remove('is-active');
})
confirmremoveBtn3c.addEventListener('click', () => {
    modal3c.classList.remove('is-active');
    showMenu();
})

