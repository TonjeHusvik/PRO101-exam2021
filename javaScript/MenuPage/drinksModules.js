const DrinksModule = (function() {

    const drinksmenu = [
        {title: "Brus", pliten: "45kr", pstor: "85kr"},
        {title: "Øl", pliten: "85kr", pstor: "110kr"},
        {title: "Vin", pliten: "95kr", pstor: "350kr"},
        {title: "Drink", pstor: "125kr"},
        {title: "Vann", pliten: "40kr", pstor: "50kr"}
    ];

    const getAllDrinks = () => drinksmenu;

    return{getAllDrinks}
}());

export default DrinksModule;