import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDDGy9Gvfhkl9su49EbiNXdr9pw1AEtaZc",
    authDomain: "goalcoach-1f6a0.firebaseapp.com",
    databaseURL: "https://goalcoach-1f6a0.firebaseio.com",
    storageBucket: "goalcoach-1f6a0.appspot.com",
    messagingSenderId: "95689330459"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
