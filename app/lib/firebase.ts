// filepath: /c:/Users/KevinHehn/repos/Skiller/skiller-frontend/app/firebase.ts
import { Analytics, getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6gxWt5wrJkh0Kltm9Zn9X-KKAc4rTwjg",
  authDomain: "skiller-d94a2.firebaseapp.com",
  projectId: "skiller-d94a2",
  storageBucket: "skiller-d94a2.firebasestorage.app",
  messagingSenderId: "435740018991",
  appId: "1:435740018991:web:0047810a27b39f0b00f9da",
  measurementId: "G-DF3KL2F3KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (only on the client side)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  console.log("TEST")
  analytics = getAnalytics(app);
}
const auth = getAuth(app);


export { analytics, app, auth };

