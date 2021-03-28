import React from "react";
import './Navigation.css';

function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top p-0">
            <div class="collapse navbar-collapse flex-grow-0 ml-auto">
                <ul class="navbar-nav p-0">
                    <li class="nav-item ">영수증 모아보기</li>
                    <li class="nav-item ">회원가입</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;