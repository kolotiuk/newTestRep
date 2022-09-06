// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-rMEvEUJ6DbhIaJz-m19MpHLMzbQ1hi4',
  authDomain: 'auth-9127f.firebaseapp.com',
  projectId: 'auth-9127f',
  storageBucket: 'auth-9127f.appspot.com',
  messagingSenderId: '1077758083281',
  appId: '1:1077758083281:web:0634a927ba2da6007f85f0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const provider = new app.auth.GoogleAuthProvider();

const button = document.querySelector('#google');
// button.addEventListener('click', onAuthGoogle);

function onAuthGoogle() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      localStorage.setItem(user.email, user.displayName);
      if (user.email) {
        button.classList.add('is-hidden');
        console.log(`Singed in as ${user.displayName}`);
      }

      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function setToLocalStorage() {
  const user = {
    displayName: user.displayName,
    name: user.name,
  };
  localStorage.setItem('user', JSON.stringify(user));
}
