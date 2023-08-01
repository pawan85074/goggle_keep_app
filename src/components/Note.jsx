import React from 'react'
import './components.css'

function Note(props) {
    const clickDelete=()=>{
      props.deleteItem(props.id)
    }
  return (
    <>
       <div className="card" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <button type="button" className="btn btn-link" onClick={clickDelete}>Delete</button>
  </div>
</div>
    </>
  )
}

export default Note