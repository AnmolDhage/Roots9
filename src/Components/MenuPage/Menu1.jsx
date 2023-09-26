import React from 'react'
import { Link } from 'react-router-dom'

const Menu1 = (props) => {
  return (
    <div className='flex relative justify-center '>
    <img className='w-screen ' src={props.image} alt="" />
      <div className='font-pacifico absolute italic top-0 w-full h-full flex justify-center items-center text-7xl font-extrabold text-white backdrop-brightness-50 font'>
      {props.title}
      </div>
      <div className='absolute w-3/4 p-4'>
       <Link to='/'><img src="/public/logo.png" alt="" /></Link> 
      </div>
      </div>
  )
}

export default Menu1