import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PetDetailsPage from "./pages/PetDetailsPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/:id" element={<PetDetailsPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
