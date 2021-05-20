import saleModule from './saleModule.js'

const saleSection = document.querySelector("#sale-section");
var button1 = document.createElement("button1");
var button2 = document.createElement("button2");

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


button1.innerHTML = "omsetning her";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button1);

button1.addEventListener("click", function() {
    alert("did something");
});

button2.onclick = function(){
    prompt="omsetning - retter her";
}