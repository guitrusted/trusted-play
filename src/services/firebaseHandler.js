// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getUid } from "../services/uidHandler";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://www.youtube.com/watch?v=BOITPwChVP4
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIqDjTOJvcJUoG9q_IVlcUOgFTivp1oaA",
  authDomain: "trusted-play.firebaseapp.com",
  projectId: "trusted-play",
  storageBucket: "trusted-play.appspot.com",
  messagingSenderId: "444799398382",
  appId: "1:444799398382:web:65714d5dc960bba9b6deff",
  measurementId: "G-GFY6MQ0EEH",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

function checkId(model) {
  if (model && !model.id) {
    model.id = getUid();
  }
}

export function postUser(user) {
  checkId(user);

  set(ref(db, `users/${user.id}`), user)
    .then(() => {
      console.log("SUCCESS!!! User registered successfully! \\o/");
    })
    .catch((e) => console.error("OPS! Error happened. /o\\", e));
}

export function postGame(game, successCallback) {
  checkId(game);

  set(ref(db, `games/${game.id}`), game)
    .then(() => {
      successCallback();
      console.log("SUCCESS!!! Game registered successfully! \\o/");
    })
    .catch((e) => console.error("OPS! Error happened. /o\\", e));
}

export function updateGame(game, successCallback) {
  checkId(game);

  update(ref(db, `games/${game.id}`), game)
    .then(() => {
      successCallback();
      console.log("SUCCESS!!! Game updated successfully! \\o/");
    })
    .catch((e) => console.error("OPS! Error happened. /o\\", e));
}

export function getGames(cb = () => {}) {
  get(child(ref(db), "games")).then((snapshot) => {
    if (snapshot.exists()) {
      cb(snapshot.val());
    }
  });
}

export function removeGame(id, cb = () => {}) {
  remove(child(ref(db), `games/${id}`)).then(() => {
    setTimeout(cb);
  });
}
