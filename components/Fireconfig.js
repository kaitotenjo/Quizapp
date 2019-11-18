import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDGXebB4dDGwc2lkbRucTsu0Iv_48i4ngk",
    authDomain: "quizapp-605bf.firebaseapp.com",
    databaseURL: "https://quizapp-605bf.firebaseio.com",
    projectId: "quizapp-605bf",
    storageBucket: "quizapp-605bf.appspot.com",
    messagingSenderId: "977895852806",
    appId: "1:977895852806:web:b5d61fbf3121e7b820ec87",
    measurementId: "G-TMRNN6TGBV"
  };
export const firebaseApp =firebase.initializeApp(firebaseConfig);