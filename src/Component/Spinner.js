import React from 'react'
import loading1 from './assets/loading1.gif'

function Spinner() {
  return (
    <div className='my-6 '>
      <img className="my-3 mx-auto h-6 md:h-10" src={loading1} alt="loading" />
    </div>
  )
}

export default Spinner
