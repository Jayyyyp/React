import React, {useState} from "react";

const YourComponent = (props) => {
    // 함수를 만들어 country변수의 상태관리 선언하기
    // 초기값은 'ROK'
    const [country, setCountry] = useState('ROK');
    
    // 이벤트 함수를 선언하여, 클릭시, Korea로 바뀌게하기
    const onClickEvent = () =>{
        setCountry("Korea");
    }
    
    return (
        <div>
            <div>나라이름은 {country} 입니다.</div>
            <button onClick={onClickEvent}>변경</button>
        </div>
    );
}
export default YourComponent;