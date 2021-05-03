  import React from "react";
  import Detail from "./component/Detail"
  import './App.css';

  function App() {
    return (
      <div className="App">
        <Detail
        address="경북 구미시 거의동 450-12 풍경채 208호"
        phoneNum="010111111"
        shopOrder="카레랑 밥 따로 주세요 :3"
        deliveryOrder="조심히 안전하게 와주세요"
        spoonCheck="필요 없음"
        origin="문어(중국산)/감자(국내산)/돼지고기(국내산)/쌀(국내산)/김차(국내산)"
        />
      </div>
    );
  }

  export default App;
