import firebase from 'firebase/app'
import 'firebase/database'


const app = firebase.initializeApp({
  apiKey: "AIzaSyC_Z8Ps4H3TDwOqPGf_cw8CmyS-STSZSi8",
  authDomain: "paes-vo-cema.firebaseapp.com",
  databaseURL: "https://paes-vo-cema-default-rtdb.firebaseio.com",
  projectId: "paes-vo-cema",
  storageBucket: "paes-vo-cema.appspot.com",
  messagingSenderId: "751270000514",
  appId: "1:751270000514:web:6b070cccf42dbcab37c19b"
})

export const db = app.database()