
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

const auth = firebase.auth();

function signup(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email,password)

.then((userCredential)=>{

userCredential.user.sendEmailVerification()

.then(()=>{

alert("Verification email sent");

});

})

.catch((error)=>{

alert(error.message);

});

}

function login(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)

.then((userCredential)=>{

if(userCredential.user.emailVerified){

window.location.href = "dashboard.html";

}else{

alert("Verify your email first");

}

})

.catch((error)=>{

alert(error.message);

});

}

function googleLogin(){

const provider = new firebase.auth.GoogleAuthProvider();

auth.signInWithPopup(provider)

.then(()=>{

window.location.href = "dashboard.html";

})

.catch((error)=>{

alert(error.message);

});

}
