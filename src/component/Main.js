import React from "react";
import Receipt from "./Main"
import Navigation from "./Navigation"
import './Main.css'

function Main({
    address,
    phoneNum,
    shopOrder,
    deliveryOrder,
    spoonCheck,
    origin
}) {
    return (
        <div className="detailBody container-fulid">
            <div className="menu row">
                <Navigation className="col-12 w-100"/>
            </div>
            <div className="row text-center w-100 p-0 m-0">
                <div className="col-xl-3 col-md-12">
                    <h1 className="Title">영수증 상세보기</h1>
                   
                </div>

                <div className="receipt col-xl-4 col-md-7 align-self-center">
                <Receipt form="false"/>
                </div>
        </div>
        </div>
    );
}

export default Main;
