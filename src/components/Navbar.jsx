import React, { useState } from 'react'
import Xbutton from './Xbutton'
import styled from 'styled-components'

function Navbar() {
  const [enabled, SetEnabled] = useState(false)
  const handleClick = () => {
    SetEnabled(!enabled)
  }

  return (
    <>
      <NavbarConainer>
        <h2>Megic</h2>
        <div className={`Navbar-links ${enabled ? 'active' : ''}`}>
          <a href='/'>Home</a>
          <a href='/'>Games</a>
          <a href='/Projects'>Projects</a>
          <a href='/Contact'>Contact</a>
        </div>
        <div className='xbuton'>
          <Xbutton enabled={enabled} handleClick={handleClick} />
        </div>
      </NavbarConainer>
    </>
  )
}

export default Navbar
const NavbarConainer = styled.nav`
  background: #282c34;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;

  h2 {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
    margin-right: 1rem;
  }

  .Navbar-links {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    a {
      color: black;
      font-size: 2rem;
      display: none;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .Navbar-links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: black;
      display: block;
    }
  }
  @media (min-width: 768px) {
    .xbuton {
      display: none;
    }
  }
`
