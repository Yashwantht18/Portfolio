import React, { Component } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Project from './components/Project';
import Header from './components/Header';
import About from './components/About'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                
                <Route path="/skills" element={<Skills />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </div>
    );
}

export default App;

