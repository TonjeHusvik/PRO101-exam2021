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

//dropdown Butikk
const menu = document.getElementById('dropdown');
menu.addEventListener('click', e=>{
    e.stopPropagation();
    menu.classList.add('is-active');
})

document.addEventListener('click', ()=>{
    menu.classList.remove('is-active');
})
//dropdown År
const menu1 = document.getElementById('dropdown1');
menu1.addEventListener('click', e=>{
    e.stopPropagation();
    menu1.classList.add('is-active');
})

document.addEventListener('click', ()=>{
    menu1.classList.remove('is-active');
})
//dropdown Måned
const menu2 = document.getElementById('dropdown2');
menu2.addEventListener('click', e=>{
    e.stopPropagation();
    menu2.classList.add('is-active');
})

document.addEventListener('click', ()=>{
    menu2.classList.remove('is-active');
})
//dropdown Omsetning
const menu3 = document.getElementById('dropdown3');
menu3.addEventListener('click', e=>{
    e.stopPropagation();
    menu3.classList.add('is-active');
})

document.addEventListener('click', ()=>{
    menu3.classList.remove('is-active');
})

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.toggle('is-hidden');
            }
        });
    })
})