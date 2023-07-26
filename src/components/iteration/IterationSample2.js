import React, {useState} from "react";

const IterationSample2 = () => {
    const [names, setNames] = useState([
                                                        {id:1, text:"눈사람"},
                                                        {id:2, text:"얼음"},
                                                        {id:3, text:"눈"},
                                                        {id:4, text:"바람"},
                                                        ]);
    const [inputText, setImputText] = useState('');
    const [nextId, setNextId] = useState(5);
    // 위에 4번까지 있으므로 5번부터

    // 삭제 수행하는 함수 선언
    // 더블클릭한 번호가 아닌 자바스크립트 객체들만 리스트에 남긴 채 저장
    const onDoubleClickComponent = (id) => {
        alert("해당요소를 삭제합니다.");
        setNames(names.filter(name => name.id !== id));
    }

    const nameList = names.map(name =>
                                        <li key={name.id}
                                            onDoubleClick={() => onDoubleClickComponent(name.id)}>
                                            {name.text}
                                        </li>);
    const onChangeInput = (e) => {
        setImputText(e.target.value);
    }

    const onClickButton = () => {
        // alert(inputText);
        setNames([...names, {id:nextId, text:inputText}]);
        // nextId는 중복되면 안되니까 1 증가시킨 값으로 갱신
        setNextId(nextId + 1);
        setImputText('');
    }

    return(
        <ul>
            <input type="text" value={inputText} onChange={onChangeInput}/>
                <button onClick={onClickButton}>목록에 추가</button>
                <ul>{nameList}</ul>
        </ul>
    );
}

export default IterationSample2;