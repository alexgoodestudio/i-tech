import React from "react";
import ComputerImage from "../components/ComputerImage"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Subscribe(){
    return(
        <div className="SubscribePage">
        <Row>
            <Col>
            
                <h2 className="subscribeheader">Subscribe.</h2>
                <p className="subscribeparagraph">If you are looking for a reliable and efficient way to manage your business expenses and operations, subscribing to our database company is the way to go. Our team specializes in logging company expenses and providing real-time status updates, so you can gain better visibility into your financial life and make more informed decisions.
                                                  Our comprehensive solutions are designed to cater to businesses of all sizes, and with our expertise in managing finances, we can help you save time and money. Our team of experts understands the importance of managing finances, and we are dedicated to providing top-notch services that will help optimize your operation.
                                                  By subscribing to our database company, you can have peace of mind knowing that your business expenses and operations are being handled by professionals who are committed to delivering excellent results.</p>
                

            </Col>
            <Col><ComputerImage/></Col>
            </Row>
        </div>
        )
    }