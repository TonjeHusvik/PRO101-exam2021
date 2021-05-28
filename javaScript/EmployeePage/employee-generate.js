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
const deleteModalInformation = document.querySelector("#delete-modal-information");

//Text input
const firstNameAddTxt = document.querySelector("#firstName-add-txt");
const lastNameAddTxt = document.querySelector("#lastName-add-txt");
const phoneAddTxt = document.querySelector("#phone-add-txt");
const emailAddTxt = document.querySelector("#email-add-txt");
const workAddTxt = document.querySelector("#work-add-txt");
const workPlaceAddTxt = document.querySelector("#workPlace-add-txt");
const workprosentAddTxt = document.querySelector("#workprosent-add-txt");
const startDateAddTxt = document.querySelector("#startDate-add-txt");
const employeeIDAddTxt = document.querySelector("#employeeID-add-txt");
const inputAddEmployee = document.querySelector("#input-add-employee");
const employeeIDInputTxt = document.querySelector("#employee-id-input-txt");
const inputDelteEmployee = document.querySelector("#input-delete-employee");


const sortByAllBtn = document.querySelector("#sort-by-all-btn");
//Input verdier



const showAll= () => {

    let htmlTxt= "";



    EmployeeModule.getAllEmployees().forEach( employees => {
        htmlTxt += `
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employees.firstName} ${employees.lastName}</h3>
                <p>${employees.phone}, ${employees.email}</p>
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
                <p>${employee.phone}, ${employee.email}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `;
    })

    employeeSection.innerHTML = htmlTxt;
}


const addEmployee = () =>{

    const tester2 ={
        firstName: firstNameAddTxt.value,
        lastName: lastNameAddTxt.value,
        phone: phoneAddTxt.value,
        email: emailAddTxt.value,
        work: workAddTxt.value,
        workPlace: workPlaceAddTxt.value,
        workProsent: workprosentAddTxt.value,
        startDate: startDateAddTxt.value,
        employeeID: employeeIDAddTxt.value
    }
    
    EmployeeModule.addNewEmployee(tester2);
    
 
    //array.push(tester2);




    const htmlTxt= `
        <p>Fornavn: ${tester2.firstName}</p>
        <p>Etternavn: ${tester2.lastName}</p>
        <p>Tlfnr.: ${tester2.phone}</p>
        <p>E-post: ${tester2.email}</p>
        <p>Stilling: ${tester2.work}</p>
        <p>Arbeidssplass: ${tester2.workPlace}</p>
        <p>Prosent: ${tester2.workProsent}</p>
        <p>Start dato: ${tester2.startDate}</p>
        <p>Ansatt ID: ${tester2.employeeID}</p>
    
    `;

    inputAddEmployee.innerHTML = htmlTxt;

    //employeeSection.innerHTML = testerOutput;

    
}
    
const deleteEmployee = () =>{
    let htmlTxt = "";

    EmployeeModule.deleteEmployee(employeeIDInputTxt.value).forEach(employee =>{
        htmlTxt +=`
            <p>${employee.firstName}</p>
            <p>${employee.lastName}</p>
        `;

        console.log(employeeIDInputTxt);
    })

    inputDelteEmployee.innerHTML = htmlTxt;
}

const searchByEmployeeID = () =>{
    let htmlTxt = "";

    EmployeeModule.getByEmployeeID(searchTxtId.value).forEach(employee =>{
        htmlTxt +=`
        <article class="column is-4">
        <div class="card">
            <section class="card-content">
                <h3 class="is-size-4">${employee.firstName} ${employee.lastName}</h3>
                <p>${employee.phone}, ${employee.email}</p>
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
                <p>${employee.phone}, ${employee.email}</p>
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
                <p>${employee.phone}, ${employee.email}</p>
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
                <p>${employee.phone}, ${employee.email}</p>
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
                <p>${employee.phone}, ${employee.email}</p>
                <p>${employee.workPlace}, ${employee.work}, ${employee.workProsent}, AnsattID: ${employee.employeeID}</p> 
                <p>Start dato: ${employee.startDate}</p>
            </section>
        </div>
    </article>
        `
    })
    employeeSection.innerHTML = htmlTxt;
}

//Sorterings knapper og søkeknapper

showAll();
searchLastnameBtn.addEventListener("click", searchByLastname);
searchEmployeeIdBtn.addEventListener("click", searchByEmployeeID);

deleteEmployeeBtnModal.addEventListener("click", deleteModalInformation);
sortByMajorstuenBtn.addEventListener("click", sortByMajorstuen);
sortByTorshovBtn.addEventListener("click", sortByTorshov);
sortByKarlJohanBtn.addEventListener("click", sortByKarlJohan);
sortByOsloBtn.addEventListener("click", sortByOslo);

sortByAllBtn.addEventListener("click", showAll);

//modal

/**Fjern ansatt knapp */
const deleteBtn = document.querySelector("#delete-employee-btn");
const deleteModal = document.querySelector("#deleteModal");
const stopDelteEmployeeBtn = document.querySelector("#stop-delete-employee-btn-modal");
const deleteEmployeeBtnModalApprov = document.querySelector("#delete-employee-btn-modal-approv");
const stopDeleteEmployeeBtnModalStop = document.querySelector("#stop-delete-employee-btn-modal-stop");
const deleteModalInformationConfirmation = document.querySelector("#delete-modal-information-confirmation");
const deleteModalFinish = document.querySelector("#delete-modal-finish");
const deleteEmployeeX1 = document.querySelector("#delete-employee-x-1");
const deleteEmployeeX2 = document.querySelector("#delete-employee-x-2");
const deleteEmployeeX3 = document.querySelector("#delete-employee-x-3");

//Gå videre knapper
deleteBtn.addEventListener('click', () =>{
    deleteModal.classList.add('is-active');
    })

deleteEmployeeBtnModal.addEventListener('click', () =>{
        deleteModal.classList.remove('is-active');
        deleteEmployee();
        deleteModalInformation.classList.add('is-active');
    })

deleteEmployeeBtnModalApprov.addEventListener('click', () =>{
        deleteModalInformation.classList.remove('is-active');
        deleteModalInformationConfirmation.classList.add('is-active');
    })
//Alle X knapper
deleteEmployeeX1.addEventListener('click', () =>{
    deleteModal.classList.remove('is-active');
})

deleteEmployeeX2.addEventListener('click', () =>{
    deleteModalInformation.classList.remove('is-active');
})

deleteEmployeeX3.addEventListener('click', () =>{
    deleteModalInformationConfirmation.classList.remove('is-active');
})
//Avbryt knapper og OK
stopDelteEmployeeBtn.addEventListener('click', () =>{
    deleteModal.classList.remove('is-active');
})

deleteModalFinish.addEventListener('click', () =>{
    deleteModalInformationConfirmation.classList.remove('is-active');
    showAll();
})

stopDeleteEmployeeBtnModalStop.addEventListener('click', () =>{
    deleteModalInformation.classList.remove('is-active');
})


/**Rediger ansatt knapp */
const editEmployeeBtn = document.querySelector("#edit-employee-btn");
const editModal = document.querySelector("#editModal");
const stopEditEmployeeBtnModal = document.querySelector("#stop-edit-employee-btn-modal");
const editEmployeeBtnModal = document.querySelector("#edit-employee-btn-modal");
const editModalEdit = document.querySelector("#edit-modal-edit");
const editEmployeeBtnModalEdit = document.querySelector("#edit-employee-btn-modal-edit");
const stopEditEmployeeBtnModalEdit = document.querySelector("#stop-edit-employee-btn-modal-edit");
const editModalApprov = document.querySelector("#edit-modal-approv");
const editEmployeeBtnModalApprov = document.querySelector("#edit-employee-btn-modal-approv");
const editModalInformationConfirmation = document.querySelector("#edit-modal-information-confirmation");
const stopEditEmployeeBtnModalStop = document.querySelector("#stop-edit-employee-btn-modal-stop");
const editModalFinish = document.querySelector("#edit-modal-finish");
const deleteEmployeeX4 = document.querySelector("#delete-employee-x-4");
const deleteEmployeeX5 = document.querySelector("#delete-employee-x-5");
const deleteEmployeeX6 = document.querySelector("#delete-employee-x-6");
const deleteEmployeeX7 = document.querySelector("#delete-employee-x-7");

// Gå videre knapper
editEmployeeBtn.addEventListener('click', () =>{
    editModal.classList.add('is-active')
})

editEmployeeBtnModal.addEventListener('click', () =>{
    editModal.classList.remove('is-active');
    editModalEdit.classList.add('is-active');
})

editEmployeeBtnModalEdit.addEventListener('click', () =>{
    editModalEdit.classList.remove('is-active');
    editModalApprov.classList.add('is-active');
})

editEmployeeBtnModalApprov.addEventListener('click', () =>{
    editModalApprov.classList.remove('is-active');
    editModalInformationConfirmation.classList.add('is-active');
})

// Alle X knappene 
deleteEmployeeX4.addEventListener('click', () =>{
    editModal.classList.remove('is-active');
})

deleteEmployeeX5.addEventListener('click', () =>{
    editModalEdit.classList.remove('is-active');
})

deleteEmployeeX6.addEventListener('click', () =>{
    editModalApprov.classList.remove('is-active');
})

deleteEmployeeX7.addEventListener('click', () =>{
    editModalInformationConfirmation.classList.remove('is-active');
})

//Avbryt knapper og OK
stopEditEmployeeBtnModal.addEventListener('click', () =>{
    editModal.classList.remove('is-active');
})

stopEditEmployeeBtnModalEdit.addEventListener('click', () =>{
    editModalEdit.classList.remove('is-active');
})

stopEditEmployeeBtnModalStop.addEventListener('click', () =>{
    editModalApprov.classList.remove('is-active');
})

editModalFinish.addEventListener('click', () =>{
    editModalInformationConfirmation.classList.remove('is-active');
})


/** Legge til ansatt knapp */

const addEmployeeBtn = document.querySelector("#add-employee-btn");
const addModal = document.querySelector("#addModal")
const addEmployeeBtnModal = document.querySelector("#add-employee-btn-modal");
const stopAddEmployeeBtnModal = document.querySelector("#stop-add-employee-btn-modal");
const addModalApprov = document.querySelector("#add-modal-approv");
const addEmployeeBtnModalApprov = document.querySelector("#add-employee-btn-modal-approv");
const addModalInformationConfirmation = document.querySelector("#add-modal-information-confirmation");
const stopAddEmployeeBtnModalStop = document.querySelector("#stop-add-employee-btn-modal-stop");
const addModalFinish = document.querySelector("#add-modal-finish");
const deleteEmployeeX8 = document.querySelector ("#delete-employee-x-8");
const deleteEmployeeX9 = document.querySelector("#delete-employee-x-9");
const deleteEmployeeX10 = document.querySelector("#delete-employee-x-10");


//Gå videre knapper
addEmployeeBtn.addEventListener('click', () =>{
    addModal.classList.add('is-active');
})

addEmployeeBtnModal.addEventListener('click', () =>{
    addModal.classList.remove('is-active');
    addEmployee();
    addModalApprov.classList.add('is-active');
})

addEmployeeBtnModalApprov.addEventListener('click', () =>{
    addModalApprov.classList.remove('is-active');
    addModalInformationConfirmation.classList.add('is-active');
})

//Alle X knapper
deleteEmployeeX8.addEventListener('click', () =>{
    addModal.classList.remove('is-active');
})

deleteEmployeeX9.addEventListener('click', () =>{
    addModalApprov.classList.remove('is-active');
})

deleteEmployeeX10.addEventListener('click', () =>{
    addModalInformationConfirmation.classList.remove('is-active'); 
})
//Avbryt knapper og OK

stopAddEmployeeBtnModal.addEventListener('click', () =>{
    addModal.classList.remove('is-active');
})


stopAddEmployeeBtnModalStop.addEventListener('click', () =>{
    addModalApprov.classList.remove('is-active');
})

addModalFinish.addEventListener('click', () =>{
    addModalInformationConfirmation.classList.remove('is-active');
    showAll();
})



