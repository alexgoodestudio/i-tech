import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function Banner(){
    return(
        <div className="background ">
            <h3 className="container h3"><span className="emphasizeWord2">I</span>nventory your company's <span className='emphasizeWord'>Technology</span></h3>
            <p className="container bannerParagraph"> Welcome to our database company! We specialize in logging all technologies provided to employees, including the date of distribution, brand and model, price, and the employee who received the device. With our services, you can easily track your expenses towards your tech products and gain better visibility over your inventory. Our platform can help you report data to your insurance provider, assist with tax season filings, and account for the whereabouts of your company's devices. Whether you're a small business or a large enterprise, our database solutions can streamline your technology management and help you make informed decisions. </p>
        </div>
        );
    }