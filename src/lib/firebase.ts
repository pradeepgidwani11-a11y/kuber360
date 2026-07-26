import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Lazy — only initialize when first needed and only when apiKey is set.
// This prevents SSG crashes when .env.local is empty.
function initFirebase() {
  if (!firebaseConfig.apiKey) return null;
  return getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
}

export function getDb() {
  const app = initFirebase();
  if (!app) throw new Error('Firebase not configured. Add your keys to .env.local');
  return getFirestore(app);
}

export function getFirebaseAuth() {
  const app = initFirebase();
  if (!app) throw new Error('Firebase not configured. Add your keys to .env.local');
  return getAuth(app);
}
