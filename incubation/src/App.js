import React  from 'react';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './app.css'
import ApplicationPage from './pages/Application';
import Homepage from "./pages/Homepage";
import AdminHome from './pages/AdminHome';
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SlotPage from './pages/SlotPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/signup' element={ <Signup/>}/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/' element={<Homepage/>} />
            <Route path='/register' element={<ApplicationPage/>} />
            <Route path='/admin' element={<AdminHome/>} />
            <Route path='/slot' element={<SlotPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
