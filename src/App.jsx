import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './components/ListItem'  

function App() {

  const [toDoListstate, setToDoListState] = useState([
    { id: nanoid(8), content: "item 1" },  // 8 char in the id
    { id: nanoid(8), content: "item 2" },  
    { id: nanoid(8), content: "item 3" },  
  ])
  const [toDo, setToDo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  /**
   * Keep the items they don't have the id clicked 
   * @param {*} id 
   */
  function deleteTodo(id) {
    setToDoListState(toDoListstate.filter(todo => todo.id !== id))
  }

  /**
   * Add the item to the list
   * @param {*} e 
   */
  function handleSubmit(e) {
    e.preventDefault()
    if (toDo === "") {
      setShowValidation(true)
      return
    }
    setToDoListState([...toDoListstate, {id: nanoid(), content: toDo}])
    setToDo("")
    setShowValidation(false)
  }

  return (
    <div className='h-screen bg-slate-900'>
      <div className='max-w-4xl mx-auto pt-20 px-6'>
        {/* Title */}
        <h1 className='text-3xl text-slate-100 mb-4'>Ma To do liste</h1>
        {/* Form */}
        <form action="" className='mb-10' onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className='text-slate-50'>Ajouter une chose à faire : </label>
          <input 
            value = {toDo}
            onChange={e => setToDo(e.target.value)}
            type="text" className='mt-1 block w-full rounded' />
          {showValidation && (
            <p className="text-red-400">
                Veuillez ajouter du contenu à votre tâche. 
            </p>
          )}
          {/* Submit */}
          <button className='mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]'>
              Ajouter
          </button>
        </form>

        {/* Display the to do List */}
        <ul>
          { toDoListstate.length === 0 && (
            <li className='text-slate-50'>Aucun item à afficher...</li>
          )}
          { toDoListstate.length > 0 && toDoListstate.map(item => (
            <ListItem key={item.id} itemData={item} deleteToDo={deleteTodo} />
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
