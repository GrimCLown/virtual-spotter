import React from 'react'

const studioPerfCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src={imageUrl} alt={altText} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <button className="text-blue-500 hover:text-blue-700">Learn More</button>
    </div>
  </div>
  )
}

export default studioPerfCard