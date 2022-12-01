import { useContext } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeContext } from "./context/themeprovider"
import Courses from './pages/courses';
import About from './pages/about';
import Detail from './pages/detail';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.theme === "light" ? "bg-gray-100 " : "bg-black"}>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
