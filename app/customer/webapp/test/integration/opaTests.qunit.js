sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'buildorders/app/customer/test/integration/FirstJourney',
		'buildorders/app/customer/test/integration/pages/CustomerFioriList',
		'buildorders/app/customer/test/integration/pages/CustomerFioriObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerFioriList, CustomerFioriObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('buildorders/app/customer') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerFioriList: CustomerFioriList,
					onTheCustomerFioriObjectPage: CustomerFioriObjectPage
                }
            },
            opaJourney.run
        );
    }
);