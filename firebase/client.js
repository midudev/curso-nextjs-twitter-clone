import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC70LAhPV1qHunyNoZbOAk7QRUEh57PPbQ",
  authDomain: "devter-6661a.firebaseapp.com",
  databaseURL: "https://devter-6661a.firebaseio.com",
  projectId: "devter-6661a",
  storageBucket: "devter-6661a.appspot.com",
  messagingSenderId: "807038871343",
  appId: "1:807038871343:web:cb90ded09f7def7d8063da",
  measurementId: "G-909SM8WT3B"
}

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user)
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}