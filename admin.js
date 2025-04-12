 // Your Firebase project configuration
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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Fetch the JSON data from Firestore
async function fetchData() {
    const querySnapshot = await db.collection("jsonData").get();
    const dataContainer = document.getElementById("dataContainer");

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const jsonData = JSON.stringify(data, null, 2);
        const pre = document.createElement("pre");
        pre.textContent = jsonData;
        dataContainer.appendChild(pre);
    });
}

// Call the fetchData function to get the data from Firestore
fetchData();
