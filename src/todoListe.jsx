function TotoItem({todo}){
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.text);
    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id,{...todo, text: todoText})
        setIsTodoEditable(false);
    };
        
    function toggleCompleted() {
        toggleCompleted(todo.id);
    }


    return(
<>
</>
    );

}