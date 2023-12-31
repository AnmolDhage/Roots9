import React from 'react'
import { Link } from 'react-router-dom'

const Menu4 = () => {

    const types = [
        {
            image: '/starter.png',
            title: 'Starter',
            link: '/starter'
        }, {
            image: '/main course.png',
            title: 'Main Course',
            link: '/main-course'
        }, {
            image: '/dessert.png',
            title: 'Desserts',
            link: '/desserts'
        },{
            image: '/world cuisine.png',
            title: 'World Cuisine',
            link: '/world-cuisine'
        }, {
            image: '/soup.png',
            title: 'World Cuisine Soups',
            link: '/soup'
        }, {
            image: '/kidsMenu.png',
            title: 'Kids Menu',
            link: '/kidsMenu'
        },
    ]

    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-3 grid-flow-row gap-14 py-20">
                {types.map((type,key) => {
                    return <Link to={type.link} key={key} className='flex flex-col items-center cursor-pointer gap-1'>
                    <img className='h-48' src={type.image} alt="" />
                    <div className='text-xl font-semibold text-brown underline' >{type.title}</div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Menu4