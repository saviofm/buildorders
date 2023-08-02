sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'buildorders/app/orders/test/integration/FirstJourney',
		'buildorders/app/orders/test/integration/pages/OrdersFioriList',
		'buildorders/app/orders/test/integration/pages/OrdersFioriObjectPage',
		'buildorders/app/orders/test/integration/pages/OrderItemsFioriObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersFioriList, OrdersFioriObjectPage, OrderItemsFioriObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('buildorders/app/orders') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersFioriList: OrdersFioriList,
					onTheOrdersFioriObjectPage: OrdersFioriObjectPage,
					onTheOrderItemsFioriObjectPage: OrderItemsFioriObjectPage
                }
            },
            opaJourney.run
        );
    }
);