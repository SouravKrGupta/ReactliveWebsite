
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users'
import Footer from './Components/Footer'
import React,{Component} from 'react'


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Navbar />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    )
  }
}
