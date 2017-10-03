import React from "react";
import ReactDOM from 'react-dom';
import Root from "./root";
import fetchData from "./data_actions";


document.addEventListener('DOMContentLoaded', () => {
  const map = document.getElementById('map');
  ReactDOM.render(<Root/>,  map);
  window.fetchData = fetchData;
});
