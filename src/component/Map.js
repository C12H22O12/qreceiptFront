import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"

function Map() {
    return (
        <div className="container-fulid">
            <div className="row">
                <Navigation className="col-lg-12"/>
            </div>

            <div className="row mt-5 pt-5 mx-0">
                <div className="col-lg-5 p-0">
                    <h1 className="display-4">영수증 상세보기</h1>
                    <Receipt
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
                <div className="map col-lg-auto">
                    aaa
                </div>
            </div>
        </div>
    );
}

export default Map;
