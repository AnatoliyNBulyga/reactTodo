import React from "react";
import PropTypes from "prop-types"
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map( (item, index) => <TodoItem key={item.id} todo={item} index={index} onChangeItem={props.onChangeItem}/> )}

        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeItem: PropTypes.func.isRequired
}

export default TodoList;