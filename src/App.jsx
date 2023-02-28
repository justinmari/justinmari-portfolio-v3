import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import HeroSection from './sections/HeroSection/HeroSection';

function App(props) {
  return (
    <div className="App">
      <Navbar logoBase64Image={props.logoBase64Image} />
      <HeroSection />
      <div className='App-page container-fluid'>
        <ProjectsSection projects={props.projects} />
      </div>
    </div>
  )
}

export default App;
