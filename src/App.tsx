import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import CheckImage from './images/check.png';
import './stylesheets/App.scss';

const initialTodos: Todo[] = [
	{
		task: 'Finish todo app',
		done: true,
	},
];

function App() {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo = (selectedTodo: Todo) => {
		const updatedTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					done: !todo.done,
				};
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const addTodo: AddTodo = (task: string) => {
		const newTodo = { task, done: false };
		setTodos([...todos, newTodo]);
	};

	return (
		<div className="page">
			<div className="main">
				<h1>
					<img src={CheckImage} alt="To do list" />
				</h1>
				<TodoForm addTodo={addTodo} />
				<h2>To do list :</h2>
				<TodoList todos={todos} toggleTodo={toggleTodo} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
