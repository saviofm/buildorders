using buildorders as buildorders from '../db/data-model';


service CatalogService {// @( requires:'authenticated-user') {
 
    entity Products as projection on buildorders.Products ;
    entity Customer as projection on buildorders.Customer ;
    entity Orders as projection on buildorders.Orders ;
    entity OrderItems as projection on buildorders.OrderItems;

    type product {};

    function getEAN (barcode: String)  returns product;

    action loadProducts() returns {};


    function loadProductsGet (update: String)  returns product;
    
}
