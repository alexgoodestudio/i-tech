import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/index.css"
import SubscribeButton from "./SubscribeButton";



export default function Banner(){
    return(
        <Row>
            
            <Col></Col>
            <Col >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <p className="paragraphbanner ms-1" > Welcome to our database company that specializes in logging company expenses and providing real-time status updates of your business operations. Our team's goal is to help you gain better visibility into your financial life, so you can make more informed decisions and optimize your operation. With our comprehensive solutions, you can </p>
            </Col>
                <Col>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <p className="paragraphbanner ms-1">
                    save time and money no matter what size your business is. We have a team of experts who understands the importance of managing finances, so we're dedicated to providing the best possible service for you. Contact us today to learn more about our services!
                    </p>
                    <SubscribeButton className="HomeSButton"/>

                </Col>
        </Row>
        );
    }