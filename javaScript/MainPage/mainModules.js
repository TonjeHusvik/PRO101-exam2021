const MainModule =(function(){

    //Lager et array

    const mains =[
        {title: "Menyer", image:"menu-image.png", page:"menuPage.html"},
        {title: "Ansatte", image: "employee-transparent.png", page: "employeePage.html"},
        {title: "Restauranter", image: "restaurant-transparent.png", page: "restaurantsPage.html"},
        {title: "Salg", image:"sale-image.jpg", page: "salesPage.html"}
    ];


    const getAllMains = () => mains;



    return{getAllMains}

   
}() );

//Gjør MainModule tilgjengelig for andre filer. Moduler med liten m;
export default MainModule;