import React from "react";
import './Receipt.css';

function Receipt(){
    return (
        <div className="frame">
            <header>
                <p className="order">주문일시 : 00/00/00 00:00 <br />주문번호 : 0000000000</p>
                <p className="purpose">[고객용]</p>
            </header>
            <div className="receiptBody">
                <h1>공급자 이름</h1>
                <p>공급자등록번호 : 00000000000 <br /> 대표번호 : 000-0000-0000 </p>
                <table>
                    <tr>
                        <th>메뉴</th>
                        <th>수량</th>
                        <th>금액</th>
                    </tr>
                    <tr>
                        <td>이름이름</td>
                        <td>1</td>
                        <td>금액</td>
                    </tr>
                    <tr>
                        <td>이름이름</td>
                        <td>1</td>
                        <td>금액</td>
                    </tr>
                    <tr>
                        <th colSpan="2">합계</th>
                        <th>0000</th>
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