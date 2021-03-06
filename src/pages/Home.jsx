import React, {useState} from "react"
import '../App.css';

import { animate, motion } from 'framer-motion'

function Home() {
  // State Hook - 'useState'
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //Helper Functions

  {/* function ajout d'un todo */ }
  const addTodo = () => {
    // Check input
    if (!newTodo) {
      alert('Veuillez entrer un Todo !');
      return;
    }

    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
    };

    //ajouter notre todo dans la table
    setTodos((oldList) => [...oldList, todo]);

    //Reset Input & State
    setNewTodo("");

  }

  {/* function suppression d'un todo */ }
  const deleteTodo = (id) => {
    const newTableTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTableTodos);
  }

  return (
    <motion.div
      className="App"

      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    
    >
      {/* 1- Header */}
      <h1>Ma Todo List</h1>

      {/* 2- input ajouter new Todo */}
      <input 
        type="text"
        placeholder="Ajouter un todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      {/* 3- Button envoie Todo */}
      <button onClick={() => addTodo()}>Ajouter</button>

      {/* 4- Liste des Todos */}
      <ul>
        {todos.map((todo) => {
          return (
            
              <li key={todo.id}>
                {todo.value}
                <button onClick={() => deleteTodo(todo.id)}>X</button>
              </li>
            
          )
        })}
      </ul>
      
    </motion.div>
  );
}

export default Home;
