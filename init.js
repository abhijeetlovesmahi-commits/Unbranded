// --- GLOBAL CONFIGURATION ---
const SCHOOL_CONFIG = {
    name: "THE LALIT INTERNATIONAL SCHOOL",
    session: "2026-27",
    logo: "logo.png",
    address: "Imperial Square, Education City",
    contact: "+91 98765 43210",
    themeColor: "#002366",
    accentColor: "#D4AF37"
};

// --- FIREBASE INITIALIZATION ---
const firebaseConfig = {
    apiKey: "AIzaSyDqDmsMp2eAuHJBcjW-ciO2JcLTXapiIrs",
    authDomain: "the-lalit-d7472.firebaseapp.com",
    projectId: "the-lalit-d7472",
    appId: "1:479237084229:web:31078825739b3c5712ff2c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();

// --- UTILITY FUNCTIONS ---
function checkAuth() {
    const role = localStorage.getItem('userRole');
    if (!role && !window.location.href.includes('login.html')) {
        window.location.href = 'login.html';
    }
}
