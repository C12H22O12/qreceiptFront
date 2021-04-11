import React from "react";
import Receipt from "./Receipt"

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
                    <h1 className="">QReceipt</h1>
                </div>
                <div className="">
                    <Receipt
                        form = "false"/>
                </div>

            </div>
        </div>
    );
}

export default Main;
