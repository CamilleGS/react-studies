import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle'

//colocar sempre dentro do elemento pai
//<></> é fragment pra só cumprir 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<> 
  <App /> <GlobalStyle />
</>
);

