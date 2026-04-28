import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDOH5kGXKWhdvj8ZLl-3WTuQ5895Cglpdo",
  authDomain: "fiap-auth-app-76ab9.firebaseapp.com",
  databaseURL: "https://fiap-auth-app-76ab9-default-rtdb.firebaseio.com",
  projectId: "fiap-auth-app-76ab9",
  storageBucket: "fiap-auth-app-76ab9.firebasestorage.app",
  messagingSenderId: "564806237361",
  appId: "1:564806237361:web:b0022fa592e3ea22de3690",
  measurementId: "G-BER3EH7CKB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
