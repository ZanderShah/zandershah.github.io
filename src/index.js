import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Background from './utils/x.png';

ReactDOM.render(<div id='background' style={{backgroundImage: `url(${Background})`}}><App /></div>, document.getElementById('root')); registerServiceWorker();
