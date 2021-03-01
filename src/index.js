import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PET_DATA from './data.json'

ReactDOM.render(<App pets={PET_DATA} />, document.getElementById('root'));