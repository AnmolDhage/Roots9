import React from 'react'
import Menu1 from '../../Components/MenuPage/Menu1'
import Menu2 from '../../Components/MenuPage/Menu2'
import Menu3 from '../../Components/MenuPage/Menu3'
import Menu4 from '../../Components/MenuPage/Menu4'

const Menu = () => {
  return (
    <div >
      <Menu1 
      image={`/src/assets/cover.png`}
      title={`Our Menu`}
      />
      <Menu2/>
      <Menu3/>
      <Menu4/>
    </div>
  )
}

export default Menu