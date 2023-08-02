using buildorders as buildorders from '../db/data-model';


service CatalogService {// @( requires:'authenticated-user') {
 
     entity Products as projection on buildorders.Products ;

    type product {};

    function getEAN (barcode: String)  returns product;

    action loadProducts() returns {};


    function loadProductsGet (update: String)  returns product;
    
}
