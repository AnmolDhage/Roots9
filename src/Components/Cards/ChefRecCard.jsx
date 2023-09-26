import React from 'react'
import { Link } from 'react-router-dom'

const ChefRecCard = () => {
  return (
    <Link to={"chefs-recommended"}>
    <div className='w-96 rounded-3xl overflow-hidden relative cursor-pointer'>
        <img className='' src="/public/Cooking.png" alt="" />
        <div className='absolute top-3 left-3 text-white font-bold text-2xl'>Chef's <br/>Recommended</div>
    </div>
    </Link>
  )
}

export default ChefRecCard