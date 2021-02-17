import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialTodos: Todo[] = [
	{
		task: 'task 1',
		done: false,
	},
	{
		task: 'task 2',
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
		<>
			<h1>Don't miss a thing</h1>
			<TodoForm addTodo={addTodo} />
			<h2>To do list:</h2>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
		</>
	);
}

export default App;
