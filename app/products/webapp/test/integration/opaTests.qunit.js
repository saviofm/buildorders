sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'buildorders/app/products/test/integration/FirstJourney',
		'buildorders/app/products/test/integration/pages/ProductsFioriList',
		'buildorders/app/products/test/integration/pages/ProductsFioriObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsFioriList, ProductsFioriObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('buildorders/app/products') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsFioriList: ProductsFioriList,
					onTheProductsFioriObjectPage: ProductsFioriObjectPage
                }
            },
            opaJourney.run
        );
    }
);