import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import UserDetails from "./components/pages/UserDetails";
import About from "./components/pages/About";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="main-nav" />
        <Container style={{ paddingTop: "4em" }}>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/:uid" element={<UserDetails />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
