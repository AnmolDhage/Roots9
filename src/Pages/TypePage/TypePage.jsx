import React from 'react'
import Menu1 from '../../Components/MenuPage/Menu1'
import MenuList from '../../Components/MenuList/MenuList'
import { starterList } from '../../Data/MenuList'

const TypePage = (props) => {
  return (
    <div className='flex flex-col items-center'>
        <Menu1 
      image={props.image}
      title={props.title}
         />
         <MenuList
         title={`Veg`}
         List={props.list}
         />
    </div>
  )
}

export default TypePage