import MaindishModule from './maindishModules.js'

const maindishSection = document.querySelector("#maindish-section");

let mainhtmlTxt = "";

MaindishModule.getAllMaindishes().forEach( maindishes => {
    mainhtmlTxt += `
    <article>
        <div class="card">
            <section class="card-content">
                <p>${maindishes.title}, Pris: ${maindishes.pris}, ID: ${maindishes.id}</p>
            </section>
        </div>
    </article>
    `;
});

maindishSection.innerHTML = mainhtmlTxt;