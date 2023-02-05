import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadData } from './services/dataService'

loadData().then(data => {
  console.log(data.projects);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App projects={data.projects} />
      </BrowserRouter>
    </React.StrictMode>
  );
});
