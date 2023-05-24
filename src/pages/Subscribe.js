import React from "react";
import ComputerImage from "../components/ComputerImage"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Subscribe2 from "../components/SubscribeForm";


export default function SubscribePage(){
    return(
        <div className="SubscribePage">
        <Row>
            <Col xs={9}>
            
                <h2 className="subscribeheader empha">Get Started with a Free Trial.</h2>
                <p className="subscribeparagraph">
                                                  If you are looking for a reliable and efficient way to manage your business expenses and operations, subscribing to our database company is the way to go. 
                                                  You can have peace of mind knowing that your business expenses and operations are being handled by professionals who are committed to delivering excellent results.
                                                  By subscribing, we will email you a link to get started with your one month free trial!</p>        
            
                
                                                    <Subscribe2 />
                                                </Col>
                                            <Col><ComputerImage/></Col>
                                        </Row>
                                    </div>
                                    )
                                }