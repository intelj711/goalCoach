import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDq-CwXP_Z-YNs0rZoHKEa_ZURsM31wseA",
    authDomain: "goadcoach.firebaseapp.com",
    databaseURL: "https://goadcoach.firebaseio.com",
    storageBucket: "goadcoach.appspot.com",
    messagingSenderId: "615201788725"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');