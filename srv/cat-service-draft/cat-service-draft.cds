using buildorders as buildorders from '../../db/data-model';


service CatalogServiceDraft {// @( requires:'authenticated-user') {
    @odata.draft.enabled
    entity ProductsFiori as projection on buildorders.Products ;
    @odata.draft.enabled
    entity CustomerFiori as projection on buildorders.Customer ;
    @odata.draft.enabled
    entity OrdersFiori as projection on buildorders.Orders ;
    entity OrderItemsFiori as projection on buildorders.OrderItems;
    
}
