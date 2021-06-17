import React, { Component } from "react";
import "./ControlPanel.css";
import startSvg from "../Styling/start.svg";
import endSvg from "../Styling/end.svg";
import weightpng from "../Styling/one.png";
import stationSvg from "../Styling/station.svg";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
let navLinkClassName = "nav-links";
export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      onClickClear_,
      onClickVisualize_,
      onClickSelect_,
      onClickAddStation_,
      onClickChangeSpeed_,
      onClickClearPath_,
      onClickClearWeight_,
      onClickClearWalls_,
      onClickAddWeight_,
      onClickGenerateMaze_,
      extraNavLinkClassName,
    } = this.props;

    navLinkClassName = "nav-links" + extraNavLinkClassName;

    return (
      <div>
        <Navbar expand="lg" variant="dark" className="logo">
          <Navbar.Brand href="#" className="ml-5">
            <b>PathFindingVisualizer</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav" id="basic-navbar-nav">
            <Nav className="mr-auto col-centered1">
              <NavDropdown
                title={<b className="text-light">Algorithm</b>}
                id="select-algorithm-toggle"
                className={`${navLinkClassName} mr-3`}
              >
                <NavDropdown.Item
                  href="#Dijkstra"
                  onClick={() => onClickSelect_(1)}
                >
                  Dijkstra's Algorithm
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#AStar"
                  onClick={() => onClickSelect_(2)}
                >
                  A* Algorithm
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#DFS" onClick={() => onClickSelect_(3)}>
                  Depth-First Search
                </NavDropdown.Item>
                <NavDropdown.Item href="#BFS" onClick={() => onClickSelect_(4)}>
                  Breadth-First Search
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<b className="text-light">Mazes & Patterns</b>}
                id="maze-generate-toggle"
                className={`${navLinkClassName} mr-3`}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => onClickGenerateMaze_(1)}
                >
                  Recursive Division
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => onClickGenerateMaze_(2)}
                >
                  Basic Random Maze
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => onClickGenerateMaze_(3)}
                >
                  Basic Weight Maze
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => onClickGenerateMaze_(4)}
                >
                  Simple Stair Pattern
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<b className="text-light">Add Weight</b>}
                id="add-weight-toggle"
                className={`${navLinkClassName} mr-3`}
              >
                <NavDropdown.Item
                  href="#weight1"
                  onClick={() => onClickAddWeight_(1)}
                >
                  1
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#weight2"
                  onClick={() => onClickAddWeight_(2)}
                >
                  2
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#weight3"
                  onClick={() => onClickAddWeight_(3)}
                >
                  3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#weight4"
                  onClick={() => onClickAddWeight_(4)}
                >
                  4
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#weight5"
                  onClick={() => onClickAddWeight_(5)}
                >
                  5
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#weight6"
                  onClick={() => onClickAddWeight_(6)}
                >
                  6
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                id="visualise-button"
                variant="outline-primary"
                className="mr-3"
                onClick={() => onClickVisualize_()}
              >
                Visualise
              </Button>
              <Nav.Link
                href="#add"
                className={`${navLinkClassName} mr-3`}
                onClick={() => onClickAddStation_()}
              >
                <b className="text-light" id="station-button">
                  Add Station
                </b>
              </Nav.Link>

              <NavDropdown
                title={<b id="clear" className="text-light">Clear</b>}
                id="clear-toggle"
                className={`${navLinkClassName} mr-3`}
              >
                <NavDropdown.Item
                  href="#clear-board"
                  id="clear-board"
                  onClick={() => onClickClear_()}
                >
                  Clear Board
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#clear-weights"
                  id="clear-weights"
                  onClick={() => onClickClearWeight_()}
                >
                  Clear Weight
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#clear-walls"
                  id="clear-walls"
                  onClick={() => onClickClearWalls_()}
                >
                  Clear Walls
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#clear-path"
                  id="clear-path"
                  onClick={() => onClickClearPath_()}
                >
                  Clear Path
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<b className="text-light">Speed</b>}
                id="select-speed-toggle"
                className={`${navLinkClassName} mr-3`}
              >
                <NavDropdown.Item
                  href="#slow"
                  onClick={() => onClickChangeSpeed_(1.8)}
                >
                  Slow
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#average"
                  onClick={() => onClickChangeSpeed_(1.2)}
                >
                  Average
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#fast"
                  onClick={() => onClickChangeSpeed_(0.6)}
                >
                  Fast
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Navbar bg="white" expand="lg" variant="light">
          <Navbar.Collapse className="nav" id="basic-navbar-nav">
            <Navbar.Brand className="col-centered">
              <img
                alt=""
                src={startSvg}
                width="20"
                height="20"
                className="d-inline-block align-top"
                style={{ marginRight: "10px" }}
              />
              {""}
              <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                {" "}
                Start Node{" "}
              </p>
            </Navbar.Brand>
            <Navbar.Brand>
              <img
                alt=""
                src={endSvg}
                width="20"
                height="20"
                className="d-inline-block align-top"
                style={{ marginRight: "10px" }}
              />{" "}
              <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                {" "}
                Target Node{" "}
              </p>
            </Navbar.Brand>
            <Navbar.Brand>
              <img
                alt=""
                src={stationSvg}
                width="20"
                height="20"
                className="d-inline-block align-top"
                style={{ marginRight: "10px" }}
              />{" "}
              <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                {" "}
                Station Node{" "}
              </p>
            </Navbar.Brand>
            <Navbar.Brand>
            
            <img
                alt=""
                src={weightpng}
                width="20"
                height="20"
                className="d-inline-block align-top"
                style={{ marginRight: "10px" }}
              />{" "}
              <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                {" "}
                Weight Node{" "}
              </p>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className="d-flex flex-row">
                <div
                  className="p-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    outline: "1px solid rgb(175, 216, 248)",
                    backgroundColor: `rgb(255, 255, 255)`,
                    display: "inline-block",
                    marginRight: "10px",
                    borderRadius: "2px",
                  }}
                />
                <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                  {" "}
                  Unvisited Node{" "}
                </p>
              </div>{" "}
            </Navbar.Brand>

            <Navbar.Brand>
              <div className="d-flex flex-row">
                <div
                  className="p-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `rgba(0, 218, 207, 0.75)`,
                    marginRight: "10px",
                    borderRadius: "2px",
                  }}
                />
                <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                  {" "}
                  Visited Node{" "}
                </p>
              </div>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className="d-flex flex-row">
                <div
                  className="p-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `rgba(112, 0, 217, 0.75)`,
                    marginRight: "10px",
                    borderRadius: "2px",
                  }}
                />
                <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                  {" "}
                  Shortest-path Node{" "}
                </p>
              </div>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className="d-flex flex-row">
                <div
                  className="p-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `rgb(12, 53, 71)`,
                    marginRight: "10px",
                    borderRadius: "2px",
                  }}
                />
                <p style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
                  {" "}
                  Wall Node{" "}
                </p>
              </div>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>

        <Navbar>
          <Navbar.Brand className="col-centered2">
            <div
              id="alert-box"
              className="shallow-container"
            >
              <div className="shallow-bulge">
                <span
                  id = "alert-box-text"
                  style={{
                    color: "#868b8f",
                    fontFamily: "sans-serif",
                    verticalAlign: "middle",
                  }}
                >
                  Buttons Disabled
                </span>
              </div>
            </div>
          </Navbar.Brand>
        </Navbar>

        <br />
      </div>
    );
  }
}
