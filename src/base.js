import * as firebase from "firebase/app";
import "firebase/auth";
import { getDatabase, ref } from "firebase/database";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCZxJ6kdWZCuxMyo4uQkiQI4YO4kHX7zig",
  authDomain: "yelpappauth.firebaseapp.com",
  databaseURL: "https://yelpappauth-default-rtdb.firebaseio.com/",
  projectId: "yelpappauth",
  storageBucket: "yelpappauth.appspot.com",
  messagingSenderId: "140213295095",
  appId: "1:140213295095:web:00640c7b61ec57d7db00f2",
});

export const database = getDatabase(app);
export const dbRef = ref(database);
