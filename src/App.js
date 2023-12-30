import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="*" Component={(NotFound)} status={404}/>
      </Routes>
    </BrowserRouter>
  );
  
};

export default App;