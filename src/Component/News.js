import React from 'react'
import newsImageNotFound from './assets/newsImageNotFound.jpg'
function News(props) {

  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    // <div className='flex gap-12 flex-wrap justify-center mt-6'  >
    <div className={`relative box-border mx-2 max-w-sm rounded overflow-hidden shadow-lg ${props.mode === 'dark' ? 'shadow-amber-500' : 'shadow-red-500'} pb-6`}>

      <div className='absolute flex justify-end right-0'>
        <span className='bg-red-600 rounded text-sm p-0.5 text-white'>{source}</span>
      </div>

      <img className="w-full h-44" src={!imageUrl ? `${newsImageNotFound}` : imageUrl} alt="News" />

      <div className="px-2 md:px-6 text-sm md:text-base pt-4 mb-20">
        <h1 className={`${props.mode === 'dark' ? 'text-yellow-400' : 'text-red-600'} font-bold text-lg md:text-2xl mb-2`}>{title}</h1>
        <p className={`${props.mode === 'dark' ? 'text-white' : 'text-lime-900-900'}`}>{description}</p>
      </div>

      <div className="absolute bottom-4 px-2 md:px-6">
        <span className={`inline-block rounded w-full py-1 font-semibold ${props.mode === 'dark' ? 'text-blue-300' : 'text-green-700'} mb-1`}><small className="text-xs">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></span>
        <a href={url} className={`${props.mode === 'dark' ? 'bg-amber-400 text-black hover:bg-amber-500' : 'bg-gray-800 text-white hover:bg-gray-700'} text-sm font-medium p-1 rounded`}>Read More</a>
      </div>
    </div>
    // </div>
  )
}

export default News