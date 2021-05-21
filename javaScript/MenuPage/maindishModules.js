const MaindishModule = (function() {


    const maindishes = [
        {title: "Lasagne", id: "19", pris: "180kr"},
        {title: "Kebabtallerken", id: "15", pris: "170kr"},
        {title: "Hamburger", id: "17", pris: "155kr"}
    ];

    const getAllMaindishes = () => maindishes; 
    
    return{getAllMaindishes}
}());

export default MaindishModule;