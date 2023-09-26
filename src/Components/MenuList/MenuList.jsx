import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = (props) => {
  return (
    <div className='w-2/4'>
        <div className='text-4xl font-bold text-green pt-16'>{props.title}</div>
        <div>
            {
                props.List.map((item,key)=>{
                    return <Link to={`/food/${item.link}`} key={key}>
                        <div className='flex items-center w-full justify-between my-6'>
                            <div>
                            <div className='text-2xl'>{item.title}</div>
                            <div>{item.desc}</div>
                            </div>
                            
                            <div className='text-2xl font-semibold'>{item.price}</div>
                        </div>
                    </Link>
                })
            }
        </div>
    </div>
  )
}

export default MenuList