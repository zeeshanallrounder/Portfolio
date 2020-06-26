import React, { Component } from "react";
import "../Components/Navigation.css";
import model from "../images/model.png";
import about from "../images/about-img.png"

class Navigation extends Component{
    render(){
return (
  <div className="body">
    <section>
      <div className="text-container">
        <p>Assalam o Alaikum</p>
        <p>I'M Zeeshan</p>
        <p>
          I am <b>Web Developer</b> & <b>UI Designer</b>.
        </p>
        <a href="/Contact">
          <button className="hire-btn">Hire Me</button>
        </a>
        <a href="/Resume">
          <button className="down-cv">Download Resume</button>
        </a>
      </div>
      <img src={model} className="model" alt="model" />
    </section>
    {/* <!-----------About-----> */}
    <div className="about-container">
      <img src={about} className="about" alt="about" />
      <div className="about-text">
        <p>About Me</p>
        <p>Web Developer & UI Designer</p>
        <p>
          Hello, My name is Zeeshan Siddique. I am a Website developer as wel as
          an UI(Web & Mobile Application) Designer. If you have any project or
          you want to make a website for your business, contact me. I am a great
          developer and designer i make your website as soon as possible. You
          really like my work, if you don't i change the design or data
          according to you until you get satisfactory result.
        </p>
        <p>
          I work with my Heart and that's why i gave satisfactory and awesome
          results or Projects to anyone. The key role of my work is time
          management. i finish my project within the given time.{" "}
        </p>
        <a href="/Contact">
          <button>Hire Me</button>
        </a>
        <a href="/Resume">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
    <div className="services">
      <div className="services-text">
        <p>Services</p>
        <p>Services Required</p>
        <p>
          {" "}
          If you have any project or you want to make a website for your
          business, contact me. I am a great developer and designer i make your
          website as soon as possible. You really like my work, if you don't i
          change the design or data according to you until you get satisfactory
          result.
        </p>
      </div>
      <div className="box-container">
        <div className="box-1">
          <span>1</span>
          <p className="heading">Web Designing</p>
          <p className="details">
            New & Fresh websites Designs.If you have any project or you want to
            make a website Designfor your business, contact me. I make your
            website Design according to you as soon as possible.
          </p>
          <a href="/Contact">
            <button className="contt">Contact Me</button>
          </a>
        </div>
        <div className="box-2">
          <span>2</span>
          <p className="heading">Web Development</p>
          <p className="details">
            New and owesome websites for new generation.If you have any project
            or you want to make a website for your business, contact me. I am a
            great developer i make your website as soon as possible.
          </p>
          <a href="/Contact">
            <button className="contt">Contact Me</button>
          </a>
        </div>
        <div className="box-3">
          <span>3</span>
          <p className="heading">UI Design</p>
          <p className="details">
            Mobile applications design with alot of new functionality.If you
            have any project or you want to make a website or Application Design
            for your business, contact me. I make your website as soon as
            possible.
          </p>
          <a href="/Contact">
            <button className="contt">Contact Me</button>
          </a>
        </div>
      </div>
    </div>

    <div className="services">
      <div className="services-text">
        <p>Projects</p>
        <p>Projects I Do:</p>
        <p>
          {" "}
          If you have any project or you want to make a website for your
          business, contact me. I am a great developer and designer i make your
          website as soon as possible. You really like my work, if you don't i
          change the design or data according to you until you get satisfactory
          result.
        </p>
      </div>
      <div className="box-container">
        <div className="box-1">
          <span>1</span>
          <p className="heading">Ecommerce(Panda)</p>
          <p className="details">
            An Ecommerce react.js website connected with firebase.You can sell any thing with alot of categories and functionality buto not dynamic.
          </p>
          <a href="https://github.com/zeeshanallrounder/React">
            <button className="contt">Read More</button>
          </a>
        </div>
        <div className="box-2">
          <span>2</span>
          <p className="heading">UI DESIGN</p>
          <p className="details">
            UI Design of Application and as well as website of ecommerce with prototyping and with alot of designing according to this generation.
          </p>
          <a href="https://github.com/zeeshanallrounder/Adobe-XD">
            <button className="contt">Read Me</button>
          </a>
        </div>
        <div className="box-3">
          <span>3</span>
          <p className="heading">Services Website</p>
          <p className="details">
            A services website using HTML/CSS with working pages and links..Also connected with firebase in near future for someone.
          </p>
          <a href="https://github.com/zeeshanallrounder/Services-Project">
            <button className="contt">Read More</button>
          </a>
        </div>
      </div>
    </div>

    <div className="contact-me">
      <p>If You Have Any Project In Your Mind.</p>
      <a href="/Contact">
        <button className="cont">Contact Me</button>
      </a>
    </div>
    <footer>
      <p>Follow or Contact</p>
      <p>
        I make Projects as soon as possible. You really like my work. If you
        don't i change the<br></br>
        <span className="cent">
          project according to you until you like. I gave you satisfactory
          result
        </span>
      </p>
      <div className="social-icons">
        <a href="https://www.facebook.com/zsiddique980">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/zsiddique980/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/zeeshan-siddique-ab375a197">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="copyright">Copyright By Zeeshan Siddique(2020)</p>
    </footer>

    <div className="a-social-b">
      <a href="https://www.facebook.com/zsiddique980">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/zsiddique980/">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/zeeshan-siddique-ab375a197">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
);
    }
}
  

export default Navigation;
