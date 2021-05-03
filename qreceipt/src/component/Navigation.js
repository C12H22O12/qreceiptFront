import React, { useState } from "react";
import './Navigation.css';

var menu = document.querySelectorAll('.menu, .menu *');
var menubars = document.querySelectorAll('.menubars, .menubars *');
var uls = document.querySelectorAll('.menu ul')

function Navigation() {
    const [mode, setMode] = useState("hidden")

    function switchMode(){
        for (var i = 0; i <menubars.length; i++) {
            menubars[i].addEventListener('click', () => {
                for (var j = 0; j < menu.length; j++) {
                    var visable = uls[j].visibility;
                    if ((visable === "visible") || (visable === "")) {
                        closeMenu();
                    } else {
                        openMenu();
                    }
                }
            }, false);
        }
    }

    return (
            <div className="menu"  mode={mode} switchMode={switchMode}>
                <div className="menubars">
                    <div className="menubar top"></div>
                    <div className="menubar middle"></div>
                    <div className="menubar bottom"></div>
                </div>
                <div className="menubackground" mode={mode} switchMode={switchMode}></div>
                <ul className="menulinks" mode={mode} switchMode={switchMode}>
                    <li className="item">영수증 모아보기</li>
                    <li className="item">회원가입</li>
                    <li className="item">영수증 어쩌고</li>
                    <li className="item">저쩌고</li>
                </ul>
            </div>
    )
}

export default Navigation;

// function clickEvent() {
//             for (var i = 0; i <menubars.length; i++) {
//                 menubars[i].addEventListener('click', () => {
//                     for (var j = 0; j < menu.length; j++) {
//                         var visable = uls[j].visibility;
//                         if ((visable === "visible") || (visable === "")) {
//                             closeMenu();
//                         } else {
//                             openMenu();
//                         }
//                     }
//                 }, false);
//             }
// }

function openMenu() {
    document
        .querySelector('.menubackground')
        .style
        .left = '0px';
    document
        .querySelector('.menubackground')
        .style
        .top = '-810px';
    document
        .querySelector('.top')
        .style
        .top = '10px';
    document
        .querySelector('.bottom')
        .style
        .top = '10px';

    for (var i = 0; i < uls.length; i++) {
        uls[i].visibility = 'visible';
    }

    document
        .querySelector('.top')
        .style
        .transform = 'rotate(45deg)';
    document
        .querySelector('.bottom')
        .style
        .transform = 'rotate(-45deg)';
    document
        .querySelector('.middle')
        .style
        .transform = 'rotate(45deg)';
}

function closeMenu() {
    for (var i = 0; i < uls.length; i++) {
        uls[i].visibility = 'hidden';
        uls[i].display = 'none';
    }

    document
        .querySelector('.top')
        .style
        .top = '0px';
    document
        .querySelector('.bottom')
        .style
        .top = '20px';
    document
        .querySelector('.top')
        .style
        .transform = 'rotate(0deg)';
    document
        .querySelector('.bottom')
        .style
        .transform = 'rotate(0deg)';
    document
        .querySelector('.middle')
        .style
        .transform = 'rotate(0deg)';
    document
        .querySelector('.menubackground')
        .style
        .left = '-2240px';
    document
        .querySelector('.menubackground')
        .style
        .top = '-2240px';
}
