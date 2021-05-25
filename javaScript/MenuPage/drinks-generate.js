import DrinksModule from './drinksModules.js'

const drinksSection = document.querySelector("#drinks-section");

let htmlTxt= "";

DrinksModule.getAllDrinks().forEach( drinksmenu => {
    htmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${drinksmenu.title}, ${drinksmenu.pliten}, ${drinksmenu.pstor}</p>
                <button>Delete</button>
            </section>
        </div>
    </article>
    `;
});

drinksSection.innerHTML = htmlTxt;