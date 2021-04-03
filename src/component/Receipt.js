import React from "react";
import './Receipt.css';
import Menu from "./Menu";

function Receipt({
    orderDay,
    orderNum,
    offerName,
    offerNum,
    offerPhoneNum,
    sum,
    checkDay,
    check
}) {
    return (
        <div className="frame">
            <header className="container row">
                <p className="col-lg-9">주문일시 : {orderDay}
                    <br/>주문번호 : {orderNum}</p>
            </header>
            <div className="mt-0">
                <h1 className="display-4">{offerName}</h1>
                <p>공급자등록번호 : {offerNum}
                    <br/>
                    대표번호 : {offerPhoneNum}
                </p>
                <table className="table">
                    <thead className="d-flex">
                        <th className="col-6">메뉴</th>
                        <th className="col-3 text-center">수량</th>
                        <th className="col-3 text-center">금액</th>
                    </thead>
                    {orderMenu.map(renderItem)}
                    <tfoot className="d-flex">
                        <th className="col-9">합계</th>
                        <th className="col-3 text-center">{sum}</th>
                    </tfoot>
                </table>
            </div>
            <footer>
                <p>결제일 : {checkDay}
                    <br/>결제유무 : {check}
                </p>
            </footer>
        </div>
    )
}

export default Receipt;

const orderMenu = [
    {
        id:1,
        menu: "생수",
        cnt: 4,
        won: "4000"
    }, {
        id:2,
        menu: "주단태빌리지 피규어",
        cnt: 1,
        won: "심수련이 부숨"
    }, {
        id:3,
        menu: "흰두부",
        cnt: 1,
        won: "2800"
    }
]

function renderItem(item) {
    return <Menu key={item.id} menu={item.menu} cnt={item.cnt} won={item.won}/>
}