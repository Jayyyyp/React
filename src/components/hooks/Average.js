import React, {useMemo, useState} from "react";
import './Average.css';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => (a + b));
    return sum / numbers.length;
}
const Average = () => {
    const [list, setList] = useState([]); // 초기값 빈리스트
    const [number, setNumber] = useState('');
    const onChange = e => {
        setNumber(e.target.value);
    }
    const onInsert = e => { // 버튼 클릭시, 리스트에 숫자를 저장
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        console.log(list); // 갱신된 리스트를 콘솔에 보여줌
        setNumber('');
    }

    // 특정 상태 변수의 값이 변동되었을때 호출할 로직을 지정하고, 리턴값을 리턴
    // list 자체의 값이 변할때만 getAverage()를 호출하고, 결과값은 avg에 저장
    const avg = useMemo(() => getAverage(list),[list]);

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>))}
            </ul>
            <div className={'Average-result'}>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
}
export default Average;