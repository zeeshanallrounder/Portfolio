import React, { Component } from "react";
import "../Components/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-container">
          <div>
            <h1 className="con-h1">Get in touch</h1>
            <form id="contactForm">
              <input autoFocus type="text" name="fname" placeholder="Name" id="userName" />
              <br />
              <br></br>
              <input type="text" name="Email" placeholder="Email" id="userEmail"/>
              <br />
              <br></br>
              <input type="text" name="Subject" placeholder="Subject" id="userSubject"/>
              <br />
              <br></br>
              <input
                type="text"
                name="Message"
                placeholder="Message"
                className="msg"
                id="userMsg"
              />
              <br />
              <br></br>
              <button type="submit" className="email" id="submit">
                Send Email
              </button>
            </form>
          </div>
        </div>
        <footer>
          <p>Follow or Contact</p>
          <p>
            I make Projects as soon as possible. You really like my work. If you
            don't i change the<br></br>{" "}
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
          <div className="phone">
            <h4 className="head">
              <b>Phone:+92-323-42-96-74-1 </b>
            </h4>
            <h4>
              <i>Modeltown Lahore,Pakistan</i>
            </h4>
          </div>
          <p className="copyright">Copyright By Zeeshan Siddique(2020)</p>
        </footer>
      </div>
    );
  }
}
export default Contact;
