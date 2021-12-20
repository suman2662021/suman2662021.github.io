import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Developer Intern [ Green Canvas ]"
              date="June 2021 - September 2021"
              content={[
                "Built their website and landing page from scratch and deployed it.",
                "Added multiple features to the website and improved it.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer Intern [ SILOP SMART AUTOMATION TECHNOLOGIES pvt. limited ]"
              date="Feb 2021 - May 2021"
              content={[
                "Improved interface of their existing website.",
                "Built landi.ng pages for various products"
              ]}
            />
            
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Army Public School, Janglot (Xth STD) "
              date="2016 - 2017"
              content={[`CGPA : 8.8`]}
            />
            <Resumecontent
              title="Army public school, Sukna (XIIth STD)"
              date="2018 - 2019"
              content={[`Percentage %: 80`]}
            />
            <Resumecontent
              title="Btech in computer science and engineering [Calcutta institute of engineering and management]"
              date="2018 - Present"
              content={[`CGPA: 8.51  (Till 6th Sem)`]}
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
