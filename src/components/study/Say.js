import React, {useState} from "react";

const Say = (props) => { // props 대신 {프로퍼티명1, 프로퍼티명2, ...}로 전달 가능
    // 아래 문법을 통해 변수값이 변경될 때 화면도 다시 렌더링되게 할 수 있다.
    // const [관리할 변수명, set관리할 변수명] = useState(초기값);
    const [msg, setMsg] = useState(props.msg);

    // 아래 함수가 실행되면 msg 변수에 든 값을 싸왓디크랍으로 바꾼다.
    const onClickEvent = () => {
        setMsg("싸왓디크랍"); // msg 변수의 값을 싸왓디크랍으로 변경하고 화면도 다시 그려라
        console.log("눌렸음");
        console.log(msg);
    }
    return (
        <div>
            <div> 인사하겠습니다. : {msg} </div>
            <button onClick={onClickEvent}>변경</button>
        </div>
    );
}

export default Say;