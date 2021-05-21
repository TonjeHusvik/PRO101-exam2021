const SidesModule = (function() {

    const sidesmenu = [
        {title: "Hvitløksbrød", pris: "65kr"},
        {title: "Nachochips", pris: "95kr"},
        {title: "Løkringer", pris: "79kr"},
        {title: "Fries", pris: "59kr/79kr"}
    ];

    const getAllSides = () => sidesmenu;

    return{getAllSides}
}());

export default SidesModule;