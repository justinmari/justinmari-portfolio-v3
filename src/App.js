import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App(props) {
  return (
    <div className="App">
      <div className='App-div'>
        <Navbar />
        <div className='App-page'>
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/about' element={<AboutPage />}></Route>
            <Route exact path='/projects' element={<ProjectsPage projects={props.projects} />}></Route>
            <Route exact path='/projects/:id' element={<ProjectPage projects={props.projects} />}></Route>
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
