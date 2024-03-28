import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos]= useState([]);
  
  return ( <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: "hii dumba bot",
          description : "bot is dumb",
          completed:  false
        }
      ]}></Todos>
      </div>
    )
}

export default App
