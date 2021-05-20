import saleModule from './saleModule.js'

const saleSection = document.querySelector("#sale-section");

let htmlTxt = "";
saleModule.getAllSales().forEach(sales => {
    htmlTxt += `
        <article class="column">
            <div class="card">
                </section>
                <section class="card-content">
                    <h3>${sales.table}</h3>
                    <p>${sales.info}</p>
                </section>
            </div>
        </article>
    `;
});

saleSection.innerHTML = htmlTxt;

// KNAPPER
var button1 = document.getElementById("button1").innerHTML;
var button2 = document.getElementById("button2");

button1.onclick = function(){
    prompt("omsetning");
}

button2.onclick = function(){
    prompt("omsetning - retter her");
}