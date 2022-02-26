/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import "./landingPage.css";
import { GoTriangleRight } from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {MdEmail } from "react-icons/md";
import{Link} from "react-router-dom"
export const LandingPage = () => {
  return (
    <>
      <div className="landingPagetop">
        <h2 className="landing">this is heading</h2>
        <p className="landing-para">this paragraph</p>
      </div>
      <div className="landing-img-div">
        <div className="landing-img">

			<img className="landing-img-img" src="https://ksr-ugc.imgix.net/assets/036/271/019/d58d849038d3fc6222e136ca7a465e28_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1644023106&auto=format&frame=1&q=92&s=f1818ccdb6042569e14c709f6ab91729" />
			<Link to="">
			<div className="landing-button" >
				<GoTriangleRight className="landing-button-icon" />
			</div>
			</Link>
			
			
		</div>
        <div className="landing-img-sec">
			<div className="landing-sec-flex" >
				<div className="landing-sec-flex1" ></div>
				<div className="landing-sec-flex2" ></div>
			</div>
			<p className="landing-sec-p1">USD dolloar</p>
			<p className="landing-sec-p2" >dasd dasd</p>
			<p className="landing-sec-p3" >137</p>
			<p className="landing-sec-p4" >rwer erwer weqrwe</p>
			<p className="landing-sec-p3" >137</p>
			<p className="landing-sec-p4" >rwer erwer weqrwe</p>
			<button className="landing-sec-button" >das sdasd</button>
			<button className="landing-sec-button2">
				<BiBookmark/> Remind me
			</button>
			<BsFacebook className="landing-sec-fb" />
			<BsTwitter className="landing-sec-tw" />
			<MdEmail className="landing-sec-em" />
			<span className="landing-sec-sp" >&lt;/&gt;</span>
			<p className="landing-sec-p5" >asdas dasd sdas dsad sad asd </p>
		</div>
      </div>
	  <div className="landing-info" >
		  <div>dsddf dsddf
			  
		  </div>
		  <div>asdas asdas d</div>
		  <div>asdas asdas d</div>
	  </div>
    </>
  );
};
