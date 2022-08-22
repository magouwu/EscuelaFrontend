import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {
  faUserGraduate,
  faSchoolFlag,
  faSchoolCircleCheck,
  faBookBookmark,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import useUser from '../hooks/useUser'
import { useLocation, Link } from 'wouter'
import { motion } from 'framer-motion'

function Sidebar({ user }) {
  const { logout } = useUser()
  const [location, pushLocation] = useLocation()
  // const [selected, dispatch] = useReducer(reducer, {
  //   selected:
  // })

  const navigation = (name) => {
    pushLocation(name)
    console.log(location)
  }
  const handleClick = (event) => {
    logout()
    event.preventDefault()
  }
  const sidebarItems = [
    { id: 1, name: 'Account', link: `/${user}`, icon: faUserGraduate },
    { id: 2, name: 'Academic History', link: `/${user}/history`, icon: faSchoolFlag },
    { id: 3, name: 'Subjects in Course...', link: `/${user}/inCourse`, icon: faBookBookmark },
    { id: 4, name: 'Registration Subjects', link: `/${user}/registry`, icon: faSchoolCircleCheck }
  ]
  const [selected, setSelected] = useState(() => sidebarItems.find(item => item.link === location)?.link || `/${user}`)

  const sidebarShow = sidebarItems.map((item) => (
    <li key={item.id} onClick={() => {
      setSelected(item.link)
      navigation(item.link)
      console.log(location)
    }
    }>
      <a>
      {item.link === selected ? (<motion.div className='underline' layoutId='underline' />) : null}
        <FontAwesomeIcon className='fontIcon' icon={item.icon} />
        <span className='link_name'>{item.name}</span>
        </a>
      <span className='tooltip'>{item.name}</span>
    </li>
  ))

  return (
    <SidebarParent>
      <SidebarContainer>
        <ul className='nav-list'>
          {sidebarShow}
          <li>
            <Link to='/' onClick={() => handleClick()}>
              <FontAwesomeIcon className='fontIcon' icon={faRightFromBracket} />
              <span className='link_name'>Log Out</span>
            </Link>
            <span className='tooltip'>Log Out</span>
          </li>
        </ul>
      </SidebarContainer>
    </SidebarParent>
  )
}

export default Sidebar
const SidebarParent = styled.div``

const SidebarContainer = styled.div`
  min-height: 100vh;
  width: 69.8px;
  left: 0;
  padding: 6px 14px;
  background: #efeff1;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  --accent: #8855ff;

  :hover {
    overflow: visible;
    transition: all 0.3s ease;
    width: 272px;
  }
  .nav-list {
    padding: 0;
    display:flex;
    align-items: center;
    flex-direction: column;
  }
  .nav-list li {
    position: relative;
    height: 50px;
    width: 100%;
    list-style: none;
    margin: 0 5px;
    line-height: 0px;
    font-size: 20px;
    cursor: pointer;  
  }
  .nav-list li a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    border-radius: 12px;
    height:100%;
    background-color: --accent;
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
    padding: 10px;
  }
  .link_name {
    pointer-events: none;
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
  .underline{
    position: absolute;
    height: 50px;
    border-left: 6px solid blue;
  }
`
