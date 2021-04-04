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

    const c = document.querySelector('.container')
    const indexs = Array.from(document.querySelectorAll('.index'))
    let cur = -1
    indexs.forEach((index, i) => {
        index.addEventListener('click', (e) => {
            // clear
            console.log("click!");
            c.class = 'container'
            void c.offsetWidth; // Reflow
            c
                .classList
                .add('open')
            c
                .classList
                .add(`i${i + 1}`)
            if (cur > i) {
                c
                    .classList
                    .add('flip')
            }
            cur = i
        })
    })

    return (
        <div className="container-fulid">
            <div className="row">
                <Navigation className="col-lg-12"/>
            </div>

            <div className="row mt-5 pt-5 mx-0">
                <div className="Num col-lg-3 ml-5">
                    <h1 className="display-4">영수증 상세보기</h1>
                    <div className="container">
                        <div className="index">1</div>
                        <div className="index">2</div>
                        <div className="index">3</div>
                        <div className="index">4</div>
                        <div className="index">5</div>
                        <svg viewBox="0 0 100 100">
                            <path
                                d="m 7.1428558,49.999998 c -1e-7,-23.669348 19.1877962,-42.8571447 42.8571442,-42.8571446 23.669347,0 42.857144,19.1877966 42.857144,42.8571446"/>
                        </svg>
                        <svg viewBox="0 0 100 100">
                            <path
                                d="m 7.1428558,49.999998 c -1e-7,23.669347 19.1877962,42.857144 42.8571442,42.857144 23.669347,0 42.857144,-19.187797 42.857144,-42.857144"/>
                        </svg>
                    </div>
                </div>
                <div className="col-lg-5 p-0 align-self-center">
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

function name(params) {
    
}

export default Detail;
