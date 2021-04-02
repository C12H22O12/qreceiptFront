import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
/*global kakao*/ 

function Map() {
    return (
        <div class="container-fulid">
            <div class="row">
                <Navigation class="col-lg-12"/>
            </div>

            <div class="row mt-5 pt-5 mx-0">
                <div class="col-lg-5 p-0">
                    <h1 class="display-4">영수증 상세보기</h1>
                    <Receipt/>
                </div>
                <div class="map col-lg-auto">
                    aaa
                </div>
            </div>
        </div>
    );
}

export default Map;
