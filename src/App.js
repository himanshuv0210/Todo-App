//import logo from './logo.svg';
import { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {

  const [inputList,setInputList] = useState("");

  const [Items, setItems] =useState([]);

  const itemEvent = (event) => {
     setInputList(event.target.value);  //Applied Hooks
   };

   //add the old items in array with the help of setitems(hooks)
   const listofItems = () => {
      setItems( (olditems) => {
        return [...olditems, inputList]; //return all the input itemsof inputlist hook is stored
      } );
      setInputList("");
   };

   //delete the items from array
   const deleteItems = (id) =>
    {
       console.log("Deleted");
       setItems( (olditems) => {
        return olditems.filter((arrElem,index)=> {
          return index !== id;
        }); //return all the input itemsof inputlist hook is stored
      } );
    };

  return (
    <div className="App">
        <div className="main_div">
          <div className="center_div">
              <br />
              <h1> Todo App </h1>
              <br></br>
              <input type="text" value={inputList} placeholder="Add a Items" onChange={itemEvent} />
              <button onClick={listofItems}> + </button>
              <ol>
                {Items.map( (itemval, index)=> {
                 return <TodoList key={index} 
                 id={index} 
                 text={itemval} 
                 onSelect = {deleteItems}
                 />;
                } )}
              </ol>
          </div>

        </div>
    </div>
  );
}

export default App;
