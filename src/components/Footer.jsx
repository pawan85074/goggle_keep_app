import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const curYear=new Date().getFullYear();
  return (
    <>
        <p className='text-center'>CopyRight © {curYear}</p>
    </>
  )
}

export default Footer