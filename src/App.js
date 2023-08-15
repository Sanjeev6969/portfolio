import {Routes, Route } from 'react-router-dom';
import './App.css';
import Titlebar from './Components/nav';
import Home from './Components/home';
import About from './Components/About';
import Qualification from './Components/qualification';
import Experience from './Components/experience';
import Projects from './Components/projects';

function App() {
  return (
    <>
    <Titlebar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/qualification' element={<Qualification/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
    </>);
}

export default App;


