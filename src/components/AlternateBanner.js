import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AlternateBanner(){
    return(
        <Row>
            
            <Col className="Altbackground">
            <p className="altpara "> Our team's goal is to help you <span className="empha">gain better visibility into your financial life</span>, so you can make more informed decisions and optimize your operation. With our comprehensive solutions, you can save time and money no matter what size your business is. We have a team of experts who understands the importance of managing finances, so we're dedicated to providing the best possible service for you. </p>
            </Col>
            <Col></Col>
            
        </Row>
        );
    }