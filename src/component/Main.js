import React from "react";
import Receipt from "./Receipt"
import './Detail.css';

function Main({
    address,
    phoneNum,
    shopOrder,
    deliveryOrder,
    spoonCheck,
    origin
}) {
    return (
        <div className="container-fulid">

            <div className="row mt-5 pt-5 mx-0">
                <div className="col-lg-6 ml-5">
                    <h1 className="display-2 text-left">QReceipt</h1>
                </div>
                <div className="col-lg-5 p-0 align-self-center">
                    <Receipt
                        form = "false"/>
                </div>

            </div>
        </div>
    );
}

export default Main;
