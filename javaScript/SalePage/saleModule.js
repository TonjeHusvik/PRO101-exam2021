const saleModule = (function(){ // IIFE

    const sales = [
        //OSLO S 2020
        {store: "Oslo S", year:"2020", month: "Januar", brutto:"450.000", netto:"385.000"},
        {store: "Oslo S", year:"2020", month: "Februar", brutto:"485.000", netto:"398.000"},
        {store: "Oslo S", year:"2020", month: "Mars", brutto:"430.000", netto:"342.000"},
        {store: "Oslo S", year:"2020", month: "April", brutto:"520.000", netto:"397.000"},
        {store: "Oslo S", year:"2020", month: "Mai", brutto:"527.000", netto:"410.000"},
        {store: "Oslo S", year:"2020", month: "Juni", brutto:"674.000", netto:"576.000"},
        {store: "Oslo S", year:"2020", month: "Juli", brutto:"594.000", netto:"399.000"},
        {store: "Oslo S", year:"2020", month: "August", brutto:"493.000", netto:"364.000"},
        {store: "Oslo S", year:"2020", month: "September", brutto:"424.000", netto:"320.000"},
        {store: "Oslo S", year:"2020", month: "Oktober", brutto:"374.000", netto:"298.000"},
        {store: "Oslo S", year:"2020", month: "November", brutto:"632.000", netto:"539.000"},
        {store: "Oslo S", year:"2020", month: "Desember", brutto:"784.000", netto:"621.000"},
        //OSLO S 2019
        {store: "Oslo S", year:"2019", month: "Januar", brutto:"410.000", netto:"345.000"},
        {store: "Oslo S", year:"2019", month: "Februar", brutto:"455.000", netto:"368.000"},
        {store: "Oslo S", year:"2019", month: "Mars", brutto:"400.000", netto:"322.000"},
        {store: "Oslo S", year:"2019", month: "April", brutto:"500.000", netto:"377.000"},
        {store: "Oslo S", year:"2019", month: "Mai", brutto:"517.000", netto:"380.000"},
        {store: "Oslo S", year:"2019", month: "Juni", brutto:"634.000", netto:"536.000"},
        {store: "Oslo S", year:"2019", month: "Juli", brutto:"554.000", netto:"349.000"},
        {store: "Oslo S", year:"2019", month: "August", brutto:"443.000", netto:"334.000"},
        {store: "Oslo S", year:"2019", month: "September", brutto:"474.000", netto:"300.000"},
        {store: "Oslo S", year:"2019", month: "Oktober", brutto:"394.000", netto:"268.000"},
        {store: "Oslo S", year:"2019", month: "November", brutto:"682.000", netto:"509.000"},
        {store: "Oslo S", year:"2019", month: "Desember", brutto:"723.000", netto:"591.000"},
        //KARL JOHAN 2020
        {store: "Karl Johan", year:"2020", month: "Januar", brutto:"150.000", netto:"385.000"},
        {store: "Karl Johan", year:"2020", month: "Februar", brutto:"385.000", netto:"398.000"},
        {store: "Karl Johan", year:"2020", month: "Mars", brutto:"330.000", netto:"342.000"},
        {store: "Karl Johan", year:"2020", month: "April", brutto:"420.000", netto:"297.000"},
        {store: "Karl Johan", year:"2020", month: "Mai", brutto:"427.000", netto:"310.000"},
        {store: "Karl Johan", year:"2020", month: "Juni", brutto:"574.000", netto:"476.000"},
        {store: "Karl Johan", year:"2020", month: "Juli", brutto:"494.000", netto:"299.000"},
        {store: "Karl Johan", year:"2020", month: "August", brutto:"393.000", netto:"264.000"},
        {store: "Karl Johan", year:"2020", month: "September", brutto:"324.000", netto:"220.000"},
        {store: "Karl Johan", year:"2020", month: "Oktober", brutto:"274.000", netto:"198.000"},
        {store: "Karl Johan", year:"2020", month: "November", brutto:"532.000", netto:"439.000"},
        {store: "Karl Johan", year:"2020", month: "Desember", brutto:"684.000", netto:"521.000"},
        //KARL JOHAN 2019
        {store: "Karl Johan", year:"2019", month: "Januar", brutto:"510.000", netto:"445.000"},
        {store: "Karl Johan", year:"2019", month: "Februar", brutto:"355.000", netto:"268.000"},
        {store: "Karl Johan", year:"2019", month: "Mars", brutto:"500.000", netto:"422.000"},
        {store: "Karl Johan", year:"2019", month: "April", brutto:"400.000", netto:"277.000"},
        {store: "Karl Johan", year:"2019", month: "Mai", brutto:"617.000", netto:"480.000"},
        {store: "Karl Johan", year:"2019", month: "Juni", brutto:"534.000", netto:"436.000"},
        {store: "Karl Johan", year:"2019", month: "Juli", brutto:"654.000", netto:"449.000"},
        {store: "Karl Johan", year:"2019", month: "August", brutto:"343.000", netto:"234.000"},
        {store: "Karl Johan", year:"2019", month: "September", brutto:"574.000", netto:"400.000"},
        {store: "Karl Johan", year:"2019", month: "Oktober", brutto:"294.000", netto:"168.000"},
        {store: "Karl Johan", year:"2019", month: "November", brutto:"782.000", netto:"609.000"},
        {store: "Karl Johan", year:"2019", month: "Desember", brutto:"623.000", netto:"491.000"},
        //MAJORSTUEN 2020
        {store: "Majorstuen", year:"2020", month: "Januar", brutto:"490.000", netto:"405.000"},
        {store: "Majorstuen", year:"2020", month: "Februar", brutto:"355.000", netto:"278.000"},
        {store: "Majorstuen", year:"2020", month: "Mars", brutto:"380.000", netto:"290.000"},
        {store: "Majorstuen", year:"2020", month: "April", brutto:"480.000", netto:"407.000"},
        {store: "Majorstuen", year:"2020", month: "Mai", brutto:"498.000", netto:"414.000"},
        {store: "Majorstuen", year:"2020", month: "Juni", brutto:"604.000", netto:"536.000"},
        {store: "Majorstuen", year:"2020", month: "Juli", brutto:"544.000", netto:"479.000"},
        {store: "Majorstuen", year:"2020", month: "August", brutto:"472.000", netto:"393.000"},
        {store: "Majorstuen", year:"2020", month: "September", brutto:"370.000", netto:"301.000"},
        {store: "Majorstuen", year:"2020", month: "Oktober", brutto:"352.000", netto:"277.000"},
        {store: "Majorstuen", year:"2020", month: "November", brutto:"459.000", netto:"365.000"},
        {store: "Majorstuen", year:"2020", month: "Desember", brutto:"677.000", netto:"594.000"},
        //MAJORSTUEN 2019
        {store: "Majorstuen", year:"2019", month: "Januar", brutto:"420.000", netto:"335.000"},
        {store: "Majorstuen", year:"2019", month: "Februar", brutto:"465.000", netto:"358.000"},
        {store: "Majorstuen", year:"2019", month: "Mars", brutto:"410.000", netto:"312.000"},
        {store: "Majorstuen", year:"2019", month: "April", brutto:"510.000", netto:"367.000"},
        {store: "Majorstuen", year:"2019", month: "Mai", brutto:"527.000", netto:"370.000"},
        {store: "Majorstuen", year:"2019", month: "Juni", brutto:"644.000", netto:"526.000"},
        {store: "Majorstuen", year:"2019", month: "Juli", brutto:"544.000", netto:"339.000"},
        {store: "Majorstuen", year:"2019", month: "August", brutto:"433.000", netto:"324.000"},
        {store: "Majorstuen", year:"2019", month: "September", brutto:"464.000", netto:"290.000"},
        {store: "Majorstuen", year:"2019", month: "Oktober", brutto:"384.000", netto:"258.000"},
        {store: "Majorstuen", year:"2019", month: "November", brutto:"672.000", netto:"499.000"},
        {store: "Majorstuen", year:"2019", month: "Desember", brutto:"713.000", netto:"581.000"},
        //TORSHOV 2020
        {store: "Torshov", year:"2020", month: "Januar", brutto:"460.000", netto:"395.000"},
        {store: "Torshov", year:"2020", month: "Februar", brutto:"495.000", netto:"408.000"},
        {store: "Torshov", year:"2020", month: "Mars", brutto:"440.000", netto:"352.000"},
        {store: "Torshov", year:"2020", month: "April", brutto:"530.000", netto:"407.000"},
        {store: "Torshov", year:"2020", month: "Mai", brutto:"537.000", netto:"420.000"},
        {store: "Torshov", year:"2020", month: "Juni", brutto:"684.000", netto:"586.000"},
        {store: "Torshov", year:"2020", month: "Juli", brutto:"604.000", netto:"409.000"},
        {store: "Torshov", year:"2020", month: "August", brutto:"503.000", netto:"374.000"},
        {store: "Torshov", year:"2020", month: "September", brutto:"434.000", netto:"330.000"},
        {store: "Torshov", year:"2020", month: "Oktober", brutto:"384.000", netto:"308.000"},
        {store: "Torshov", year:"2020", month: "November", brutto:"642.000", netto:"549.000"},
        {store: "Torshov", year:"2020", month: "Desember", brutto:"794.000", netto:"631.000"},
        //TORSHOV 2019
        {store: "Torshov", year:"2019", month: "Januar", brutto:"210.000", netto:"145.000"},
        {store: "Torshov", year:"2019", month: "Februar", brutto:"255.000", netto:"168.000"},
        {store: "Torshov", year:"2019", month: "Mars", brutto:"200.000", netto:"122.000"},
        {store: "Torshov", year:"2019", month: "April", brutto:"300.000", netto:"237.000"},
        {store: "Torshov", year:"2019", month: "Mai", brutto:"317.000", netto:"420.000"},
        {store: "Torshov", year:"2019", month: "Juni", brutto:"434.000", netto:"336.000"},
        {store: "Torshov", year:"2019", month: "Juli", brutto:"354.000", netto:"249.000"},
        {store: "Torshov", year:"2019", month: "August", brutto:"243.000", netto:"164.000"},
        {store: "Torshov", year:"2019", month: "September", brutto:"274.000", netto:"190.000"},
        {store: "Torshov", year:"2019", month: "Oktober", brutto:"394.000", netto:"200.000"},
        {store: "Torshov", year:"2019", month: "November", brutto:"482.000", netto:"409.000"},
        {store: "Torshov", year:"2019", month: "Desember", brutto:"523.000", netto:"391.000"}
    ];

    const salesDishes = [
        //OSLO S
        {place: "Oslo S",category: "Drikke", name:"Stor brus", price:45, amount: 100},
        {place: "Oslo S", category: "Drikke", name:"Liten øl", price: 85, amount: 50},
        {place: "Oslo S",category:"Drikke", name:"Stor øl", price: 110, amount: 60},
        {place: "Oslo S", category: "Drikke", name:"Liten vin", price: 95, amount: 100},
        {place: "Oslo s", category: "Drikke", name:"Vinflaske", price: 350, amount: 34},
        {place: "Oslo S", category: "Drikke", name:"Drink", price: 125, amount: 101},
        {place: "Oslo S", category: "Drikke", name:"Vann", price: 40, amount: 140},
        {place: "Oslo S", category: "Forett", name: "Hvitløksbrød", price: 65, amount: 65},
        {place: "Oslo S", category: "Forett", name:"Nachochips", price:95, amount: 100},
        {place: "Oslo S", category: "Forett", name:"Løkringer", price:79, amount: 70},
        {place: "Oslo S", category: "Forett", name:"Liten fries", price:59, amount: 50},
        {place: "Oslo S", category: "Forett", name:"Stor fries", price:79, amount: 90},
        {place: "Oslo S", category: "Pizza", name:"Kjøttdeig pizza", price:120, amount: 30},
        {place: "Oslo S", category: "Pizza", name:"Biff pizza", price:120, amount: 35},
        {place: "Oslo S", category: "Pizza", name:"Reke pizza", price:120, amount: 15},
        {place: "Oslo S", category: "Hovedretter", name:"Lasagne", price:180, amount: 40},
        {place: "Oslo S", category: "Hovedretter", name:"Kebabtallerken", price:170, amount: 45},
        {place: "Oslo S", category: "Hovedretter", name:"Hamburger", price:155, amount: 60},
        {place: "Oslo S", category: "Dessert", name:"Oreokake", price:95, amount: 100},
        {place: "Oslo S", category: "Dessert", name:"Bananasplitt", price:95, amount: 100},
        {place: "Oslo S", category: "Dessert", name:"Eplekake", price:80, amount: 100},
        //MAJORSTUEN
        {place: "Majorstuen",category: "Drikke", name:"Stor brus", price:45, amount: 100},
        {place: "Majorstuen", category: "Drikke", name:"Liten øl", price: 85, amount: 50},
        {place: "Majorstuen",category:"Drikke", name:"Stor øl", price: 110, amount: 60},
        {place: "Majorstuen", category: "Drikke", name:"Liten vin", price: 95, amount: 100},
        {place: "Majorstuen", category: "Drikke", name:"Vinflaske", price: 350, amount: 34},
        {place: "Majorstuen", category: "Drikke", name:"Drink", price: 125, amount: 101},
        {place: "Majorstuen", category: "Drikke", name:"Vann", price: 40, amount: 140},
        {place: "Majorstuen", category: "Forett", name: "Hvitløksbrød", price: 65, amount: 65},
        {place: "Majorstuen", category: "Forett", name:"Nachochips", price:95, amount: 100},
        {place: "Majorstuen", category: "Forett", name:"Løkringer", price:79, amount: 70},
        {place: "Majorstuen", category: "Forett", name:"Liten fries", price:59, amount: 50},
        {place: "Majorstuen", category: "Forett", name:"Stor fries", price:79, amount: 90},
        {place: "Majorstuen", category: "Pizza", name:"Kjøttdeig pizza", price:120, amount: 30},
        {place: "Majorstuen", category: "Pizza", name:"Biff pizza", price:120, amount: 35},
        {place: "Majorstuen", category: "Pizza", name:"Reke pizza", price:120, amount: 15},
        {place: "Majorstuen", category: "Hovedretter", name:"Lasagne", price:180, amount: 40},
        {place: "Majorstuen", category: "Hovedretter", name:"Kebabtallerken", price:170, amount: 45},
        {place: "Majorstuen", category: "Hovedretter", name:"Hamburger", price:155, amount: 60},
        {place: "Majorstuen", category: "Dessert", name:"Oreokake", price:95, amount: 100},
        {place: "Majorstuen", category: "Dessert", name:"Bananasplitt", price:95, amount: 100},
        {place: "Majorstuen", category: "Dessert", name:"Eplekake", price:80, amount: 100},
        //KARL JOHAN
        {place: "Karl Johan",category: "Drikke", name:"Stor brus", price:45, amount: 100},
        {place: "Karl Johan", category: "Drikke", name:"Liten øl", price: 85, amount: 50},
        {place: "Karl Johan",category:"Drikke", name:"Stor øl", price: 110, amount: 60},
        {place: "Karl Johan", category: "Drikke", name:"Liten vin", price: 95, amount: 100},
        {place: "Karl Johan", category: "Drikke", name:"Vinflaske", price: 350, amount: 34},
        {place: "Karl Johan", category: "Drikke", name:"Drink", price: 125, amount: 101},
        {place: "Karl Johan", category: "Drikke", name:"Vann", price: 40, amount: 140},
        {place: "Karl Johan", category: "Forett", name: "Hvitløksbrød", price: 65, amount: 65},
        {place: "Karl Johan", category: "Forett", name:"Nachochips", price:95, amount: 100},
        {place: "Karl Johan", category: "Forett", name:"Løkringer", price:79, amount: 70},
        {place: "Karl Johan", category: "Forett", name:"Liten fries", price:59, amount: 50},
        {place: "Karl Johan", category: "Forett", name:"Stor fries", price:79, amount: 90},
        {place: "Karl Johan", category: "Pizza", name:"Kjøttdeig pizza", price:120, amount: 30},
        {place: "Karl Johan", category: "Pizza", name:"Biff pizza", price:120, amount: 35},
        {place: "Karl Johan", category: "Pizza", name:"Reke pizza", price:120, amount: 15},
        {place: "Karl Johan", category: "Hovedretter", name:"Lasagne", price:180, amount: 40},
        {place: "Karl Johan", category: "Hovedretter", name:"Kebabtallerken", price:170, amount: 45},
        {place: "Karl Johan", category: "Hovedretter", name:"Hamburger", price:155, amount: 60},
        {place: "Karl Johan", category: "Dessert", name:"Oreokake", price:95, amount: 100},
        {place: "Karl Johan", category: "Dessert", name:"Bananasplitt", price:95, amount: 100},
        {place: "Karl Johan", category: "Dessert", name:"Eplekake", price:80, amount: 100},
        //TORSHOV
        {place: "Torshov",category: "Drikke", name:"Stor brus", price:45, amount: 100},
        {place: "Torshov", category: "Drikke", name:"Liten øl", price: 85, amount: 50},
        {place: "Torshov",category:"Drikke", name:"Stor øl", price: 110, amount: 60},
        {place: "Torshov", category: "Drikke", name:"Liten vin", price: 95, amount: 100},
        {place: "Torshov", category: "Drikke", name:"Vinflaske", price: 350, amount: 34},
        {place: "Torshov", category: "Drikke", name:"Drink", price: 125, amount: 101},
        {place: "Torshov", category: "Drikke", name:"Vann", price: 40, amount: 140},
        {place: "Torshov", category: "Forett", name: "Hvitløksbrød", price: 65, amount: 65},
        {place: "Torshov", category: "Forett", name:"Nachochips", price:95, amount: 100},
        {place: "Torshov", category: "Forett", name:"Løkringer", price:79, amount: 70},
        {place: "Torshov", category: "Forett", name:"Liten fries", price:59, amount: 50},
        {place: "Torshov", category: "Forett", name:"Stor fries", price:79, amount: 90},
        {place: "Torshov", category: "Pizza", name:"Kjøttdeig pizza", price:120, amount: 30},
        {place: "Torshov", category: "Pizza", name:"Biff pizza", price:120, amount: 35},
        {place: "Torshov", category: "Pizza", name:"Reke pizza", price:120, amount: 15},
        {place: "Torshov", category: "Hovedretter", name:"Lasagne", price:180, amount: 40},
        {place: "Torshov", category: "Hovedretter", name:"Kebabtallerken", price:170, amount: 45},
        {place: "Torshov", category: "Hovedretter", name:"Hamburger", price:155, amount: 60},
        {place: "Torshov", category: "Dessert", name:"Oreokake", price:95, amount: 100},
        {place: "Torshov", category: "Dessert", name:"Bananasplitt", price:95, amount: 100},
        {place: "Torshov", category: "Dessert", name:"Eplekake", price:80, amount: 100}
    ];

    const getAllSales = () => sales;

    const getStores= ( store ) => sales.filter(sale => sale.store.toLowerCase() === store.toLowerCase());
    const getYear = ( year ) => sales.filter(sale => sale.year.toLowerCase() === year.toLowerCase());
    const getMonth = ( month) => sales.filter(sale => sale.month.toLowerCase() === month.toLowerCase());

    /**
     * Martine har endret her. 
     * Henter de forskjellige rettene fra de forskjellige restaurantene. Samt hente alle sammen. 
     *  
     */
    const getAllDishes = () => salesDishes;
    
    const getOsloSDishes = () =>salesDishes.filter(dishes =>
        dishes.place == "Oslo S"
        );
    
    const getOsloSDrink = () => salesDishes.filter(dishes =>
        dishes.place == "Oslo S" && dishes.category == "Drikke"
        );

    const getOsloSAppetizer = () => salesDishes.filter(dishes =>
        dishes.place == "Oslo S" && dishes.category == "Forett"
        );

    const getOsloSMainCourse = () => salesDishes.filter(dishes =>
        dishes.place == "Oslo S" && dishes.category == "Hovedretter"
        );

    const getOsloSDessert = () => salesDishes.filter(dishes =>
        dishes.place == "Oslo S" && dishes.category == "Dessert"
        );

    const getOsloSPizza = () => salesDishes.filter(dishes =>
        dishes.place == "Oslo S" && dishes.category == "Pizza"
        );
    
    //MAJORSTUEN
    const getMajoDishes = () =>salesDishes.filter(dishes =>
        dishes.place == "Majorstuen"
        );
        
    const getMajoDrink = () => salesDishes.filter(dishes =>
        dishes.place == "Majorstuen" && dishes.category == "Drikke"
        );
    
    const getMajoAppetizer = () => salesDishes.filter(dishes =>
        dishes.place == "Majorstuen" && dishes.category == "Forett"
        );
    
    const getMajoMainCourse = () => salesDishes.filter(dishes =>
        dishes.place == "Majorstuen" && dishes.category == "Hovedretter"
        );
    
    const getMajoDessert = () => salesDishes.filter(dishes =>
        dishes.place == "Majorstuen" && dishes.category == "Dessert"
        );
    
    const getMajoPizza = () => salesDishes.filter(dishes =>
        dishes.place == "Majorstuen" && dishes.category == "Pizza"
        );
    
    //KARL JOHAN
    const getKarljohanDishes = () =>salesDishes.filter(dishes =>
        dishes.place == "Karl Johan"
        );
        
    const getKarljohanDrink = () => salesDishes.filter(dishes =>
        dishes.place == "Karl Johan" && dishes.category == "Drikke"
        );
    
    const getKarljohanAppetizer = () => salesDishes.filter(dishes =>
        dishes.place == "Karl Johan" && dishes.category == "Forett"
        );
    
    const getKarljohanMainCourse = () => salesDishes.filter(dishes =>
        dishes.place == "Karl Johan" && dishes.category == "Hovedretter"
        );
    
    const getKarljohanDessert = () => salesDishes.filter(dishes =>
        dishes.place == "Karl Johan" && dishes.category == "Dessert"
        );
    
    const getKarljohanPizza = () => salesDishes.filter(dishes =>
        dishes.place == "Karl Johan" && dishes.category == "Pizza"
        );
    
    //TORSHOV
    const getTorshovDishes = () =>salesDishes.filter(dishes =>
        dishes.place == "Torshov"
        );
        
    const getTorshovDrink = () => salesDishes.filter(dishes =>
        dishes.place == "Torshov" && dishes.category == "Drikke"
        );
    
    const getTorshovAppetizer = () => salesDishes.filter(dishes =>
        dishes.place == "Torshov" && dishes.category == "Forett"
        );
    
    const getTorshovMainCourse = () => salesDishes.filter(dishes =>
        dishes.place == "Torshov" && dishes.category == "Hovedretter"
        );
    
    const getTorshovDessert = () => salesDishes.filter(dishes =>
        dishes.place == "Torshov" && dishes.category == "Dessert"
        );
    
    const getTorshovPizza = () => salesDishes.filter(dishes =>
        dishes.place == "Torshov" && dishes.category == "Pizza"
        );

    let addNewSale = (adding) => sales.push(adding);

    let addNewDish = (adding) => salesDishes.push(adding);

    return {
        getAllSales,
        getStores,
        getYear,
        getMonth,
        getAllDishes,
        getOsloSDishes,
        getOsloSDrink,
        getOsloSAppetizer,
        getOsloSMainCourse,
        getOsloSDessert,
        getOsloSPizza,
        getMajoDishes,
        getMajoDrink,
        getMajoAppetizer,
        getMajoMainCourse,
        getMajoDessert,
        getMajoPizza,
        getKarljohanDishes,
        getKarljohanDrink,
        getKarljohanAppetizer,
        getKarljohanMainCourse,
        getKarljohanDessert,
        getKarljohanPizza,
        getTorshovDishes,
        getTorshovDrink,
        getTorshovAppetizer,
        getTorshovMainCourse,
        getTorshovDessert,
        getTorshovPizza,
        addNewSale,
        addNewDish
    }

}()); // end of saleModule

export default saleModule;

