import React, { Component } from "react";
import "../Components/Resume.css";
import res from "../images/resume.jpg";

class Resume extends Component {
  render() {
    return (
      <div className="bodyy">
        <div className="wrapper">
          <div className="resume">
            <div className="left">
              <div className="img_holder">
                <img src={res} alt="profile-img" />
              </div>
              <div className="contact_wrap pb">
                <div className="title">Contact</div>
                <div className="contact">
                  <ul>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div className="text">92 323 4296741</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div className="text">zsiddique980@gmail.com</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-map-signs"></i>
                        </div>
                        <div className="text">
                          H:No. 91 Nawaz Sharif Colony Ferozpur Road,Lahore
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="skills_wrap pb">
                <div className="title">Skills</div>
                <div className="skills">
                  <ul>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fab fa-html5"></i>
                        </div>
                        <div className="text">HTML</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fab fa-css3-alt"></i>
                        </div>
                        <div className="text">CSS</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fab fa-bootstrap"></i>
                        </div>
                        <div className="text">Bootstrap</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fab fa-js"></i>
                        </div>
                        <div className="text">Javascript</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fab fa-react"></i>
                        </div>
                        <div className="text">React.js</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fab fa-wordpress"></i>
                        </div>
                        <div className="text">Wordpress</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-quidditch"></i>
                        </div>
                        <div className="text">UI Design</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <div className="text">Firebase</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hobbies_wrap pb">
                <div className="title">Hobbies</div>
                <div className="hobbies">
                  <ul>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-book-open"></i>
                        </div>
                        <div className="text">Reading</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <div className="text">Coding</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-pencil-ruler"></i>
                        </div>
                        <div className="text">Designing</div>
                      </div>
                    </li>
                    <li>
                      <div className="li_wrap">
                        <div className="icon">
                          <i class="fas fa-headset"></i>
                        </div>
                        <div className="text">Gaming</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="header">
                <div className="name_role">
                  <div className="name">Zeeshan Siddique</div>
                  <div className="role">Web and UI UX Developer</div>
                </div>
                <div className="about">
                  A newly web and UI developer and a zest for solving complex
                  problems. Seeking to use proven project management and design
                  skills to improve quality, cost and time metrics for Web and
                  Designing.
                </div>
              </div>
              <div className="right_inner">
                <div className="exp">
                  <div className="title">Education</div>
                  <div className="exp_wrap">
                    <ul>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2018 - Continue(2021)</div>
                          <div className="info">
                            <p className="info_title">
                              Bachelor of Computer Science
                            </p>
                            <p className="info_cont">
                              Superior University, Lahore
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2016 - 2018</div>
                          <div className="info">
                            <p className="info_title">FSc</p>
                            <p className="info_cont">
                              Punjab Group Of Colleges, Lahore
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2014 - 2016</div>
                          <div className="info">
                            <p className="info_title">Matric</p>
                            <p className="info_cont">
                              SOS Herman Gmeiner School, Lahore
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right_inner">
                <div className="exp">
                  <div className="title">Diplomas</div>
                  <div className="exp_wrap">
                    <ul>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2015</div>
                          <div className="info">
                            <p className="info_title">Computer Course</p>
                            <p className="info_cont">Lahore College, Lahore</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2020</div>
                          <div className="info">
                            <p className="info_title">Graphic Designing</p>
                            <p className="info_cont">Digiskills</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2020</div>
                          <div className="info">
                            <p className="info_title">AutoCad</p>
                            <p className="info_cont">Digiskills</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right_inner">
                <div className="exp">
                  <div className="title">Projects</div>
                  <div className="exp_wrap">
                    <ul>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2019</div>
                          <div className="info">
                            <p className="info_title">
                              Ecommerce Website with Firebase in React
                            </p>
                            <p className="info_contt">
                              <a href="https://github.com/zeeshanallrounder/React">
                                Panda
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2020</div>
                          <div className="info">
                            <p className="info_title">UI Design</p>
                            <p className="info_contt">
                              <a href="https://github.com/zeeshanallrounder/Adobe-XD">
                                UI Design
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="li_wrap">
                          <div className="date">2020</div>
                          <div className="info">
                            <p className="info_title">Simple Service Website</p>
                            <p className="info_contt">
                              <a href="https://github.com/zeeshanallrounder/Services-Project">
                                Services
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
