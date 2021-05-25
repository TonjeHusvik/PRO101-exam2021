const EmployeeModule =(function(){

    //Lager et array

    const employees =[
        {firstName: "Silje", lastName: "Antonsen", phone: "39056345", age:"34 år", email: "siljeA@tulle.no", work: "Dagligleder", workProsent: "100%", workPlace: "Oslo s", startDate: "09.08.2019", employeeID: "1"},
        {firstName: "Karin", lastName: "Klementin", phone: "30960506", age:"21 år", email: "KKlem@fin.com", work: "Fulltidsansatt", workProsent: "100%", workPlace: "Oslo s", startDate: "10.11.2019", employeeID: "45"},
        {firstName: "Fenrik", lastName: "Simonsen", phone: "34554454", age: "40 år", email: "FSim@live.no", work: "Deltidsansatt", workProsent: "20%", workPlace: "Karl Johan", startDate: "20.01.2020", employeeID: "60"},
        {firstName: "Sonja", lastName: "Finne", phone: "45034054", age:"43 år", email: "SonjaF@live.com", work: "Dagligleder", workProsent: "100%", workPlace: "Karl Johan", startDate: "30.03.2020", employeeID: "68"},
        {firstName: "Britt", lastName: "Borresen", phone: "48756093", age: "20 år", email: "BrittB@gmail.jr", work: "Deltidsansatt", workProsent: "10%", workPlace: "Torshov", startDate: "03.10.2019", employeeID: "33"},
        {firstName: "Jacob", lastName: "Salg", phone: "76309876", age:"28 år", email: "JSa@hotmailen.so", work: "Dagligleder", workProsent: "100%", workPlace: "Torshov", startDate: "04.10.2019", employeeID: "34"},
        {firstName: "Hanne", lastName: "Davidsen", phone: "375624378", age:"30 år", email: "handav@tulle.no",work: "Dagligleder", workProsent: "100%", workPlace: "Majorstuen", startDate: "02.10.2019", employeeID: "32"},
        {firstName: "Emi", lastName: "Sogn", phone: "09865784", age:"53 år", email: "EmS@tulle.no", work: "Fulltidsansatt", workProsent: "100%", workPlace: "Majorstuen", startDate: "03.12.2019", employeeID: "54"}
    ];

    

    const getAllEmployees = () => employees;

    const getByLastname = ( lastName ) => employees.filter(employee =>
        employee.lastName.toLowerCase() === lastName.toLowerCase() );

    const getByEmployeeID = (employeeID) => employees.filter(employee =>
        employee.employeeID.toLowerCase() === employeeID.toLowerCase()
        );

    const test = (i) => employees.filter( employee =>
        employee.employeeID.toLowerCase() === employeeId.toLowerCase()
    );

    const getSortingOslo = () => employees.filter(employee =>
       employee.workPlace == "Oslo s"
        );

    const getSortingKarlJohan = () => employees.filter(employee =>
        employee.workPlace == "Karl Johan"
        );

    const getSortingTorshov = () => employees.filter(employee =>
        employee.workPlace == "Torshov"
        );

    const getSortingMajorstuen = () => employees.filter(employee =>
        employee.workPlace == "Majorstuen"
        );

    
    return{
        getAllEmployees,
        getByEmployeeID,
        getByLastname,
        getSortingOslo,
        getSortingKarlJohan,
        getSortingTorshov,
        getSortingMajorstuen
    }

   
}() );

//Gjør MainModule tilgjengelig for andre filer. Moduler med liten m;
export default EmployeeModule;