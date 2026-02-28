import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// You will need to get a service account key from the Firebase console
// Settings > Service Accounts > Generate new private key
// And save it as 'serviceAccountKey.json' in your project root or load it via env vars
// For local development with env variables, we parse the JSON string
const serviceAccountKeyStr = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!getApps().length) {
  if (serviceAccountKeyStr) {
    try {
      const serviceAccount = JSON.parse(serviceAccountKeyStr);
      initializeApp({
        credential: cert(serviceAccount),
      });
    } catch (error) {
      console.error("Error parsing FIREBASE_SERVICE_ACCOUNT_KEY:", error);
      // Fallback to default application credentials if json is invalid
      initializeApp();
    }
  } else {
    // Uses Google Application Credentials if available, or just standard initialize for some GCP environments
    initializeApp();
  }
}

export const adminDb = getFirestore();
