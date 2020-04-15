const anchors=document.querySelectorAll('a');
const syll=document.querySelector('#syll');
let firebase=app_firebase;

syll.style.display='block';

firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // User is not signed in.
        uid=null;
        anchors.forEach(element => {
            element.addEventListener('click',(e)=>{
                e.preventDefault();
                const loginfrm=document.querySelector("#loginfrm");
                if(!loginFormOn){
                    loginFormOn=true;
                    loginfrm.style.display='block';
                    loginProcess();
                }// else{

            // }
            })
        });
    }else{
        console.log("logged in");
        
    }
});