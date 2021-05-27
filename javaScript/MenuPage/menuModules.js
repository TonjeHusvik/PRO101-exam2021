let PizzaModule = (function() {


    const menu = [
        {title: "Kjøttdeigpizza", category: "Pizza", id: "1", pris: "100kr/170kr"},
        {title: "Biffpizza", category: "Pizza", id: "2", pris: "120kr/190kr"},
        {title: "Rekepizza", category: "Pizza", id: "3", pris: "120kr/150kr"},
        {title: "Lasagne", category: "Hovedrett",id: "19", pris: "180kr"},
        {title: "Kebabtallerken", category: "Hovedrett",id: "15", pris: "170kr"},
        {title: "Hamburger", category: "Hovedrett",id: "17", pris: "155kr"},
        {title: "Brus", category: "Drikke", pris: "45kr/85kr", id: "42"},
        {title: "Øl", category: "Drikke", pris: "85kr/110kr", id: "44"},
        {title: "Vin", category: "Drikke", pris: "95kr/350kr", id: "45"},
        {title: "Drink", category: "Drikke", pris: "125kr", id: "47"},
        {title: "Vann", category: "Drikke", pris: "40kr/50kr", id:"49"},
        {title: "Hvitløksbrød", category: "Sides", pris: "65kr", id: "31"},
        {title: "Nachochips", category: "Sides", pris: "95kr", id: "35"},
        {title: "Løkringer", category: "Sides", pris: "79kr", id: "33"},
        {title: "Fries", category: "Sides", pris: "59kr/79kr", id: "38"},
        {title: "Oreokake", category: "Dessert", pris: "70kr", id: "20"},
        {title: "Iskrem", category: "Dessert", pris: "40kr", id: "23"},
        {title: "Banansplitt", category: "Dessert", pris: "50kr", id: "28"}
    ];

    
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

   

    let addNewMenu = (adding) => menu.push(adding);

    const deleteMenu = (id) => menu.filter(menu =>
        menu.id === id && menu.splice(id, 1)
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

export default PizzaModule;

