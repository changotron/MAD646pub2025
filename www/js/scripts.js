/*
    Since we're using the Onsen UI Framework,
    we have access to various Objects and Properties and Methods
    to create "real" apps via web code. 
*/

// Onsen framework has successfully loaded onto my phone
ons.ready(function() {
    console.log("Onsen UI is ready!");
});

//Check if running on certain device and then ....
if (ons.platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    console.log("running on iPhone X");
} else if(ons.platform.isAndroid()){
    console.log("running on android!");
};

function pageLoader(pageID){
    console.log("pageLoader() is running, about to load: " + pageID);
    document.querySelector("#appNav").resetToPage(pageID);
}; // END pageLoader()

// This loader is can run multiple pages
pageLoader("welcome.html");