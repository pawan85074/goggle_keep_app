import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateNote from './components/CreateNote'
import Note from './components/Note'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [addItem,setAddItem]=useState([])
  const addNote=(note)=>{
    setAddItem((preValue)=>{
      return[...preValue,note];
    });
    console.log(note)
  }
  const onDelete=(id)=>{
    setAddItem((olddata)=>
      olddata.filter((currdata,indx)=>{
        return indx !==id;
      })
    )
  }
  return (
   <>
   <Navbar/>
   <CreateNote passNote={addNote}/>
   {addItem.map((value,index)=>{
    return( 
    <Note 
      key={index}
      id={index}
      title={value.title}
      content={value.content}
      deleteItem={onDelete}
    />
    )
   })}
   <Footer/>
   </>
  )
}

export default App