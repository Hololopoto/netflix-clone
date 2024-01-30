import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

//style
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer text-white flex-col flex mb-10 ">
      <div className="icons-footer flex flex-row cursor-pointer justify-around w-1/4 ml-20 mr-0 ">
        <FaFacebookF style={{ marginRight: "10px", fontSize: "23px" }} />
        <FaInstagram style={{ marginRight: "10px", fontSize: "23px" }} />
        <FaTwitterSquare style={{ marginRight: "10px", fontSize: "23px" }} />
        <FaYoutube style={{ marginRight: "10px", fontSize: "23px" }} />
      </div>
      <div className=" flex justify-between cursor-pointer w-[80%] mx-auto pt-5">
        <div className="left flex flex-col gap-1 ">
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
        <div className="middle-left flex flex-col gap-1 ">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Provisions</p>
        </div>
        <div className="middle-right flex flex-col gap-1 ">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Provisions</p>
        </div>
        <div className="right flex flex-col gap-1 ">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
    </div>
  );
}
