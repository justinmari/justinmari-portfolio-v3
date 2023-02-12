import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { dataService } from './services/dataService';


init();

async function init() {

  const data = await loadData();

  console.log(data);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          projects={data.projects}
          resumeData={data.resumeData}
          logoBase64Image={data.logoBase64Image}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}


async function loadData() {
  return await dataService.loadData();
}
