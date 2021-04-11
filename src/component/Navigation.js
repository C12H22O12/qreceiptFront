import React from "react";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-0 w-100">
            <div className="collapse navbar-collapse flex-grow-0 ml-auto">
                <ul className="navbar-nav p-0">
                    <li className="nav-item ">영수증 모아보기</li>
                    <li className="nav-item ">회원가입</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;