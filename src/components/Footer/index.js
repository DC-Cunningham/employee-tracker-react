import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Footer() {
  return (
    <Row>
      <Col size="12">
        <footer className="footer fixed-bottom text-center full-width">
          <span>© Revolution Research Laboratories 2020</span>
        </footer>
      </Col>
    </Row>
  );
}

export default Footer;
