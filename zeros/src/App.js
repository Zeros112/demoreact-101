//import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
//import './App.css';
//import IM from "./assets/images.jpg";
import Home from "./pages/Home";
import Header from './Components/Header';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element ={<Home />}></Route>
      <Route path="/sign-up" element ={<Signup />}></Route>
      <Route path="/sign-in" element ={<Signin />}></Route>
      <Route path='/profile' element ={<Profile />}></Route>
    </Routes>
    </>
    /*<div className="App">
      <header className="App-header">
       <img src={IM} className="App-logo" alt="IM" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Atom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
