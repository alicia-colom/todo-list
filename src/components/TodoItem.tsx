import React from 'react';
import '../stylesheets/TodoItem.scss';

interface Props {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = (props) => {
	return (
		<li
			className="task"
			style={{ textDecoration: props.todo.done ? 'wavy line-through #B55DD7 2.6px' : undefined }}
		>
			<input
				type="checkbox"
				checked={props.todo.done}
				name="done"
				id="done"
				className="task__checkbox regular-checkbox"
				onClick={() => {
					props.toggleTodo(props.todo);
				}}
			/>
			<label htmlFor="done"></label>
			{props.todo.task}
		</li>
	);
};

export default TodoListItem;
