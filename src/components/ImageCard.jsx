import React from 'react'

function ImageCard( { image } ) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg min-h-sm'>
        <img src={image.webformatURL} alt="" className='w-full'/>

    	<div className='px-6 py-4'>
				<div className='font-semibold text-purple-500 px-4 py-2'>
					Photo by {image.user}
				</div>

				<ul className='px-4 py-2'>
					<li><strong>Views: </strong>{image.views}</li>
					<li><strong>Downloads: </strong>{image.downloads}</li>
					<li><strong>Likes: </strong>{image.likes}</li>
				</ul>

				<div>
					<span className='bg-slate-200 inline-block text-gray-500 font-medium px-4 py-1 rounded-full mx-2 mb-2'>#tag1</span>
					<span className='bg-slate-200 inline-block text-gray-500 font-medium px-4 py-1 rounded-full mx-2 mb-2'>#tag2</span>

					<span className='bg-slate-200 inline-block text-gray-500 font-medium px-4 py-1 rounded-full mx-2 mb-2'>#tag3</span>

				</div>
			</div>
      
    </div>
  )
}

export default ImageCard;
