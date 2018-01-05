import React from 'react';
import ReactDOM from 'react-dom';
import Responsive from 'react-responsive';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Background from './utils/background.png';

// const Desktop = props => <Responsive {...props} minWidth={992} />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

ReactDOM.render(
  <div id='background' style={{backgroundImage: `url(${Background})`}}>
    {/* <Desktop><App /></Desktop>
    <Tablet><App /></Tablet> */}
    <Mobile><App mobile/></Mobile>
    <Default><App /></Default>
  </div>,
document.getElementById('root')); registerServiceWorker();
