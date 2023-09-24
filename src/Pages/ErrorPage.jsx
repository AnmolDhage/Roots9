import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-screen'>
      <div className='text-5xl font-semibold'>Opss!</div>
      <div>This page is under development or not available.</div>
      <Link to={'/'} className='underline'>Go back</Link>
    </div>
  )
}

export default ErrorPage