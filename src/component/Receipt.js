import React from "react";
import './Receipt.css';

function Receipt(){
    return (
        <div className="frame">
            <header class="container row mr-0 pr-0">
                <p class="col-lg-9">주문일시 : 00/00/00 00:00 <br />주문번호 : 0000000000</p>
            </header>
            <div className="receiptBody">
                <h1 class="display-4">공급자 이름</h1>
                <p>공급자등록번호 : 00000000000 <br /> 대표번호 : 000-0000-0000 </p>
                <table class="table">
                    <tr class="d-flex">
                        <th class="col-6">메뉴</th>
                        <th class="col-3 text-center">수량</th>
                        <th class="col-3 text-center">금액</th>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-6">이름이름</td>
                        <td class="col-3 text-center">1</td>
                        <td class="col-3 text-center">금액</td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-6">이름이름</td>
                        <td class="col-3 text-center">1</td>
                        <td class="col-3 text-center">금액</td>
                    </tr>
                    <tr class="d-flex">
                        <th class="col-9">합계</th>
                        <th class="col-3 text-center">0000</th>
                    </tr>
                </table>
            </div>
            <footer>
                <p>결제일 : 00/00/00 00:00 <br />결제유무 : O </p>
            </footer>
        </div>
    )
}

export default Receipt;