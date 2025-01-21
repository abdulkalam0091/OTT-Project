 // Your Firebase project configuration
 const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
