import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './Name';
import Parent from './components/ContainerSample';
import CounterCall from './components/Callback';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Parent/>
    <CounterCall/>
  </React.StrictMode>
);

reportWebVitals();
