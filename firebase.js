  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjCKOY_zNL0irmAM5O7DA4PhHDuKr0YCY",
    authDomain: "easy-journey-b5e9b.firebaseapp.com",
    databaseURL: "https://easy-journey-b5e9b-default-rtdb.firebaseio.com",
    projectId: "easy-journey-b5e9b",
    storageBucket: "easy-journey-b5e9b.appspot.com",
    messagingSenderId: "59337509697",
    appId: "1:59337509697:web:bc3b82f3f044473ab36fc0",
    measurementId: "G-GQE4VTXDTL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app;
// const auth =getAuth();