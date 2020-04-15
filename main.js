(function(){
    const loginButton=document.querySelector('#login');
    let firebase=app_firebase;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("logged in");
            uid=user.uid;
            loginButton.innerHTML="Logout";
            loginButton.addEventListener("click",()=>{
                console.log("clicked logout")
                firebase.auth().signOut().then(() => {
                    console.log('Signed Out');
                  })
                  .catch(e=>{
                   console.error('Sign Out Error', e);
                  });
            })
        }else{
            // User is signed in.
            console.log("logged out");
            uid=null;
            loginButton.innerHTML="Login";
            loginButton.addEventListener("click",()=>{
                const loginfrm=document.querySelector("#loginfrm");
                if(loginFormOn){
                    closeLogin();
                    // loginfrm.style.display='none';
                    // loginButton.innerHTML="Login";
                    // loginFormOn=false;
                }else{
                    loginFormOn=true;
                    loginButton.innerHTML="Close";
                    loginfrm.style.display='block';
                    loginProcess();
                }
            })
        }
    });
})();