import React from "react";
import Navigation from "./Navigation"
import './SeeAll.css';

function Map() {
    return (
        <div className="container-fulid">
            <div className="row">
                <Navigation className="col-lg-12"/>
            </div>
            <div class="row mt-5 pt-5 mx-0">
                <div class="col-lg-3 ml-5">
                    <h1 class="display-4">영수증 모아보기</h1>
                </div>
                <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="date-yymm">
                            <h5 class="date-yy">2021</h5>
                            <p class="display-4">4</p>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <ul class="date-dd">
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li class="today">19</li>
                            <li>20</li>
                            <li>21</li>
                            <li>22</li>
                            <li>23</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div class ="col-lg-12">
                    <table class="receipt_table">
                        <tr class = "table-title">
                            <td>00:00</td>
                            <td>주문번호:BOWG009KTK</td>
                            <td class="product-price">25,000</td>
                        </tr>
                        <tr class = "table-content">
                            <td class="shop-name">펜트하우스</td>
                            <td>청아예술트로피/대상/서울음대프리패스 외 2건</td>
                            <td class="float-right">
                                <button class="btn" type="button text-light">더보기</button>
                            </td>
                        </tr>
                        <tr class = "table-title">
                            <td>00:00</td>
                            <td>주문번호:BOWG009KTK</td>
                            <td class="product-price">25,000</td>
                        </tr>
                        <tr class = "table-content">
                            <td class="shop-name">펜트하우스</td>
                            <td>청아예술트로피/대상/서울음대프리패스 외 2건</td>
                            <td class="float-right">
                                <button class="btn" type="button btn-lg text-light">더보기</button>
                            </td>
                        </tr>
                        <tr class = "table-title">
                            <td>00:00</td>
                            <td>주문번호:BOWG009KTK</td>
                            <td class="product-price">25,000</td>
                        </tr>
                        <tr class = "table-content">
                            <td class="shop-name">펜트하우스</td>
                            <td>청아예술트로피/대상/서울음대프리패스 외 2건</td>
                            <td class="float-right">
                                <button class="btn" type="button btn-lg text-light">더보기</button>
                            </td>
                        </tr>
                        <tr class = "table-title">
                            <td></td>
                            <td></td>
                            <td class="product-price"></td>
                        </tr>
                        <tr class = "table-content">
                            <td class="shop-name"></td>
                            <td></td>
                            <td class="float-right">
                                <button class="btn" type="button btn-lg text-light">더보기</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Map;
