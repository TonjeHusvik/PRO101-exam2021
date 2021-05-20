import saleModule from './saleModule.js'

const saleSection = document.querySelector("#sale-section");
var 

let htmlTxt = "";
saleModule.getAllSales().forEach(sales => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                </section>
                <section class="card-content">
                    <h3>${sales.table}</h3>
                </section>
            </div>
        </article>
    `;
});

saleSection.innerHTML = htmlTxt;

