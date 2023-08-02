sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'buildorders.app.customer',
            componentId: 'CustomerFioriObjectPage',
            entitySet: 'CustomerFiori'
        },
        CustomPageDefinitions
    );
});