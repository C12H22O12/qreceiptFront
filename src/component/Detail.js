import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
import './Detail.css';

function Detail() {
    return (
        <div class="container-fulid">
            <div class="row">
                <Navigation class="col-lg-12"/>
            </div>

            <div class="row mt-5 pt-5 mx-0">
                <div class="col-lg-3 ml-5">
                    <h1 class="display-4">영수증 상세보기</h1>
                    <div class="Num">
                        <p class="display-4">1</p>
                    </div>
                </div>
                <div class="col-lg-5 p-0 align-self-center">
                    <Receipt/>
                </div>
                <div class="info col-lg-auto">
                    <dl class="text-left">
                        <dt>배달 주소</dt>
                        <dd>경북 구미시 어쩌고 저쩌고</dd>
                    </dl>
                    <dl class="text-left">
                        <dt>연락처</dt>
                        <dd>000-0000-0000</dd>
                    </dl>
                    <dl class="text-left">
                        <dt>가게 요청사항</dt>
                        <dd>오류 좀 나지말자</dd>
                    </dl>
                    <dl class="text-left">
                        <dt>배달 요청사항</dt>
                        <dd>부탁이야...</dd>
                    </dl>
                    <dl class="text-left">
                        <dt>수저/포크 유무</dt>
                        <dd>X</dd>
                    </dl>
                    <dl class="text-left">
                        <dt>원산지 표시</dt>
                        <dd>...</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Detail;
