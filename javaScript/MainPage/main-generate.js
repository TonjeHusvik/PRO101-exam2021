import MainModule from './mainModules.js'

const mainSection = document.querySelector("#main-section");

let htmlTxt = "";

MainModule.getAllMains().forEach( main => {
    htmlTxt +=`

    <a href="../html/${main.page}"
        <article class="column is-3 mt-6">

            <div class="column-left has-text-centered card is-size-1">
                <section class="card-content">
                    <h3">${main.title}</h3>
                </section>
                <section class=" image is-3by2 card-image">
                    <img src="../images/${main.image}" alt="${main.title}" >
                </section>
            </div> 
        </article>
    </a>    
    `;

} );

mainSection.innerHTML = htmlTxt;