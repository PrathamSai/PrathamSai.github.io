// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnk6Ia9M5_PK8pscnOsYB50t7Cb2nyJvU",
    authDomain: "techproject-553eb.firebaseapp.com",
    databaseURL: "https://techproject-553eb-default-rtdb.firebaseio.com",
    projectId: "techproject-553eb",
    storageBucket: "techproject-553eb.appspot.com",
    messagingSenderId: "12910723232",
    appId: "1:12910723232:web:2f6332fcb4faa5d399c9c5",
    measurementId: "G-FNRL0NQWBS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

// Get elements
const locationInput = document.getElementById("location");
const issueRadio = document.querySelector('input[name="issue"]:checked');
const submitButton = document.getElementById("submit");

// Add click event listener to the submit button
submitButton.addEventListener("click", function () {
    // Get values
    const locationValue = locationInput.value;
    const issueValue = issueRadio ? issueRadio.value : "No issue selected";

    // Get a reference to the Firebase database
    const database = firebase.database();

    // Get a reference to the "reports" node in your database
    const reportsRef = database.ref('reports');

    // Push the data to the database
    reportsRef.push({
        location: locationValue,
        issue: issueValue,
        timestamp: firebase.database.ServerValue.TIMESTAMP // Optional: include a timestamp
    })
    .then(() => {
        console.log("Data submitted to Realtime Database:", { location: locationValue, issue: issueValue });
    })
    .catch((error) => {
        console.error("Error adding data:", error);
    });
});
