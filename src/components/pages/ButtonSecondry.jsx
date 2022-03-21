import React from 'react'
import "./btnsecondry.css"

function ButtonSecondry({name, type, onClick}) {

  return (
    <button className='secondrytbn' onClick={onClick} type={type}>{name}</button>
  )
}

export default ButtonSecondry