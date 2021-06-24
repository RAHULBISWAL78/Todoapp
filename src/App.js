import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './MyComponents/Form';
import TodoList from './MyComponents/TodoList'

function App() {
  //state stuff
  const [inputText,setInputText]= useState (" ");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);
  //effect when page started
  useEffect(() =>{
    getLocalTodos();
  },[])
  //effect method
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  },[todos,status])
  //method stuff
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
          default:
            setFilteredTodos(todos)
            break;
    }
  };
  const saveLocalTodos = () => {
    
      localStorage.setItem('todos',JSON.stringify(todos));
    
  };
   const getLocalTodos = () => {
     if (localStorage.getItem('todos') === null){
       localStorage.setItem('todos',JSON.stringify([]))
     }else{
       localStorage.setItem('todos',JSON.stringify("todos"))
     }
   };
  return (
    <div className="App">
   <header>
     <h1>ToDo List</h1>
   </header>
   <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
   <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
