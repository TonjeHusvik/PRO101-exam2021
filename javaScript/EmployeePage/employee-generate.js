import EmployeeModule from './employeeModules.js'

const employeeSection = document.querySelector("#employee-section");

let htmlTxt= "";

EmployeeModule.getAllEmployees().forEach( employees => {
    htmlTxt += `
    <article class="column is-4">
    <div class="card">
        <section class="card-content">
            <h3 class="is-size-4">${employees.firstName} ${employees.lastName}</h3>
            <p>${employees.phone}, ${employees.email}, ${employees.age}</p> 
        </section>
    </div>
</article>
    `;

});

employeeSection.innerHTML = htmlTxt;