import React from 'react';
import ReactDOM from 'react-dom';
import Responsive from 'react-responsive';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Background from './utils/background.png';

const Small = props => <Responsive {...props} maxWidth={1023} />;
const Large = props => <Responsive {...props} minWidth={1024} />;

ReactDOM.render(
  <div id='background' style={{backgroundImage: `url(${Background})`}}>
    <Small><App small/></Small>
    <Large><App /></Large>
  </div>,
document.getElementById('root')); registerServiceWorker();
