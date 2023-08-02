using CatalogService as CatalogService from './cat-service';



@protocol : 'rest'
service CatalogRest {

    entity Products as projection on CatalogService.Products 
       
    type product {}

    function getEAN(barcode: String)  returns product;
    
}