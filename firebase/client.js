import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC70LAhPV1qHunyNoZbOAk7QRUEh57PPbQ",
  authDomain: "devter-6661a.firebaseapp.com",
  databaseURL: "https://devter-6661a.firebaseio.com",
  projectId: "devter-6661a",
  storageBucket: "devter-6661a.appspot.com",
  messagingSenderId: "807038871343",
  appId: "1:807038871343:web:cb90ded09f7def7d8063da",
  measurementId: "G-909SM8WT3B",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        console.log(createdAt)

        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
          date
        )

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        }
      })
    })
}
