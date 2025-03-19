import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/home';
import GlobalStyle from './globalStyle'

//colocar sempre dentro do elemento pai
//<></> é fragment pra só cumprir 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<> 
  <Home /> <GlobalStyle />
</>
);

