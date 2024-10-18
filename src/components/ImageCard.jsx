import React from 'react'

function ImageCard({ image }) {

	const tags = image.tags.split(',');

	return (
		<div className='max-w-sm mb-4 overflow-hidden rounded shadow-lg shadow-black/40'>
			<img src={image.webformatURL} alt="" className='w-full' />

			<div className='px-6 py-4'>
				<div className='px-4 py-2 font-semibold text-purple-500'>
					Photo by {image.user}
				</div>

				<ul className='px-4 py-2'>
					<li><strong>Views: </strong>{image.views}</li>
					<li><strong>Downloads: </strong>{image.downloads}</li>
					<li><strong>Likes: </strong>{image.likes}</li>
				</ul>

				<div>
					{tags.map((tag, index) => <span key={index} className='inline-block px-4 py-1 mx-2 mb-2 font-medium text-gray-500 rounded-full cursor-pointer bg-slate-200'>{tag}</span>)}
				</div>
			</div>

		</div>
	)
}

export default ImageCard;
