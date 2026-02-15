// Global Configuration
const SCHOOL_CONFIG = {
    name: "THE LALIT INTERNATIONAL SCHOOL",
    session: "2025-26",
    address: "Imperial Square, Education City",
    contact: "+91 98765 43210",
    theme: {
        primary: "#002366",
        accent: "#D4AF37",
        success: "#2ecc71",
        danger: "#e74c3c"
    }
};

// Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyDqDmsMp2eAuHJBcjW-ciO2JcLTXapiIrs",
  authDomain: "the-lalit-d7472.firebaseapp.com",
  projectId: "the-lalit-d7472",
  appId: "1:479237084229:web:31078825739b3c5712ff2c"
};

// Initialize Firebase only once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Global Helper Functions
const formatCurrency = (amt) => "₹" + Number(amt).toLocaleString('en-IN');
const getTodayDate = () => new Date().toISOString().split('T')[0];

console.log("Imperial System Initialized for: " + SCHOOL_CONFIG.name);
