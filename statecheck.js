import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAa6UwjMvGanhRs9xWmB1P_ijt7-y36hA",
    authDomain: "ott-website-f5752.firebaseapp.com",
    projectId: "ott-website-f5752",
    storageBucket: "ott-website-f5752.firebasestorage.app",
    messagingSenderId: "168991675968",
    appId: "1:168991675968:web:625104844ebd719d0031a5",
    measurementId: "G-HSDM0CXR6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const logoutBtn = document.getElementById("logout");
const dropDown = document.getElementById("auth-btns");

if(logoutBtn){
    logoutBtn.addEventListener('click',()=>{
        if(confirm("Log out panna poriya chetta")){
            signOut(auth).then(() => {
                alert("Logout successfully");
                logoutBtn.style.display = 'none';
                dropDown.style.display = 'inline';
              }).catch((error) => {
                // An error happened.
              });
        }
    })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    logoutBtn.style.display = 'inline';
    dropDown.style.display = 'none'
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
        logoutBtn.style.display = 'none';
        dropDown.style.display = 'inline';
    // User is signed out
    // ...
  }
});


