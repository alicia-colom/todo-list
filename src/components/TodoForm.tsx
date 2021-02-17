import React, { useState } from 'react';

interface Props {
	addTodo: AddTodo;
}

const TodoForm: React.FC<Props> = (props) => {
	const [newTask, setNewTask] = useState('');

	const handleInputText = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(ev.currentTarget.value);
	};

	const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement>) => {
		ev.preventDefault();
		props.addTodo(newTask);
		setNewTask('');
	};

	return (
		<form>
			<input
				type="text"
				name="writeTask"
				id="writeTask"
				onChange={handleInputText}
			/>
			<button type="submit" onClick={handleSubmit}>
				Add
			</button>
		</form>
	);
};

export default TodoForm;
