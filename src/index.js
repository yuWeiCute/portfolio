import React from 'react';
import { Suspense } from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// import i18n (needs to be bundled ;))
import './i18n';


ReactDOM.render(
  <Suspense fallback="...is loading">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);
