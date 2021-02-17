import React from 'react';
import TodoItem from './TodoItem';
import '../stylesheets/TodoList.scss';

interface Props {
	todos: Todo[];
	toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = (props) => {
	const list = props.todos.map((todo: Todo, i: number) => {
		return <TodoItem key={i} todo={todo} toggleTodo={props.toggleTodo} />;
	});

	return (
		<>
			<ul className="todo-list">{list}</ul>
		</>
	);
};

export default TodoList;
