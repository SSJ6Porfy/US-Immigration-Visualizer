import React from "react";
import ReactDOM from 'react-dom';
import Root from "./root";


document.addEventListener('DOMContentLoaded', () => {
  const map = document.getElementById('map');
  ReactDOM.render(<Root/>,  map);
});
