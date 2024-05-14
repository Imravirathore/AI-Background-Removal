import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvDp1gVXpZT8eZkOC4S-rIFAAIVh-KWG4",
  authDomain: "ai-bg-removal.firebaseapp.com",
  projectId: "ai-bg-removal",
  storageBucket: "ai-bg-removal.appspot.com",
  messagingSenderId: "11525331938",
  appId: "1:11525331938:web:b5b3d01090524c620e37bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
