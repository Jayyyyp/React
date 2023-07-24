import React from "react";
import YourComponent from "./YourComponent";
import MyComponent from "./MyComponent";
import Say from "./Say";

function App() {
  return (
      <>
          <MyComponent name={"리액트"}/>
          <MyComponent/>
          <MyComponent name={"네이버클라우드"}>사이에 적은 내용</MyComponent>
          {/* props.children 으로 수신할 수 있음*/}
          {/* properties명은 자유롭게 지정하면 된다. */}

          {/* YourComponent에 country라는 명칭으로 나라 이름을 넣어 전달하고, 출력하기*/}
          <YourComponent country={"대한민국"}/>
          <YourComponent country={"미국"}/>

          <Say msg = "안녕하세요"/>
      </>
  );
}

export default App;
