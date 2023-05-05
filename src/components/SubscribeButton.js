import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function SubscribeButton(){
    return(
        <>
                       
                <div>
                <Link to="/subscribe">
                <Button variant="light " className="HomeSButtton mt-1">Subscribe</Button>
                </Link>
                </div>
       
        </> 
    )}
