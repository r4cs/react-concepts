// services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDxfhDnNUeVTnP9v3_eagX2uw4RZPWVgHU",
    authDomain: "tdsps-6083a.firebaseapp.com",
    databaseURL: "https://tdsps-6083a-default-rtdb.firebaseio.com",
    projectId: "tdsps-6083a",
    storageBucket: "tdsps-6083a.appspot.com",
    messagingSenderId: "1034275232503",
    appId: "1:1034275232503:web:e31da232d95fa19667d1f2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;
