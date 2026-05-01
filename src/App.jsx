import React, { useActionState, useState } from 'react'
import "./index.css"

const App = () => {
  const [title, setTitle] = useState(``)
  const [text, setText] = useState(``)
  const [note, setNote] = useState([])

  

  function addNotes(e) {
    console.log(`note added `);
    e.preventDefault()
   let arry = [...note]
    arry.push({ title, text })
    setNote(arry)

    setTitle("")
    setText("")

  }
  function deletenote(idx) {
      let arrow = [...note]
      arrow.splice(idx, 1)
 setNote(arrow)
      
    }
  return (
    <div className='h-screen bg-black text-white lg:flex   '>
      <form className='flex flex-col gap-5 px-10 py-10  h-100 lg:w-1/2  '
        onSubmit={(e) => {
          addNotes(e)
        }}>
        <h1 className='text-2xl font-bolded'>Add Notes </h1>
        <input type="text " value={title}
          onChange={(e) => {  setTitle(e.target.value) }}
          className='px-10 py-5 border-2 outline-none'
          placeholder='Text tital' />
        <textarea name="" id="" value={text}
          className='px-10 py-5 border-2 outline-none'
          onChange={(e) => { setText(e.target.value) }}
          placeholder='write text' />
        <button  className='px-10 py-5 bg-amber-50 text-black text-2xl border-2 active:scale-95' >Add Text </button>
      </form>
      <div className=' p-10  lg:w-1/2 border-l no-scrollbar bg relative'>
        <h1 className='text-2xl font-bold'>Recent Notes</h1>
        <div className=' flex flex-wrap gap-5 h-full overflow-auto '>
          {note.map((e, idx) => {
            return  <div
  key={idx}
  className="h-52 w-40 rounded-2xl 
  

   mt-5 text-black p-6
  bg-[url('./public/ccsd.png')] bg-cover bg-center scale-110 `
  overflow-auto"
>
  <h1 className='text-2xl font-bold  break-words mt-1 '>{e.title}</h1>
 
           <p  className='  break-words text-blue-900 '>{e.text}</p>
           <button 
           onClick={(idx)=>{
            deletenote(idx)
           }}
            className=' absolute bottom-5 right-12 bg-red-600 px-3  text-white active:scale-95 rounded font-bold  '>Delete</button>
          </div>
        })}


      </div>
    </div>
    </div >
  )
}

export default App
