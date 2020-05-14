import firebase from "firebase";

export default firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY_FB,
    authDomain: process.env.authDomain,
    databaseURL:process.env.databaseURL,
    projectId:process.env.projectId,
    storageBucket:process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
    appId:process.env.appId,
    measurementId:process.env.measurementId
  })
