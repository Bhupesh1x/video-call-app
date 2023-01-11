import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGrt0Ym8-1ML9i0ZXNe-SX6vXP31-yYio",
  authDomain: "video-chat-app-d47b8.firebaseapp.com",
  projectId: "video-chat-app-d47b8",
  storageBucket: "video-chat-app-d47b8.appspot.com",
  messagingSenderId: "17046941595",
  appId: "1:17046941595:web:509360fffd0a2a78f8fb3e",
  measurementId: "G-FM4C8HGHVJ",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
