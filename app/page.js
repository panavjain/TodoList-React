"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deletehandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2> 
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i) => {
      return (
      <li className='flex items-center justify-between'>
        <div className='flex justify-between mb-1 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h5 className='text-2xl font-semibold'>{t.desc}</h5>
      </div>
      <button 
      onClick={()=>{
        deletehandler(i)
      }}
      className='text-white bg-red-600 rounded px-4 py-2 font-bold'>Delete</button>
      </li>
      )
    })
  }
  return (
    <>
       
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>  
        My TodoList
      </h1>
      <form onSubmit={submitHandler}>
        <input type='text'
        style={{ border: '1px solid black' }}
        className='border-3 m-8 px-4 py-2' 
        placeholder='Enter Title Here'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <input type='text'
        className='border border-black border-3 m-8 px-4 py-2' 
        placeholder='Enter Description Here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        />

        <button className='border-black text-green-900 px-4 py-2 text-2xl 
        font-bold rounded m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page