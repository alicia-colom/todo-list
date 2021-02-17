import React, { useState, useRef } from 'react';
import '../stylesheets/TodoForm.scss';

interface Props {
	addTodo: AddTodo;
}

const TodoForm: React.FC<Props> = (props) => {
	const [newTask, setNewTask] = useState<string>('');

	const handleInputText = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(ev.target.value);
	};

	const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement>) => {
		ev.preventDefault();
		props.addTodo(newTask);
		setNewTask('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form__searchBox">
				<input
					type="text"
					name="writeTask"
					id="writeTask"
					onChange={handleInputText}
					value={newTask}
					className="form__searchBox--textArea"
					placeholder="For example, buy milk..."
					autoFocus={true}
					required
				/>
				<i
					className="fa fa-pencil form__searchBox--icon"
					aria-hidden="true"
				></i>
			</div>
			<button type="submit" className="form__push form__push--btn ">
				Add
			</button>
		</form>
	);
};

export default TodoForm;
