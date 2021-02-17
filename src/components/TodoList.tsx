import React from 'react';
import TodoItem from './TodoItem';

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
			<ul>{list}</ul>
		</>
	);
};

export default TodoList;
