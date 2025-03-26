import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import GlobalStyle from './style/globalStyle'

//colocar sempre dentro do elemento pai
//<></> é fragment pra só cumprir 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<> 
  <Routes /> <GlobalStyle />
</>
);

