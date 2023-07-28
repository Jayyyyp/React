import './App.css';
import TodoTemplates from "./components/TodoTemplates";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useRef, useState} from "react";

function App() {
    const [todos, setTodos] = useState([ // 초기 객체 리스트 생성
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: false
        },{
            id: 2,
            text: '에취!!!!',
            checked: true
        },{
            id: 3,
            text: '위이이이잉이이이이ㅣ이이이이ㅣ이이이이ㅣ잉',
            checked: true
        }
    ]);

    // useRef()는 상태관리는 받지 않지만 보존되는 값을 생성할때 사용
    const nextId = useRef(4);
    // nextId는 4라는 값이 저장되는데 서버를 재시작하기 전까지는 렌더링 등을 해도 변경 없음

    const onInsert = (text) => { // 텍스트를 전달받으면, setTodos를 이용해 todos 내부 요소 추가
        setTodos([...todos, {id: nextId.current, text:text, checked:false}]);
        nextId.current += 1; // 전역 아이디값 1 증가
    }

  return (
    <TodoTemplates food="pizza">
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/> {/*초기 표시 데이터 전달*/}
    </TodoTemplates>
  );
}
export default App;
