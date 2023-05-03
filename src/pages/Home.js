import React from "react";
import Footer  from "../components/CardFooter";
import 'bootstrap/dist/css/bootstrap.css';
import Banner from "../components/Banner";
import ITech from "../components/ITech";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubscribeButton from "../components/SubscribeButton";

export default function Home(){
    return(
        <>
        <Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </Row>
            <Row>
            <Col></Col>
            
                    <Col >
                        <div className="HomePage kenburns-bottom-right"></div>
                        <ITech className="tracking-in-expand"/>
                        <div className="HomeBanner">
                            <Banner/>
                            <SubscribeButton/>
                        </div>
                </Col>
                
                <Col></Col>
                <Col></Col>
            </Row>
                <Footer className="footer"/>
       
        </> 
    )}
