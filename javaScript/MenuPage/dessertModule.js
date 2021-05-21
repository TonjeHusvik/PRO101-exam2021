const DessertModule = (function() {

    const dessertmenu = [
        {title: "Brus", pris: "45kr", id: "20"},
        {title: "Øl", pris: "85kr", id: "23"},
        {title: "Vin", pris: "95kr", id: "28"}
    ];

    const getAllDessert = () => dessertmenu;

    return{getAllDessert}
}());

export default DessertModule;