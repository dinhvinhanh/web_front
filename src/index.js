import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './containers/User/User';
import SearchBar from './containers/SearchBar/SearchBar';

ReactDOM.render(
  <React.StrictMode>
    <SearchBar/>
  </React.StrictMode>,
  document.getElementById('root')
);
