import PizzaModule from './menuModules.js'

const pizzaSection = document.querySelector("#pizza-section");

let htmlTxt= "";

PizzaModule.getAllPizzas().forEach( pizzamenu => {
    htmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                
                <p>${pizzamenu.title}, Liten:  ${pizzamenu.pliten}, Stor: ${pizzamenu.pstor}</p>
            </section>
        </div>
    </article>
    `;
});

pizzaSection.innerHTML = htmlTxt;



