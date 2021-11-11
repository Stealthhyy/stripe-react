import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { FirebaseAppProvider } from 'reactfire';

export const firebaseConfig = {
  apiKey: "AIzaSyCZbqILuA6CnEEr57wgmspGBDqwcUDe8D8",
  authDomain: "stripe-1c289.firebaseapp.com",
  projectId: "stripe-1c289",
  storageBucket: "stripe-1c289.appspot.com",
  messagingSenderId: "169452717846",
  appId: "1:169452717846:web:e85bd7dfee6ff7747b3237",
  measurementId: "G-55RXG233ZN"
};

export const stripePromise = loadStripe(
  'pk_test_51JeYV4CIojHGPyOMh8WUD2Op4JiIpHTPZcmGraY0dhmQqXlwQDGxGP9zNVvZAdA0kjZza3342RewMuEUsOpBMR6K00iUCsyhe7'
);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
