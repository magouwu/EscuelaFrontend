import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faUserGraduate,
  faSchoolFlag,
  faSchoolCircleCheck,
  faBookBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import useUser from "../hooks/useUser";
import {
  Link
} from "react-router-dom";

function Sidebar(props) {

  const { logout } = useUser();


  const handleClick = (event) => {
    logout();
    event.preventDefault();
  };
 
  return (
    <SidebarParent>
    <SidebarContainer>
      <ul className="nav-list">
        <li>
          <Link to={`/${props.user}`}>
            <FontAwesomeIcon className="fontIcon" icon={faUserGraduate} />
            <span className="link_name">Account</span>
          </Link>
          <span className="tooltip">Account</span>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon className="fontIcon" icon={faSchoolFlag} />
            <span className="link_name">Academic History</span>
          </a>
          <span className="tooltip">Academic History</span>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon className="fontIcon" icon={faBookBookmark} />
            <span className="link_name">Subjects in course..</span>
          </a>
          <span className="tooltip">Subjects in course..</span>
        </li>
        <li>
          <Link to={`/${props.user}/registry`}>
            <FontAwesomeIcon className="fontIcon" icon={faSchoolCircleCheck} />
            <span className="link_name">Registration Subjects</span>
          </Link>
          <span className="tooltip">Registration Subjects</span>
        </li>
        <li>
          <a href="/" onClick={handleClick}>
            <FontAwesomeIcon className="fontIcon" icon={faRightFromBracket} />
            <span className="link_name">Log out</span>
          </a>
          <span className="tooltip">Log out</span>
        </li>
      </ul>
    </SidebarContainer>
    </SidebarParent>
  );
}

export default Sidebar;
const SidebarParent = styled.div`
`

const SidebarContainer = styled.div`
  
  min-height: 100vh;
  width: 68px;
  left: 0;
  padding: 6px 14px;
  background: #efeff1;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;

  :hover {
    overflow: visible;
    transition: all 0.3s ease;
    width: 272px;

  }
  .nav-list {
    padding: 0;
  }
  .nav-list li {
    position: relative;
    height: 50px;
    width: 100%;
    list-style: none;
    margin: 0 5px;
    line-height: 5px;
    font-size: 20px;
  }
  .nav-list li a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    border-radius: 12px;
  }
  .nav-list li a:hover {
    color: #11101d;
    background: #fdfdfd;
  }
  
  .fontIcon {
    height: 20px;
    min-width: 35px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
    margin-right: 15px;
  }
  .link_name {
  }
  .tooltip {
    position: relative;
    left: 150px;
    top: -50%;
    transform: translateY(-50%);
    border-radius: 10px;
    line-height: 35px;
    text-align: center;
    height: 35px;
    width: 125px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
  }
  .nav-list li:hover .tooltip {
    top: -50px;
    transition: all 0.5s ease;
    opacity: 1;
  }
`;
