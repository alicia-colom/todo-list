import React, { useState } from 'react';
import '../stylesheets/TodoForm.scss';

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
			<div className="form__searchBox">
				<input
					type="text"
					name="writeTask"
					id="writeTask"
					onChange={handleInputText}
					className="form__searchBox--textArea"
					placeholder="For example, buy milk..."
					required
				/>
				<i
					className="fa fa-pencil form__searchBox--icon"
					aria-hidden="true"
				></i>
			</div>
			<input
				type="submit"
				onClick={handleSubmit}
				className="form__push form__push--btn "
				value="Add"
			/>
		</form>
	);
};

export default TodoForm;
