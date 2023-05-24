import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Banner from "../components/Banner";
import ITech from "../components/ITech";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/index.css"


//      json-server --watch db.json  start server

export default function Home(){
    return(
        <>
        <Row>
            
        </Row>
        <Row >
        
        <div className="HomePage"></div>
                    <Col sm={8}>
                    <ITech/>
                        <div className="HomeBanner ">
                            <Banner className="banner "/>
                        </div>     
                        </Col>
            
                    <Col sm={4}></Col>                      
                </Row>   
                </> 
            )}
