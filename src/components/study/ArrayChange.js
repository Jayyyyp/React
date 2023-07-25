import React, {useState} from "react";

const ArrayChange = () => {
    // 사람 이름과 성적 키-벨류 쌍으로 집어넣는 객체 초기값으로 넣기
    const [humans, setHumans] = useState({"Kim":100, "Lee":200});

    const addScoreEvent = () => {
        setHumans({...humans, park:300});
    }
    return(
        <>
            <button onClick={addScoreEvent}>성적 추가하기</button>
            <div>성적목록 : {humans.park}</div>
        </>
    );
}

export default ArrayChange;