sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'buildorders.app.products',
            componentId: 'ProductsFioriList',
            entitySet: 'ProductsFiori'
        },
        CustomPageDefinitions
    );
});