import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
import './Detail.css';

function Detail({
    address,
    phoneNum,
    shopOrder,
    deliveryOrder,
    spoonCheck,
    origin
}) {
    return (
        <div className="container-fulid">
            <div className="row">
                <Navigation className="col-lg-12"/>
            </div>

            <div className="row mt-5 pt-5 mx-0">
                <div className="col-lg-3 ml-5">
                    <h1 className="display-4">영수증 상세보기</h1>
                    <div className="Num">
                        <p className="display-4">1</p>
                    </div>
                </div>
                <div className="col-lg-5 p-0 align-self-center">
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
                <div className="info col-lg-auto">
                    <dl className="text-left">
                        <dt className="w-100">배달 주소</dt>
                        <dd className="w-100">{address}</dd>
                    </dl>
                    <dl className="text-left">
                        <dt className="w-100 mb-2">연락처</dt>
                        <dd className="w-100">{phoneNum}</dd>
                    </dl>
                    <dl className="text-left">
                        <dt className="w-100 mb-2">가게 요청사항</dt>
                        <dd className="w-100">{shopOrder}</dd>
                    </dl>
                    <dl className="text-left">
                        <dt className="w-100 mb-2">배달 요청사항</dt>
                        <dd className="w-100">{deliveryOrder}</dd>
                    </dl>
                    <dl className="text-left">
                        <dt className="w-100 mb-2">수저/포크 유무</dt>
                        <dd className="w-100">{spoonCheck}</dd>
                    </dl>
                    <dl className="text-left">
                        <dt className="w-100 mb-2">원산지 표시</dt>
                        <dd className="w-100">{origin}</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Detail;
