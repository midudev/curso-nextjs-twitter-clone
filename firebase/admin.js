const admin = require("firebase-admin")

const serviceAccount = require("./firebase-keys.json")

console.log(process.env.FIREBASE_DATABASE_URL)

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  })
} catch (e) {}

export const firestore = admin.firestore()
