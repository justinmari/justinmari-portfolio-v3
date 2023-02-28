import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { dataService } from './services/dataService';

init();

async function init() {

  const data = await dataService.loadData();

  console.log(data);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App
        projects={data.projects}
        resumeData={data.resumeData}
        logoBase64Image={data.logoBase64Image}
      />
    </React.StrictMode>
  );
}
