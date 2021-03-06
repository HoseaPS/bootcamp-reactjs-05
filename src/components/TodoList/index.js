import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const todos = localStorageMock.getItem("todos");

    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  saveTodos = () => {
    localStorageMock.setItem("todos", JSON.stringify(this.state.todos));
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });

    this.saveTodos();
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });

    this.saveTodos();
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.todos.map(todo => (
            <li onClick={() => this.removeTodo(todo.id)} key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
        <button onClick={this.addTodo}>Adicionar todo</button>
      </Fragment>
    );
  }
}
