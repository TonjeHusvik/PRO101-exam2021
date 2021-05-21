const PizzaModule = (function() {


    const pizzamenu = [
        {title: "Kjøttdeigpizza", id: "1", pliten: "100kr", pstor: "170kr"},
        {title: "Biffpizza", id: "2", pliten: "120kr", pstor: "190kr"},
        {title: "Rekepizza", id: "3", pliten: "120kr", pstor: "150kr"}
    ];

    const getAllPizzas = () => pizzamenu;

    return{getAllPizzas}
}());

export default PizzaModule;

