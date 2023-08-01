import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const curYear=new Date().getFullYear();
  return (
    <>
        <p className="text-center mt-5">CopyRight © {curYear}</p>
    </>
  )
}

export default Footer