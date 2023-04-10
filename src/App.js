

import {useState} from "react";

function App() {
  const [todoList,setTodoList] = useState(list)
  const [todo,setTodo] = useState('')
    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState('')
   const handleAddTodo = () => {
    if (todo.length){
      const newTodo ={
        id: todoList.length + 1,
        text:todo,
        completed:false
      }
      setTodo('')
      setTodoList([...todoList,newTodo])
    }
   }
    console.log(todoList)
    const editTodo =(id,title) =>{
      setEdit(id)
        setValue(title)
        console.log(title)
    }
    const check = (id,e) =>{
      setTodoList(todoList.map(todo => todo.id === id? {...todo, completed: e.target.checked} : todo))

    }
    const textEdit =(id,e) =>{
      setTodoList(todoList.map(todo => todo.id ===id ? {...todo, text: e.target.value} : todo))
        console.log(e , 'eee')
    }
 const saveTodo = (id) =>{
      const newTodo = [...todo].map(todo =>{
          if (todo.id === id ){
              todo.text = value
          }return todo
      })
     setTodo(newTodo)
     setEdit(null)
 }
  const handleDelete = (id) =>{
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div className="wrapper">
      <div className="input-wr">
        <input type="text"
               value={todo}
               onChange={(e) =>setTodo(e.target.value)}/>
        <button className={'add-btn'} onClick={handleAddTodo}>add</button>
      </div>
      {
        todoList.map((todo) =>(
            <div key={todo.id} className={`todo-wr ${todo.completed ? 'b-todo' : ''}` }>
                {
                    edit === todo.id ?
                        <div>
                            <input  value={todo.text} onChange={(e) => textEdit(todo.id,e)}/>
                            <button onClick={()=>saveTodo(todo.id)} >add</button>

                        </div>
                        :
                        <span>{todo.text}</span>
                }

               <div className={'wr-btn'}>
                   {
                       !todo.completed &&
                       <button onClick={() => editTodo(todo.id,todo.title)}>edit</button>
                   }

                   <input type="checkbox" onChange={(e) => check(todo.id,e)}/>
                   <button onClick={() => handleDelete(todo.id)}>delete</button>
               </div>
            </div>
        ))
      }

    </div>
  );
}

export default App;

const list = [
    {id:1 ,text: 'heay' ,completed:false},
    {id:2 ,text: 'heay', completed:false},
    {id: 3, text: 'heay', completed: false}

]

