import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {GrMail} from 'react-icons/gr'
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Suman Choubey</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/suman2662021"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/suman-choubey-630949219/"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:sumanbale1110@gmail.com"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GrMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+917872548746"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
