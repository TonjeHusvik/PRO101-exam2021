import MainModule from './mainModules.js'

const mainSection = document.querySelector("#main-section");

let htmlTxt = "";

MainModule.getAllMains().forEach( main => {
    htmlTxt +=`
        <article class="column is-6">
            <div class="has-text-centered card">
                <section class="card-content">
                    <h3 >${main.title}</h3>
                </section>
                <section class="card-image">
                    <img src="../images/${main.image}" width="200px">
                </section>
            </div>
        </article>
    `;

} );

mainSection.innerHTML = htmlTxt;