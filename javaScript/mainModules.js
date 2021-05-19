const MainModule =(function(){

    //Lager et array

    const mains =[
        {title: "Menyer", image:"menu-transparent.png"},
        {title: "Ansatte", image: "employee-transparent.png"},
        {title: "Restauranter", image: "restaurant-transparent.png"},
        {title: "Salg", image:"sale-image.jpg"}
    ];

    const getAllMains = () => mains;

    return{getAllMains}
}() );

//Gjør MainModule tilgjengelig for andre filer. Moduler med liten m;
export default MainModule;