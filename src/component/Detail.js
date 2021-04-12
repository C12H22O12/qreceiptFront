import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
import "./Detail.css"

function Detail({
    address,
    phoneNum,
    shopOrder,
    deliveryOrder,
    spoonCheck,
    origin
}) {
    var i = 0;
    var lists = [];

    while (i < 5) {
        lists.push(<li>{i + 1}</li>);
        i += 1;
    }

    return (
        <div className="detailBody container-fulid">
            <div className="menu row">
                <Navigation className="col-12 w-100"/>
            </div>
            <div className="row text-center w-100 p-0 m-0">
                <div className="col-xl-3 col-md-12">
                    <h1 className="Title">영수증 상세보기</h1>
                    <ul className="index">
                        {lists}
                    </ul>
                </div>

                <div className="receipt col-xl-4 col-md-7 align-self-center">
                    <Receipt
                        form="true"
                        orderDay="21/04/03"
                        orderNum="1472583691"
                        offerName="주단태"
                        offerNum="1234567890"
                        offerPhoneNum="01000000000"
                        menu="생수"
                        cnt="4"
                        won="4000"
                        checkDay="21/04/04"
                        check="O"/>
                </div>

                <div className="detailOption col-xl-5 col-md-5">
                    <dl>
                        <dt>배달 주소</dt>
                        <dd>{address}</dd>
                    </dl>
                    <dl>
                        <dt>연락처</dt>
                        <dd>{phoneNum}</dd>
                    </dl>
                    <dl>
                        <dt>가게 요청사항</dt>
                        <dd>{shopOrder}</dd>
                    </dl>
                    <dl>
                        <dt>배달 요청사항</dt>
                        <dd>{deliveryOrder}</dd>
                    </dl>
                    <dl>
                        <dt>수저/포크 유무</dt>
                        <dd>{spoonCheck}</dd>
                    </dl>
                    <dl>
                        <dt>원산지 표시</dt>
                        <dd>{origin}</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Detail;
