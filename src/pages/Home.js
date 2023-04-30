import React from "react";
import Footer  from "../components/CardFooter";
import 'bootstrap/dist/css/bootstrap.css';
import Banner from "../components/Banner";

export default function Home(){
    return(
        <>
                <Banner/>
                <div className="HomePage"></div>
                <div className="footerDiv">
                <Footer className="footer"/>
                </div>
        </> 
    )}