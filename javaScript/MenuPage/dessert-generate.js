import DessertModule from './dessertModule.js'

const dessertSection = document.querySelector("#dessert-section");

let htmlTxt= "";

DessertModule.getAllDessert().forEach( dessertmenu => {
    htmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${dessertmenu.title}, ${dessertmenu.pris}, ID: ${dessertmenu.id}</p>
            </section>
        </div>
    </article>
    `;
});

dessertSection.innerHTML = htmlTxt;