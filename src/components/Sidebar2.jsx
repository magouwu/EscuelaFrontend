import React from 'react'
import styled from 'styled-components'
import { faUserGraduate, faSchoolFlag, faSchoolCircleCheck, faBookBookmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function Sidebar2() {
  return (
      
    <SidebarContainer2>
       
       <ul className='nav-list'>
       <div class="div1">   <li>
                <a href='/'>
                <FontAwesomeIcon className='fontIcon' icon={faUserGraduate} />
                <span className='link_name'>Account</span>    
                </a>
                <span className='tooltip'>Account</span>  
            </li></div>
            <div class="div2">
            <li>
                <a href='/'>
                <FontAwesomeIcon className='fontIcon' icon={faSchoolFlag} />
                <span className='link_name'>Academic History</span>    
                </a>
                <span className='tooltip'>Academic History</span>  
            </li></div>
            <div class="div3">  <li>
                <a href='/'>
                <FontAwesomeIcon className='fontIcon' icon={faBookBookmark} />
                <span className='link_name'>Subjects in course..</span>    
                </a>
                <span className='tooltip'>Subjects in course..</span>  
            </li></div>
            <div class="div4">  <li>
                <a href='/'>
                <FontAwesomeIcon className='fontIcon' icon={faSchoolCircleCheck} />
                <span className='link_name'>Registration Subjects</span>    
                </a>
                <span className='tooltip'>Registration Subjects</span>  
            </li></div>
            <div class="div5">   <li>
                <a href='/'>
                <FontAwesomeIcon className='fontIcon' icon={faRightFromBracket} />
                <span className='link_name'>Log out</span>    
                </a>
                <span className='tooltip'>Log out</span>  
            </li></div>
        </ul>
</SidebarContainer2>
  )
}

export default Sidebar2

const SidebarContainer2 = styled.div`
height: 100%;
width: 70px;
padding: 6px 14px ;
background: #EFEFF1;
box-sizing: border-box;
position: fixed;
overflow:hidden;
flex-wrap: nowrap;



    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
   
    
    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 2 / 1 / 3 / 2; }
    .div3 { grid-area: 3 / 1 / 4 / 2; }
    .div4 { grid-area: 4 / 1 / 5 / 2; }
    .div5 { grid-area: 5 / 1 / 6 / 2; }
:hover{
    transition: all .3s ease;
    width: 272px;
    overflow:visible;
    
}
.nav-list{
    padding:0;
    
}

.nav-list li{
    position: relative;
    height: 50px;
    width: 100%;
    list-style: none;
    margin: 0 5px;
    line-height: 5px;
    font-size: 20px;
}
.nav-list li a{
    text-decoration:none;
    color: #000;
    display:flex;
    align-items: center;
    transition: all .2s ease;
    border-radius:12px;
}
.nav-list li a:hover{
    color: #11101d;
    background: #FDFDFD;
}
.nav-list li:hover .tooltip{
    top:-70px;
    transition: all .5s ease;
    opacity:1;
}
.fontIcon{
  height: 20px;
  min-width: 35px;
  border-radius:12px;
  line-height:50px; 
  text-align: center;
  margin-right: 15px
}
.link_name{
    
}
.tooltip{
    position: relative;
    left:150px;
    top:-50%;
    transform: translateY(-50%);
    border-radius:10px;
    line-height:35px;
    text-align:center;
    height:35px;
    width: 125px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    transition: 0s;
    opacity: 0;
    pointer-events:none;
}
`

