
const TodoList= (props) =>{

    return (
    <>
        <div className="todo_style"> 
            <i className="fa fa-times" onClick={()=> { props.onSelect(props.id);}}  aria-hidden="true"></i>
            <li> {props.text} </li>
        </div>
    </>
    );
};

export default TodoList;