import EmployeeModule from './employeeModules.js'

const employeeSection = document.querySelector("#employee-section");

const ageDropdown = document.querySelector("#age-dropdown");

const test = "Hei";


const showAll= () => {

    let htmlTxt= "";



    EmployeeModule.getAllEmployees().forEach( employees => {
        htmlTxt += `
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employees.firstName} ${employees.lastName}</h3>
                <p>${employees.phone}, ${employees.email}, ${employees.age}</p>
                <p>${employees.workPlace}, ${employees.work}, ${employees.workProsent}, AnsattID: ${employees.employeeID}</p> 
                <p>Start dato: ${employees.startDate}</p>
            </section>
        </div>
    </article>
        `;
    
        employeeSection.innerHTML = htmlTxt;
    });

}
showAll();

//modal

const deleteBtn = document.querySelector("#delete-employee-btn");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const stopDelteEmployeeBtn = document.querySelector("#stop-delete-employee-btn-modal");

deleteBtn.addEventListener('click', () =>{
    modal.classList.add('is-active')
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

stopDelteEmployeeBtn.addEventListener('click', () =>{
    modal.classList.remove('is-active');
})

//sortByOsloS();


