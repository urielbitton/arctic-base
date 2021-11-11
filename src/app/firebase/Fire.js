import firebase from "firebase"
 
const config = {
  apiKey: "AIzaSyBFA_Ntjhg8aJLRQDyym64b-c8WHpvsbCE",
  authDomain: "arctic-base.firebaseapp.com",
  projectId: "arctic-base",
  storageBucket: "arctic-base.appspot.com",
  messagingSenderId: "444680853054",
  appId: "1:444680853054:web:0fceb533661ed8225fe36f"
}
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 

