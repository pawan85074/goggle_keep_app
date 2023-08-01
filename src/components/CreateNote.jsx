import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'



function CreateNote(props) {
    const [note,setNote]=useState({title:"",content:"",})
    const [expand,setExpand]=useState(false);

    const ActionPerform=(event)=>{
       const {value,name}=event.target;

       setNote((preValue)=>{
          return{
            ...preValue,[name]:value,
          }
       })
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({title:"",content:"",})
    }
    const ExpandItem=()=>{
        setExpand(true)
    }
  return (
    <>
        <div className="text-center m-5">
          <form>
         {expand?
            <input type='text' placeholder='Title' name='title' className='Input-text' autoComplete='off' value={note.title} onChange={ActionPerform}/> :null}
            <textarea rows='' column='' className='textareas' name='content' placeholder='Write a name' value={note.content} onChange={ActionPerform} onClick={ExpandItem}/>
            {expand?
            <button type="button" className="btn btn-dark m-1" onClick={addEvent}>Add</button> :null}
          </form>
        </div>
    </>
  )
}

export default CreateNote