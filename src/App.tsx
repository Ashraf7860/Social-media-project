import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { CreatePost } from "./pages/create-post/create-Post";
import {Navbar} from "./components/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/create-Post" element={<CreatePost />}/> 

          </Routes>
        </Router>
      </div>
  );
};

export default App;
