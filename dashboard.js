
const firebaseConfig = {

apiKey: "AIzaSyAWdBeBnPSHJPInr-dOQ5uAcssUls1msjw",

authDomain: "iptv-69f46.firebaseapp.com",

projectId: "iptv-69f46",

storageBucket: "iptv-69f46.firebasestorage.app",

messagingSenderId: "997809027435",

appId: "1:997809027435:web:5c0450beda8d1019b7f42e",

measurementId: "G-3MF89GJVZ4"

};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{

if(user){

document.getElementById("user-name").innerHTML =
user.displayName || "Galaxy User";

document.getElementById("user-email").innerHTML =
user.email;

if(user.photoURL){

document.getElementById("user-photo").src =
user.photoURL;

}

}else{

window.location.href = "login.html";

}

});

function logout(){

firebase.auth().signOut()

.then(()=>{

window.location.href = "login.html";

});

}
