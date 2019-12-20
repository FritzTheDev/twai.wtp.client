import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import "@ionic/react/css/ionic.bundle.css";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
