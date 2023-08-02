using CatalogService as CatalogService from '../cat-service/cat-service';


@protocol : 'rest'
service CatalogRest {

    entity Products as projection on CatalogService.Products 

    entity Customer as projection on CatalogService.Customer ;
    entity Orders as projection on CatalogService.Orders ;
    entity OrderItems as projection on CatalogService.OrderItems;   

    type product {}

    function getEAN(barcode: String)  returns product;
    
}