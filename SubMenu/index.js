import React, { useState ,useEffect} from 'react';
import './style.css'

function SideMenuBar(){
    useEffect(()=>{init();},[]);
    const init=()=>{
        var toggler = document.getElementsByClassName("caret");
        var i;
        
        for (i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click",function()  {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("creat-down");
            });
        }
    }
    return(
    <div id='SideMenuPanel'>
    <ul id="myUL">
    <li><span className="caret">기준정보</span><ul className="nested">
    <li>기준정보관리</li>
    <li>라인정보관리</li>
    </ul>
    </li>
    <li><span className="caret">사용자관리</span>
    <ul className="nested">
    <li>사용자등록</li>
    <li><span className="caret">작업실</span>
    <ul className="nested">
    <li><span className ="caret">개발자</span>
    <ul className="nested">
    <li>코딩</li>
    <li>인프라</li>
    </ul>
    </li>
    <li><span className="caret"> 디자이너</span>
    <ul className ="nested">
    <li>3D</li>
    </ul>
    </li>
    </ul>
    <li>3D-MAX</li>
    <li>Blander3D</li>
    <li>Zbrush</li>
    </li>
    </ul>
    </li>
    </ul>
    </div>
    );
  }
  export default SideMenuBar;