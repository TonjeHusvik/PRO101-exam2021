const saleModule = (function(){ // IIFE

    const sales = [
        {table: "Omsetning", info:"hehe"},
        {table: "Omsetning av retter", info:"hehe" }
    ];

    const getAllSales = () => sales;

    return {getAllSales}

}()); // end of saleModule

export default saleModule;

