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


// This "loader" only can ever load one screen
// document.querySelector("appNav").resetToPage("welcome.html");

//Generic page loader subroutine
function pageLoader(pageID){
    console.log("pageLoader() is running, about to load: " + pageID);
    // NOTE: .resetToPage() clears any nav history
    // NOTE: .bringPageTop() keeps any nav history <- usually want this one
    document.querySelector("#appNav").bringPageTop(pageID);
}; // END pageLoader()

// This loader is can run multiple pages
pageLoader("welcome.html"); 

// Function to clear fields in sign up
function fnClearSignup() {
    console.log("fnClearSignup() is running");
    document.querySelector("#signupEmail").value = "";
    document.querySelector("#signupPWD").value = "";
    document.querySelector("#signupPWDconf").value = "";
    document.querySelector("#signupAgeTrue").checked = false;
    document.querySelector("#signupAgeFalse").checked = false;
}; // end fnClearSignup() 

/*
    Ways to store data inputted
    1. variable:       (let someData=1) - temporary
        -- built-in JS
    2. localStorage:   localStorage.setItem("memLocation", "data"); - permanent
        -- built-in JS
    3. database:       more complex; more setup; more code; more overhead
        -- needs extra libraries

localStorage.setItem("mystuff", "homeboy");
localStorage.removeItem()
localStorage.getItem("mystuff");

*/

// function to create an account
function fnSignUp(){
    console.log("fnSignUp() is running");

    // Read the fields
    let valsignupEmail = document.querySelector("#signupEmail").value;
    let valsignupPWD = document.querySelector("#signupPWD").value;
    let valsignupPWDconf = document.querySelector("#signupPWDconf").value;

    console.log(valsignupEmail, valsignupPWD, valsignupPWDconf);

    // by default, the app assumes a limited account (a child account)
    let valsignupAge = false;
    // based on what clicked, set the value
    if(document.querySelector("#signupAgeTrue").checked) {
        // True: adult
        console.log("TRUE: Old enough");
        valsignupAge = true;
    } else {
        // False: child
        console.log("FALSE: NOT old enough");
        valsignupAge = false;
    }; // End if..else age checker

    // Confirm if passwords match
    if(valsignupPWD !== valsignupPWDconf) {
        // We confirmed that yes, they DO NOT MATCH
        // make a pop up
        ons.notification.alert("Passwords do not match!");
        //To-do: make it play a sound or vibrate
        // And clear fields to try again
        document.querySelector("#signupPWD").value = "";
        document.querySelector("#signupPWDconf").value = "";

    } else {
        let tmpvalsignupEmail = valsignupEmail.toLowerCase();
        // But first check if an account already exists
        if(localStorage.getItem(tmpvalsignupEmail) === null) {
            // True: We have not account/data, so add data in localStorage
            ons.notification.alert("Welcom. Account created;");
            fnClearSignup();
        } else {
            // False: We do have some data/account in localStorage, so deal with it
            console.log("Account already exists");
            ons.notification.alert("You already have an account!");
        }; // End if..else checker for existing account
    }; // End if..else checker for PWD matching
} // end fnSignUp()

// Subroutine to handle logging in
function fnLogin() {
    console.log("fnLogin() is running");
    //Read the fields
    let valloginEmail = document.querySelector("#loginEmail").value;
    let valloginPWD = document.querySelector("#loginPWD").value;
    let tmpvalloginEmail = valloginEmail.toLowerCase();

    // first check if account exists in localStorage
    // second check if passwords match
    // third send them to home.html
    if(localStorage.getItem(tempvalloginEmail) === null) {
        // There is no account at all
        ons.notification.alert("No account. Please create one!");
    } else {
        // There is an account, proceed to 2. check PWD
        if(valloginPWD === localStorage.getItem(tmpvalloginEmail)) {
            // Does match, proceed to 3. send them to home.html
            pageLoader("catalog.html");
            // To-do: detect if child account or parent account or admin account
            // To-do: set up a Remember Me feature
        } else {
            // Does NOT match, so popup
            ons.notification.alert("Wrong password!");
        }
    };
}; // End fnLogin();