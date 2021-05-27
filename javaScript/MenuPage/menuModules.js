const PizzaModule = (function() {


    let pizzamenu = [
        {title: "Kjøttdeigpizza", id: "1", pris: "100kr/170kr"},
        {title: "Biffpizza", id: "2", pris: "120kr/190kr"},
        {title: "Rekepizza", id: "3", pris: "120kr/150kr"}
    ];

    let getAllPizzas = () => pizzamenu;

    const maindishes = [
        {title: "Lasagne", id: "19", pris: "180kr"},
        {title: "Kebabtallerken", id: "15", pris: "170kr"},
        {title: "Hamburger", id: "17", pris: "155kr"}
    ];

    const getAllMaindishes = () => maindishes; 

    const drinksmenu = [
        {title: "Brus", pris: "45kr/85kr", id: "42"},
        {title: "Øl", pris: "85kr/110kr", id: "44"},
        {title: "Vin", pris: "95kr/350kr", id: "45"},
        {title: "Drink", pris: "125kr", id: "47"},
        {title: "Vann", pris: "40kr/50kr", id:"49"}
    ];

    const getAllDrinks = () => drinksmenu;

    const sidesmenu = [
        {title: "Hvitløksbrød", pris: "65kr", id: "31"},
        {title: "Nachochips", pris: "95kr", id: "35"},
        {title: "Løkringer", pris: "79kr", id: "33"},
        {title: "Fries", pris: "59kr/79kr", id: "38"}
    ];

    const getAllSides = () => sidesmenu;

    const dessertmenu = [
        {title: "Oreokake", pris: "70kr", id: "20"},
        {title: "Iskrem", pris: "40kr", id: "23"},
        {title: "Banansplitt", pris: "50kr", id: "28"}
    ];

    const getAllDessert = () => dessertmenu;


    let addNewMenu = (adding) => pizzamenu.push(adding);

    const deleteMenu = (id) => pizzamenu.filter(pizzamenu =>
        pizzamenu.id === id && pizzamenu.splice(id, 1)
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

