const saleModule = (function(){ // IIFE

    const sales = [
        {table: "test", info:"hehe"},
        {table: "test", info:"hehe" }
    ];

    const getAllSales = () => sales;

    return {getAllSales}

}()); // end of saleModule

export default saleModule;

