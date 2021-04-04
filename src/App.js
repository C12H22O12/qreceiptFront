import React from "react";
import Detail from "./component/Main"
import './App.css';

function App() {
  return (
    <div className="App">
      <Detail
      address="헤라클레스"
      phoneNum="010111111"
      shopOrder="무기징역"
      deliveryOrder="로건 리 사망"
      spoonCheck="X"
      origin="오윤희 자백"
      />
    </div>
  );
}

export default App;
