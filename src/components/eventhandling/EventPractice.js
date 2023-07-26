import React, {useState} from "react";

const EventPractice = () =>{

    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    function handleClick(){
        alert(`${username} : ${message}`);
        setMessage('');
        setUsername('');
    }
    function handleMessageChange(e){
        setMessage(e.target.value); // 제출버튼 누르면 폼 비우기
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    // input 태그 2개(username, message)로 사용해
    // 양쪽을 입력하고, 확인버튼을 누르면
    // username : message가 들어간 alert 창이 뜨게 하기

    return(
        <>
            <h1>이벤트 연습</h1>
            <input
                    type="text"
                    name="message"
                    placeholder="메세지 입력"
                    value={message}
                    onChange={handleMessageChange}/>
            <input
                    type="text"
                    name="username"
                    placeholder="이름입력하기"
                    value={username}
                    onChange={handleUsernameChange}/>
    <button onClick={handleClick}>확인</button>
    </>
    );
}

export default EventPractice;