import React from 'react';

interface Props {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = (props) => {
	return (
		<li>
			<label
				htmlFor="done"
				// style={{ textDecoration: props.todo.done ? 'line-through' : undefined }}
			>
				<input
					type="checkbox"
					checked={props.todo.done}
					name="done"
					id="done"
					onClick={() => {
						props.toggleTodo(props.todo);
					}}
				/>
			</label>
			{props.todo.task}
		</li>
	);
};

export default TodoListItem;
