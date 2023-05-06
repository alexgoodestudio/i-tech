import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Banner from "../components/Banner";
import ITech from "../components/ITech";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/index.css"


export default function Home(){
    return(
        <>
        <Row>
        
        </Row>


        <Row >
           
                    <Col className="scoot" >
                        <div className="HomePage kenburns-bottom-right"></div>
                        <ITech className=" tracking-in-expand"/>                   
                    </Col>
           
                <Col sm={6}>
                     <div className="HomeBanner ">
                            <Banner className="banner"/>
                    </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        
                        
        </Row>
               
       
        </> 
    )}
