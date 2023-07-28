import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

// props로 전달된 todos를 이용해 map 형식으로 출력하기
const TodoList = (props) => {
    return(
        <div className={styles.TodoList}>
            {props.todos.map(todo => {
                return <TodoListItem todo = {todo} key = {todo.id}/>
            })}
        </div>
    );
}

export default TodoList;