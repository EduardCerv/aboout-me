import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="lg" fixed>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
