import React from "react";
import './Receipt.css';
import Menu from "./Menu";

function Receipt(props) {
    var componentForm = props.form;

    return (
        <div className="frame">
            {
                componentForm === "true"
                    ? receiptForm(props)
                    : loginForm(props)
            }
        </div>
    )
}

export default Receipt;

const orderMenu = [
    {
        id: 1,
        menu: "생수",
        cnt: 4,
        won: "4000"
    }, {
        id: 2,
        menu: "주단태빌리지 피규어",
        cnt: 1,
        won: "심수련이 부숨"
    }, {
        id: 3,
        menu: "흰두부",
        cnt: 1,
        won: "2800"
    }
]

function renderItem(item) {
    return <Menu key={item.id} menu={item.menu} cnt={item.cnt} won={item.won}/>
}

function receiptForm(props) {
    return <div>
        <header className="box row">
            <p className="col-lg-9 pl-0">주문일시 : {props.orderDay}
                <br/>주문번호 : {props.orderNum}</p>
        </header>
        <div className="mt-0">
            <h1 className="display-4">{props.offerName}</h1>
            <p>공급자등록번호 : {props.offerNum}
                <br/>
                대표번호 : {props.offerPhoneNum}
            </p>
            <table className="table">
                <thead>
                    <tr className="d-flex">
                        <th className="col-6">메뉴</th>
                        <th className="col-3 text-center">수량</th>
                        <th className="col-3 text-center">금액</th>
                    </tr>
                </thead>
                <tbody>
                    {orderMenu.map(renderItem)}
                </tbody>
                <tfoot>
                    <tr className="d-flex">
                        <th className="col-9">합계</th>
                        <th className="col-3 text-center">{props.sum}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <footer>
            <p>결제일 : {props.checkDay}
                <br/>결제유무 : {props.check}
            </p>
        </footer>
    </div>
}

function loginForm(props) {
    return <div>
        <header className="box row">
            <p className="col-lg-9 pl-0 my-2">QReceipt</p>
        </header>
        <div className="mt-0">
            <h1 className="display-4 mt-2 mb-4">LOGIN</h1>
            <table className="table">
                <thead>
                    <tr className="d-flex">
                        <th colspan="2" className="col-12">로그인하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="d-flex">
                        <td className="col-3">아이디</td>
                        <td className="col-9 text-center">
                            <input class="w-100 py-2 px-4 border rounded-pill"></input>
                        </td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-3">비밀번호</td>
                        <td className="col-9 text-center">
                            <input type="password" class="w-100 py-2 px-4 border rounded-pill"></input>
                        </td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-12 p-4"></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="d-flex">
                        <th colspan="2" className="col-12 text-right">
                            <input
                                class="loginBtn btn btn-dark btn-lg rounded-pill"
                                type="button"
                                value="로그인"></input>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <footer>
            <dl>
                <dd className="plus w-100">간단 조회만 하려면?</dd>
                <dt className="plusFun w-100">전화번호로 찾기</dt>
            </dl>
            <dl>
                <dd className="plus w-100">아직 가입이 안 되어 있다면?</dd>
                <dt className="plusFun w-100">회원가입</dt>
            </dl>
            <dl>
                <dd className="plus w-100">아이디/비밀번호를 잊어버렸다면?</dd>
                <dt className="plusFun w-100">아이디/비밀번호 찾기</dt>
            </dl>
        </footer>
    </div>
}