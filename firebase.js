let app_firebase={};
let loginFormOn=false;
let notProcessed=true;

function closeLogin(){
    const loginfrm=document.querySelector("#loginfrm");
    loginfrm.style.display='none';
    loginFormOn=false;
    if(document.querySelector("#login"))
        document.querySelector("#login").innerHTML="Login";
}

function loginProcess() {
    if(notProcessed){
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
                },
                uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
                }
            },
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: window.location.pathname,
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
    
        ui.start('#firebaseui-auth-container', uiConfig);
        notProcessed=false;
    }
}
(function(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAIsjJMOvPEo-F2k5wzDq8jhHRa0Qr8_S0",
        authDomain: "notesguruauth.firebaseapp.com",
        databaseURL: "https://notesguruauth.firebaseio.com",
        projectId: "notesguruauth",
        storageBucket: "notesguruauth.appspot.com",
        messagingSenderId: "802291421105",
        appId: "1:802291421105:web:69008f75988df0c2f3f790",
        measurementId: "G-SP1B83L5ND"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    app_firebase=firebase;
})()