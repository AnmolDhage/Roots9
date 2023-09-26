import React from 'react'
import { useParams } from 'react-router-dom'
import './foodPage.css'
import { foodInfo } from '../../Data/FoodData'

const FoodPage = () => {
    const { dish } = useParams()
    const info = foodInfo[dish]
    return (

        <div className='flex flex-col items-center  py-9 bg-slate-100 min-h-screen'>
            <div><img className='h-24' src="/public/logo2.png" alt="" /></div>
            <model-viewer alt="3d cake" src={`/public/${info.src}`} shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
            <div className='flex flex-col items-center gap-3'>
                <div className='text-5xl font-bold text-dark-brown'>{info.name}</div>
                <div className="w-96 text-center">{info.desc}</div>
            </div>
           
        </div>
    )
}

export default FoodPage