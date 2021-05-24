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

    
    const getAllSales = () => sales;

    const getOsloS = () => sales.filter(sale => sale.store === "Oslo S");
    const getKarlJohan = () => sales.filter(sale => sale.store === "Karl Johan");
    const getMajorstuen = () => sales.filter(sale => sale.store === "Majorstuen");
    const getTorshov = () => sales.filter(sale => sale.store === "Torshov");

    const get2020 = () => sales.filter(sale => sale.store === "2020");
    const get2019 = () => sales.filter(sale => sale.store === "2019");
    
    const getJanuar = () => sales.filter(sale => sale.store === "Januar");
    const getFebruar = () => sales.filter(sale => sale.store === "Februar");
    const getMars = () => sales.filter(sale => sale.store === "Mars");
    const getApril = () => sales.filter(sale => sale.store === "April");
    const getMai = () => sales.filter(sale => sale.store === "Mai");
    const getJuni = () => sales.filter(sale => sale.store === "Juni");
    const getJuli = () => sales.filter(sale => sale.store === "Juli");
    const getAugust = () => sales.filter(sale => sale.store === "August");
    const getSeptember = () => sales.filter(sale => sale.store === "September");
    const getOktober = () => sales.filter(sale => sale.store === "Oktober");
    const getNovember = () => sales.filter(sale => sale.store === "November");
    const getDesember = () => sales.filter(sale => sale.store === "Desember");

    const getBrutto = () => sales.filter(sale => sale.store === "Brutto");
    const getNetto = () => sales.filter(sale => sale.store === "Netto");

    return {
        getAllSales,
        getOsloS,
        getKarlJohan,
        getMajorstuen,
        getTorshov,
        get2019,
        get2020,
        getJanuar,
        getFebruar,
        getMars,
        getApril,
        getMai,
        getJuni,
        getJuli,
        getAugust,
        getSeptember,
        getOktober,
        getNovember,
        getDesember,
        getBrutto,
        getNetto
    }

}()); // end of saleModule

export default saleModule;

