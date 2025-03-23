/*
    Since we're using the Onsen UI Framework,
    we have access to various Objects and Properties and Methods
    to create "real" apps via web code. 
*/

    ons.ready(function() {
      console.log("Onsen UI is ready!");
    });

    if (ons.platform.isIPhoneX()) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }