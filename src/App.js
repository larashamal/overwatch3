import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import OverwatchHero from "./components/OverwatchHero/OverwatchHero";
import './App.css';

function App() {
  return (
    <div className="app">
    App
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/heroes/:heroID" element={<OverwatchHero />} />
  <Route element={<PageNotFound />} />
</Routes>
    </div>
  );
}

export default App;
