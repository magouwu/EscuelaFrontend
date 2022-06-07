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


function Sidebar() {

  const { logout } = useUser();


  const handleClick = (event) => {
    logout();
    event.preventDefault();
  };

  return (
    <SidebarContainer>
      <ul className="nav-list">
        <li>
          <a href="/">
            <FontAwesomeIcon className="fontIcon" icon={faUserGraduate} />
            <span className="link_name">Account</span>
          </a>
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
          <a href="/">
            <FontAwesomeIcon className="fontIcon" icon={faSchoolCircleCheck} />
            <span className="link_name">Registration Subjects</span>
          </a>
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
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  height: 100%;
  width: 70px;
  left: 0;
  padding: 6px 14px;
  background: #efeff1;
  box-sizing: border-box;
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;

  :hover {
    transition: all 0.3s ease;
    width: 272px;
    overflow: visible;
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
  .nav-list li:hover .tooltip {
    top: -70px;
    transition: all 0.5s ease;
    opacity: 1;
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
`;
