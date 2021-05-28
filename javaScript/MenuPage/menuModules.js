let PizzaModule = (function() {

    // Array for menyene
    const menu = [
        {title: "Kjøttdeigpizza", category: "Pizza", pris: "100kr/170kr", id: "0"},
        {title: "Biffpizza", category: "Pizza", pris: "120kr/190kr", id: "1"},
        {title: "Rekepizza", category: "Pizza", pris: "120kr/150kr", id: "2"},
        {title: "Lasagne", category: "Hovedrett", pris: "180kr",id: "3"},
        {title: "Kebabtallerken", category: "Hovedrett", pris: "170kr", id: "4"},
        {title: "Hamburger", category: "Hovedrett", pris: "155kr", id: "5"},
        {title: "Brus", category: "Drikke", pris: "45kr/85kr", id: "6"},
        {title: "Øl", category: "Drikke", pris: "85kr/110kr", id: "7"},
        {title: "Vin", category: "Drikke", pris: "95kr/350kr", id: "8"},
        {title: "Drink", category: "Drikke", pris: "125kr", id: "9"},
        {title: "Vann", category: "Drikke", pris: "40kr/50kr", id:"10"},
        {title: "Hvitløksbrød", category: "Sides", pris: "65kr", id: "11"},
        {title: "Nachochips", category: "Sides", pris: "95kr", id: "12"},
        {title: "Løkringer", category: "Sides", pris: "79kr", id: "13"},
        {title: "Fries", category: "Sides", pris: "59kr/79kr", id: "14"},
        {title: "Oreokake", category: "Dessert", pris: "70kr", id: "15"},
        {title: "Iskrem", category: "Dessert", pris: "40kr", id: "16"},
        {title: "Banansplitt", category: "Dessert", pris: "50kr", id: "17"}
    ];

    //For å dele opp menyen i 5 underkategorier
    const getAllPizzas = () => menu.filter(pizzas =>
        pizzas.category == "Pizza"
        );  

    const getAllMaindishes = () => menu.filter(dishes =>
        dishes.category == "Hovedrett"
        ); 

    const getAllDrinks = () => menu.filter(drinks => 
        drinks.category == "Drikke"
    );

    const getAllSides = () => menu.filter(sides =>
        sides.category == "Sides"
    );

    const getAllDessert = () => menu.filter(dessert =>
        dessert.category == "Dessert"    
    );

   
    //Legge til menyprodukt
    let addNewMenu = (adding) => menu.push(adding);

    //Slette menyprodukt
    const deleteMenu = (id1) => menu.filter(menu1 =>
        menu1.id === id1 && menu.splice(id1, 1)
     );


    return{
        getAllPizzas,
        getAllMaindishes,
        getAllDrinks,
        getAllSides,
        getAllDessert,
        addNewMenu,
        deleteMenu}
}());

//Gjør modulen tilgjengelig for andre filer
export default PizzaModule;

