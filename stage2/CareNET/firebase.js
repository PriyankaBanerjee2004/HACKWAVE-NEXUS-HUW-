
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBETOkck04RkORpp4YLkevzyq-LKT_09S0",
    authDomain: "xoweb-8717b.firebaseapp.com",
    projectId: "xoweb-8717b",
    storageBucket: "xoweb-8717b.appspot.com",
    messagingSenderId: "987398525475",
    appId: "1:987398525475:web:2a5210affc54ca59555796"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.language = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("login");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href= "src/Screens/Menu_Page/menupage.html"
            window.location.href= "./src/Screens/Menu_Page/menupage.html"
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    
})


