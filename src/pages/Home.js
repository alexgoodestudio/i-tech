import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Banner from "../components/Banner";
import ITech from "../components/ITech";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubscribeButton from "../components/SubscribeButton";
import "../css/index.css"


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
        </Row>
            <Row>
            <Col></Col>
            
                    <Col >
                        <div className="HomePage kenburns-bottom-right"></div>
                        <ITech className="tracking-in-expand homeheader"/>
                        <div className="HomeBanner">
                            <Banner/>
                            <SubscribeButton className="HomeSButton"/>
                        </div>
                 </Col>
                <Col></Col>
            </Row>
               
       
        </> 
    )}
