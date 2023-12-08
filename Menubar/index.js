import React, { useState } from 'react';
import './style.css'

function Menubar(){
let [SelectedItem,SetSelectedItem] = useState('홈');
let SelectPage =(MenuText) =>{
    SetSelectedItem(MenuText);
}
return (
<div>
    <ul id='Menubar'>
        <li onClick={()=>SelectPage('홈')} className = {SelectedItem == '홈'?'active':''}><a>홈</a></li>
        <li onClick={()=>SelectPage('사업기획')} className = {SelectedItem == '사업기획'?'active':''}><a>사업기획</a></li>
        <li onClick={()=>SelectPage('제품설명')} className = {SelectedItem == '제품설명'?'active':''}><a>제품설명</a></li>
        <li onClick={()=>SelectPage('다운로드')} className = {SelectedItem == '다운로드'?'active':''}><a>다운로드</a></li>
        <li onClick={()=>SelectPage('커뮤니티')} className = {SelectedItem == '커뮤니티'?'active':''}><a>커뮤니티</a></li>
        <li onClick={()=>SelectPage('작업실')} className = {SelectedItem == '작업실'?'active':''}><a>작업실</a></li>
        <li onClick={()=>SelectPage('고객지원')} className = {SelectedItem == '고객지원'?'active':''}><a>고객지원</a></li>
    </ul>
</div>
);
}

export default Menubar;