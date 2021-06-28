import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Components/Search';
import Result from './Components/Result';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Result />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
