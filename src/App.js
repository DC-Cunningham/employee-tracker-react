import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Navbar />
        </Container>
        <Wrapper>
          <Route exact path="/" component={Directory} />
          <Route exact path="/directory" component={Directory} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
