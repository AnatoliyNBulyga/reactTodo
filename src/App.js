import React, {useState, useEffect} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./AddTodo";


function App() {
  const [todos, setTodos] = useState([]);
  useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
          .then(response => response.json())
          .then( (todos) => {
              setTimeout(() => {
                  setTodos(todos);
              }, 2000)

          })
  }, []);
  const toggleTodo = (id) => {
      setTodos(todos.map( item => {
              if (item.id === id) {
                  item.completed = !item.completed
              }
              return item;
          }))

  };
  const onRemoveItem = (id) => {
      setTodos(todos.filter( item => item.id !== id ));
  };
  const onCreate = (value) => {
      setTodos([
          ...todos,
          {id: todos.length + 1, completed: false, title: value}
      ]);
  }
  return (
      <Context.Provider value={{
          onRemoveItem: onRemoveItem
      }}>
          <div className="wrapper">
              <h1>React tutorial</h1>
              <AddTodo onCreate={onCreate} />
              {
                 todos.length
                 ? <TodoList todos={todos} onChangeItem={toggleTodo} onRemoveItem={onRemoveItem}/>
                 : <p>Нет заданий</p>
              }

          </div>
      </Context.Provider>

  );
}

export default App;
