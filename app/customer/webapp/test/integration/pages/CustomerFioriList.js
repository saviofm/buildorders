sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'buildorders.app.customer',
            componentId: 'CustomerFioriList',
            entitySet: 'CustomerFiori'
        },
        CustomPageDefinitions
    );
});