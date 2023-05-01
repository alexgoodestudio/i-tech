import React from "react";
import Footer  from "../components/CardFooter";
import 'bootstrap/dist/css/bootstrap.css';
import Banner from "../components/Banner";
import ITech from "../components/ITech";

export default function Home(){
    return(
        <>
            
                <Banner/>
                <div className="HomePage kenburns-bottom-right"></div>
                <ITech className="container tracking-in-expand"/>
                <Footer className="footer"/>
       
        </> 
    )}
