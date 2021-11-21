import logo from "./media/Vector.svg";
import "./App.css";
import home from "./media/home.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stack,
  Nav,
  Row,
  Card,
  blockquote,
  style,
  ListGroup,
} from "react-bootstrap";
import * as FiIcons from "react-icons/fi";
import { React, Component } from "react";

import obj1 from "./media/OBJECT 1.svg";
import pic from "./media/Ellipse 1.svg";
import pro from "./media/Illustration 1.svg";

function App() {
  return (
    <div className="App">
      <div className="leftgrid" class="card" style={{ width: "20rem" }}>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="stringle"> Stringle </h2>
        </div>
        <div className="leftnav">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="col" href="/home">
              <Row>
                <p className="barname">
                  <FiIcons.FiHome size="30px" className="leftlogo" />
                  Dashboard
                </p>
              </Row>
            </Nav.Link>
            <Nav.Link className="col" className="col" eventKey="classes">
              <p className="barname">
                <FiIcons.FiFolder size="30px" className="leftlogo" />
                Classes
              </p>
            </Nav.Link>
            <Nav.Link className="col" eventKey="resources">
              <p className="barname">
                <FiIcons.FiBook size="30px" className="leftlogo" />
                Resources
              </p>
            </Nav.Link>
            <Nav.Link className="col" eventKey="learning-plan">
              <p className="barname">
                <FiIcons.FiCalendar size="30px" className="leftlogo" />
                Learning Plan
              </p>
            </Nav.Link>
            <Nav.Link className="col" eventKey="chat">
              <p className="barname">
                <FiIcons.FiMessageCircle size="30px" className="leftlogo" />
                Chat
              </p>
            </Nav.Link>
            <Nav.Link className="col" eventKey="settings">
              <p className="barname">
                <FiIcons.FiSettings size="30px" className="leftlogo" />
                Settings
              </p>
            </Nav.Link>
          </Nav>
          <img src={pro} style={{ marginLeft: "100px" }} />
          <p
            style={{
              fontFamily: "poppins",
              margin: "50px",
              textAlign: "center",
            }}
          >
            Upgrade to <b>Pro</b> for more resource
          </p>
          <button
            type="button"
            class="btn btn-primary"
            style={{
              marginLeft: "110px",
              width: "100px",
              height: "50px",
              borderRadius: "50px ",
            }}
          >
            <p style={{ fontFamily: "poppins", marginTop: "05px" }}>Upgrade</p>
          </button>
        </div>
      </div>
      <div className="centergrid">
        <div style={{ display: "grid" }}>
          <div className="date">
            <h3 style={{ fontFamily: "poppins" }}> Date </h3>
          </div>
          <div>
            <Card className="top-card">
              <Card.Body className="topcarditem">
                <Card.Title style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "#FF808B",
                      fontFamily: "poppins",
                      textAlign: "left",
                      fontWeight: "regular",
                    }}
                  >
                    Welcome back Anna!
                  </p>
                  <br />
                  <img src={obj1} className="top-pic" />
                </Card.Title>
                <div className="par">
                  <p
                    style={{
                      color: "#000000",
                      fontFamily: "poppins",
                      textAlign: "left",
                    }}
                  >
                    You’ ve learned 80 % of your goal this week!
                  </p>
                  <p
                    style={{
                      color: "#000000",
                      fontFamily: "poppins",
                      textAlign: "left",
                    }}
                  >
                    Keep it up and improve your results!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <div style={{ display: "-webkit-inline-flex" }}>
              <Card
                style={{
                  width: "25rem",
                  marginLeft: "50px",
                  marginTop: "200px",
                }}
              >
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div
                      style={{
                        float: "left",
                        margin: "5px",
                        fontSize: "17",
                        fontWeight: "bold",
                      }}
                    >
                      <p>Latest results</p>
                    </div>
                    <div>
                      <p
                        style={{
                          float: "right",
                          margin: "5px",
                          fontSize: "17",
                          fontWeight: "bold",
                        }}
                      >
                        More ->
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ borderBottomColor: "black" }}>
                    <div style={{ display: "flex" }}>
                      <p className="result-text">
                        <b style={{ color: "#000" }}>Unit 5 </b>- Technology
                      </p>
                      <div
                        class="progress"
                        style={{
                          height: "10px",
                          width: "100px",
                          display: "flex",
                          marginLeft: "50px",
                          marginTop: "10px",
                          marginRight: "10px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <p
                        style={{
                          color: "#FF808B",
                          fontFamily: "poppins",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "5px",
                        }}
                      >
                        25%
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ borderBottomColor: "black" }}>
                    <div style={{ display: "flex", marginRight: "10px" }}>
                      <p className="result-text">
                        <b style={{ color: "#000" }}>Unit 12 </b>- Ecology
                      </p>
                      <div
                        class="progress"
                        style={{
                          height: "10px",
                          width: "100px",
                          display: "flex",
                          marginLeft: "65px",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="44"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "44%" }}
                        ></div>
                      </div>
                      <p
                        style={{
                          color: "#5E81F4",
                          fontFamily: "poppins",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "5px",
                        }}
                      >
                        44%
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ borderBottomColor: "black" }}>
                    <div style={{ display: "flex" }}>
                      <p className="result-text">
                        <b style={{ color: "#000" }}>Unit 9 </b>-Real Estate
                      </p>
                      <div
                        class="progress"
                        style={{
                          height: "10px",
                          width: "100px",
                          display: "flex",
                          marginLeft: "57px",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <p
                        style={{
                          color: "#5E81F4",
                          fontFamily: "poppins",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "5px",
                        }}
                      >
                        40%
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ borderBottomColor: "black" }}>
                    <div style={{ display: "flex" }}>
                      <p className="result-text">
                        <b style={{ color: "#000" }}>Unit 8 </b>- Education
                      </p>
                      <div
                        class="progress"
                        style={{
                          height: "10px",
                          width: "100px",
                          display: "flex",
                          marginLeft: "60px",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                      <p
                        style={{
                          color: "#FF808B",
                          fontFamily: "poppins",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "5px",
                        }}
                      >
                        15%
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ borderBottomColor: "black" }}>
                    <div style={{ display: "flex" }}>
                      <p className="result-text">
                        <b style={{ color: "#000" }}>Unit 16 </b>-Job Market
                      </p>
                      <div
                        class="progress"
                        style={{
                          height: "10px",
                          width: "100px",
                          display: "flex",
                          marginLeft: "48px",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <p
                        style={{
                          color: "#5E81F4",
                          fontFamily: "poppins",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "5px",
                        }}
                      >
                        75%
                      </p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <div
                class="card"
                style={{
                  width: "390px",
                  height: "21rem",
                  marginLeft: "10px",
                  marginTop: "200px",
                }}
              >
                <div class="card-body">
                  <div style={{ display: "flex" }}>
                    <div>
                      <b style={{ position: "sticky" }}>
                        Time Spent on Learning
                      </b>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ position: "sticky", marginLeft: "50px" }}>
                        Last Week
                      </p>
                      <FiIcons.FiChevronDown
                        style={{ margin: "4px" }}
                      ></FiIcons.FiChevronDown>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Mon
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%", backgroundColor: "#FF808B" }}
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          class="progress-bar "
                          role="progressbar"
                          style={{ width: "30%", backgroundColor: "#5E81F4" }}
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          class="progress-bar "
                          role="progressbar"
                          style={{ width: "20%", backgroundColor: "#4D4CAC" }}
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Tue
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "15%", backgroundColor: "#FF808B" }}
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "70%", backgroundColor: "#4D4CAC" }}
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Wed
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "15%", backgroundColor: "#4D4CAC" }}
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Thu
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%", backgroundColor: "#4D4CAC" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%", backgroundColor: "" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Fri
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "100%", backgroundColor: "#C8C9E9" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Sat
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "100%", backgroundColor: "#4D4CAC" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div style={{ maxWidth: "50px" }}>
                      <p
                        style={{
                          fontFamily: "poppins",
                          color: "#A2A2C2",
                          fontSize: "14",
                          marginLeft: "9px",
                          textAlign: "left",
                        }}
                      >
                        Sun
                      </p>
                      <div
                        class="progress"
                        style={{
                          transform: "rotate(-90deg)",
                          width: "150px",
                          marginTop: "100px",
                          marginLeft: "-50px",
                        }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "100%", backgroundColor: "#FF808B" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#FF808B",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                  <p
                    style={{
                      margin: "5px",
                      fontFamily: "poppins",
                      fontSize: "14px",
                    }}
                  >
                    Vocabulary
                  </p>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#4D4CAC",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                  <p
                    style={{
                      margin: "5px",
                      fontFamily: "poppins",
                      fontSize: "14px",
                    }}
                  >
                    Grammar
                  </p>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#5E81F4",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                  <p
                    style={{
                      margin: "5px",
                      fontFamily: "poppins",
                      fontSize: "14px",
                    }}
                  >
                    Listening
                  </p>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#C8C9E9",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                  <p
                    style={{
                      margin: "5px",
                      fontFamily: "poppins",
                      fontSize: "14px",
                    }}
                  >
                    Writing
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div
            style={{
              fontFamily: "poppins",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            <div style={{ float: "left" }}>
              <p style={{ marginLeft: "50px", marginTop: "20px" }}>
                Your Courses
              </p>
            </div>
            <div style={{ float: "right" }}>
              <p style={{ marginTop: "20px" }}>More -></p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              class="card"
              style={{
                backgroundColor: "#4D4CAC",
                height: "5rem",
                width: "15rem",
                marginLeft: "60px",
                borderRadius: "20px",
                marginBottom: "25px",
                padding: "5px",
                alignItems: "start",
                display: "grid",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#6867B8",

                  borderRadius: "10px",
                  margin: "10px",
                  float: "left",
                }}
              >
                <p
                  className="cl"
                  style={{
                    margin: "10px",
                    fontFamily: "poppins",
                    fontSize: "17px",
                    fontWeight: "600px",
                    color: "#FEFEFE",
                  }}
                >
                  B2
                </p>
              </div>
              <div
                style={{
                  float: "right",
                  marginTop: "-60px",
                  marginLeft: "70px",
                  color: "#C9C8E5",
                  fontWeight: "600px",
                  fontFamily: "poppins",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                Business English
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Grammar ->
                </p>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "#9698D6",
                height: "5rem",
                width: "15rem",
                marginLeft: "60px",
                borderRadius: "20px",
                marginBottom: "25px",
                padding: "5px",
                alignItems: "start",
                display: "grid",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#A6A7DC",

                  borderRadius: "10px",
                  margin: "10px",
                  float: "left",
                }}
              >
                <p
                  className="cl"
                  style={{
                    margin: "10px",
                    fontFamily: "poppins",
                    fontSize: "17px",
                    fontWeight: "600px",
                    color: "#FEFEFE",
                  }}
                >
                  B2
                </p>
              </div>
              <div
                style={{
                  float: "right",
                  marginTop: "-60px",
                  marginLeft: "70px",
                  color: "#FEFEFE",
                  fontWeight: "600px",
                  fontFamily: "poppins",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                Common English
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Phrasal Verbs ->
                </p>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "#FF808B",
                height: "5rem",
                width: "15rem",
                marginLeft: "60px",
                borderRadius: "20px",
                marginBottom: "25px",
                padding: "5px",
                alignItems: "start",
                display: "grid",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#FF939C",

                  borderRadius: "10px",
                  margin: "10px",
                  float: "left",
                }}
              >
                <p
                  className="cl"
                  style={{
                    margin: "10px",
                    fontFamily: "poppins",
                    fontSize: "17px",
                    fontWeight: "600px",
                    color: "#FEFEFE",
                  }}
                >
                  C1
                </p>
              </div>
              <div
                style={{
                  float: "right",
                  marginTop: "-60px",
                  marginLeft: "70px",
                  color: "#FEFEFE",
                  fontWeight: "600px",
                  fontFamily: "poppins",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                Business Spanish
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Vocabulary ->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightgrid">
        <div
          style={{
            marginTop: "50px",
            fontFamily: "poppins",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          <p style={{ float: "left", marginLeft: "20px" }}>Logout</p>
          <FiIcons.FiLogOut
            style={{ float: "right", marginRight: "-70px", marginTop: "2px" }}
          />
        </div>
        <div style={{ borderRadius: "50%" }}>
          <img src={pic} alt="avatar" className="profilepic" />
          <div
            style={{
              marginLeft: "70px",
              fontFamily: "poppins",
              width: "150px",
            }}
          >
            <p>
              <b>Sadia Tasnim</b>
            </p>
            <p style={{ color: "#A2A2C2" }}>student</p>
          </div>
          <div>
            <div
              style={{ display: "flex", marginLeft: "10px", marginTop: "30px" }}
            >
              <div
                style={{
                  backgroundColor: "#F5F5F7",
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    margin: "15px",
                    fontFamily: "poppins",
                    fontWeight: "500",
                  }}
                >
                  B2
                </p>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    fontFamily: "poppins",
                  }}
                >
                  English
                </p>
                <p
                  style={{
                    fontFamily: "poppins",
                    fontSize: "12px",
                    color: "#A2A2C2",
                    marginTop: "-10px",
                  }}
                >
                  High Intermediate
                </p>
              </div>
            </div>
            <div
              class="progress"
              style={{
                marginLeft: "20px",
                width: "100px",
                marginLeft: "20px",
                overflow: "auto",
                height: "5px",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div
              style={{ display: "flex", marginLeft: "10px", marginTop: "30px" }}
            >
              <div
                style={{
                  backgroundColor: "#F5F5F7",
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    margin: "15px",
                    fontFamily: "poppins",
                    fontWeight: "500",
                  }}
                >
                  C1
                </p>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    fontFamily: "poppins",
                  }}
                >
                  Spanish
                </p>
                <p
                  style={{
                    fontFamily: "poppins",
                    fontSize: "12px",
                    color: "#A2A2C2",
                    marginTop: "-10px",
                  }}
                >
                  Advanced
                </p>
              </div>
            </div>
            <div
              class="progress"
              style={{
                marginLeft: "20px",
                width: "100px",
                marginLeft: "20px",
                overflow: "auto",
                height: "5px",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <p
            style={{
              float: "left",
              fontFamily: "poppins",
              fontWeight: "600",
            }}
          >
            Reminders
          </p>
          <FiIcons.FiBell
            style={{ float: "right", marginTop: "5px", marginRight: "-70px" }}
          />
        </div>
        <div style={{ fontFamily: "poppins" }}>
          <div
            style={{ marginLeft: "10px", marginTop: "60px", display: "flex" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#FEF2F3",
                borderRadius: "20%",
              }}
            >
              <FiIcons.FiAlertCircle
                style={{ color: "#FF606D", margin: "15px" }}
              />
            </div>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>
              Eng - Vocabulary test
            </p>
          </div>
          <div
            style={{ marginLeft: "10px", marginTop: "20px", display: "flex" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#EEF2FD",
                borderRadius: "20%",
              }}
            >
              <FiIcons.FiMail style={{ color: "#6083F4", margin: "15px" }} />
            </div>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>
              Eng - Send homework
            </p>
          </div>
          <div
            style={{ marginLeft: "10px", marginTop: "20px", display: "flex" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#EEF2FD",
                borderRadius: "20%",
              }}
            >
              <FiIcons.FiMail style={{ color: "#6083F4", margin: "15px" }} />
            </div>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>
              Spanish - Send essay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
