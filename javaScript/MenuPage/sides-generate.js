import SidesModule from './sidesModules.js'

const sidesSection = document.querySelector("#sides-section");

let htmlTxt= "";

SidesModule.getAllSides().forEach( sidesmenu => {
    htmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${sidesmenu.title}, ${sidesmenu.pris}</p>
            </section>
        </div>
    </article>
    `;
});

sidesSection.innerHTML = htmlTxt;