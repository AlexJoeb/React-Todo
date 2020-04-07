import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					task: "Organize Garage",
					id: 1528817077286,
					completed: false,
				},
				{
					task: "Bake Cookies",
					id: 1528817084358,
					completed: false,
				},
			],
		};
	}

	handleSubmit = (e, task, setTask) => {
    e.preventDefault();
    if (task.trim() === '') return;
    else {
      this.setState(prev => ({
        todos: [
          ...prev.todos,
          {
            task,
            id: Date.now(),
            completed: false,
          }
        ]
      }), () => setTask(""));
    }
	};

  clearCompleted = () => {
		this.setState((prev) => ({
			todos: [...prev.todos.filter((item) => !item.completed)],
		}));
	};

	handleClick = (item) => {
		this.setState((prev) => {
			const index = prev.todos.findIndex((i) => i.id === item.id);
			let newList = [...prev.todos.filter((i) => i.id !== item.id)];

			const newTask = {
				task: item.task,
				id: item.id,
				completed: !item.completed,
			};

			newList.splice(index, 0, newTask);

			return {
				todos: [...newList],
			};
		});
	};

	render() {
		return (
      <div css={css`
        width: 80%;
        margin: 0 auto;
      `}>
				<h2>Welcome to your Todo App!</h2>
				<TodoList todos={this.state.todos} handleClick={this.handleClick} />
				<TodoForm handleSubmit={this.handleSubmit} clearCompleted={this.clearCompleted} />
			</div>
		);
	}
}

export default App;
