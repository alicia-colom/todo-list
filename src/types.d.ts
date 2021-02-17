interface Todo {
	task: string;
	done: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;


type AddTodo = (task: string) => void;