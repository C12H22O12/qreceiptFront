import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
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
                        form = "false"
                        orderDay="21/04/03"
                        orderNum="1472583691"
                        offerName="주단태"
                        offerNum="1234567890"
                        offerPhoneNum="01000000000"
                        menu="생수"
                        cnt="4"
                        won="4000"
                        sum="4000"
                        checkDay="21/04/04"
                        check="O"/>
                </div>

            </div>
        </div>
    );
}

export default Main;
