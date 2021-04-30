import React from "react";
import Receipt from "./Receipt"
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
        <div className="">

            <div className="">
                <div className="">
                    <Receipt form="false"/>
                </div>

            </div>
        </div>
    );
}

export default Main;
