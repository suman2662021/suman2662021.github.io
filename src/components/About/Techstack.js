import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiAws,
  DiMysql,
  DiPostgresql
} from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai";
import { FaAws, FaDatabase } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML 5">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title = "Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongodb">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS S3">
        <FaAws />
        <div style={{fontSize: '14px'}}>S3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS EC2">
        <FaAws />
        <div style={{fontSize: '14px'}}>EC2</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS CloudFront">
        <FaAws />
        <div style={{fontSize: '14px'}}>CloudFront</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS SQS">
        <FaAws />
        <div style={{fontSize: '14px'}}>SQS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS RDS">
        <FaAws />
        <div style={{fontSize: '14px'}}>RDS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NestJS">
        <DiNodejs />
        <div style={{fontSize: '14px'}}>NestJS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
