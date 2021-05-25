import EmployeeModule from './employeeModules.js'

const employeeSection = document.querySelector("#employee-section");
const searchTxt = document.querySelector("#search-txt");
const searchLastnameBtn = document.querySelector("#search-lastname-btn");
const sortByOsloBtn = document.querySelector("#sort-by-oslo-btn");
const sortByKarlJohanBtn = document.querySelector("#sort-by-karl-johan-btn");
const sortByTorshovBtn = document.querySelector("#sort-by-torshov-btn");
const sortByMajorstuenBtn = document.querySelector("#sort-by-majorstuen-btn");
const searchTxtId = document.querySelector("#search-txt-id");
const searchEmployeeIdBtn = document.querySelector("#search-employee-id-btn");
const deleteEmployeeBtnModal = document.querySelector("#delete-employee-btn-modal");

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

/** Søk etter en ansatt med etternavn */
const searchByLastname = () => {

    let htmlTxt = "";

    EmployeeModule.getByLastname(searchTxt.value ).forEach(employee => {
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}, ${employee.age}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `;
    })

    employeeSection.innerHTML = htmlTxt;
}

const searchByEmployeeID = () =>{
    let htmlTxt = "";

    EmployeeModule.getByEmployeeID(searchTxtId.value).forEach(employee =>{
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}, ${employee.age}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `;
    })

    employeeSection.innerHTML = htmlTxt;
}

/**Sorterer etter Oslo s  */
const sortByOslo = () => {

    let htmlTxt = "";

    EmployeeModule.getSortingOslo().forEach( employee =>{
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}, ${employee.age}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        
        ` 
    })

    employeeSection.innerHTML = htmlTxt;
}

/**Sorterer etter Karl Johan */
const sortByKarlJohan = () => {

    let htmlTxt ="";

    EmployeeModule.getSortingKarlJohan().forEach( employee =>{
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}, ${employee.age}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `
    })

    employeeSection.innerHTML = htmlTxt;
}

/**Sorterer etter Torshov */
const sortByTorshov = () => {

    let htmlTxt = "";

    EmployeeModule.getSortingTorshov().forEach( employee =>{
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}, ${employee.age}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `
    })

    employeeSection.innerHTML = htmlTxt;

}

/**Sorterer etter Majorstuen */
const sortByMajorstuen = () => {

    let htmlTxt = "";

    EmployeeModule.getSortingMajorstuen().forEach(employee =>{
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}, ${employee.age}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `
    })
    employeeSection.innerHTML = htmlTxt;
}

showAll();
searchLastnameBtn.addEventListener("click", searchByLastname);
searchEmployeeIdBtn.addEventListener("click", searchByEmployeeID);

sortByMajorstuenBtn.addEventListener("click", sortByMajorstuen);
sortByTorshovBtn.addEventListener("click", sortByTorshov);
sortByKarlJohanBtn.addEventListener("click", sortByKarlJohan);
sortByOsloBtn.addEventListener("click", sortByOslo);

//modal

/**Fjern ansatt knapp */
const deleteBtn = document.querySelector("#delete-employee-btn");
const modalBg = document.querySelector(".modal-background");
const deleteModal = document.querySelector("#deleteModal");
const stopDelteEmployeeBtn = document.querySelector("#stop-delete-employee-btn-modal");

deleteBtn.addEventListener('click', () =>{
    deleteModal.classList.add('is-active')
})


stopDelteEmployeeBtn.addEventListener('click', () =>{
    deleteModal.classList.remove('is-active');
})

/**Rediger ansatt knapp */
const editEmployeeBtn = document.querySelector("#edit-employee-btn");
const editModal = document.querySelector("#editModal");
const stopEditEmployeeBtnModal = document.querySelector("#stop-edit-employee-btn-modal");

editEmployeeBtn.addEventListener('click', () =>{
    editModal.classList.add('is-active')
})

stopEditEmployeeBtnModal.addEventListener('click', () =>{
    editModal.classList.remove('is-active');
})


/** Legge til ansatt knapp */

const addEmployeeBtn = document.querySelector("#add-employee-btn");
const addModal = document.querySelector("#addModal")
const stopAddEmployeeBtnModal = document.querySelector("#stop-add-employee-btn-modal");

addEmployeeBtn.addEventListener('click', () =>{
    addModal.classList.add('is-active');
})

stopAddEmployeeBtnModal.addEventListener('click', () =>{
    addModal.classList.remove('is-active');
})
//sortByOsloS();


