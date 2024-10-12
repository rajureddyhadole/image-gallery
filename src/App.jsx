import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';

const API_KEY = '43926827-4994b2e98362abbd04186a793';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const searchImages = async (name) => {
    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&pretty=true`);

    const data = await response.json();

    setImages(data.hits);
  }

  useEffect(() => {
    searchImages('dogs');
  }, []);

  return (
    <div className='container mx-auto mb-10'>
      <div className='flex items-center justify-center my-8'>
        <input className='h-10 pl-4 font-medium border-b-2 border-gray-400 shadow-lg outline-none' type="text" placeholder='Search for images...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <button className='h-10 px-4 text-white bg-blue-500 rounded shadow-lg focus:outline-none hover:bg-blue-600'
          onClick={() => {
            searchImages(searchTerm);
            setIsLoading(false);
          }}>Search</button>
      </div>

      <div className='flex justify-center'>
        <div className='grid items-center grid-cols-1 gap-4 mt-2 sm:grid-cols-2 lg:grid-cols-3'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />))}
        </div>
      </div>
    </div>
  )
}

export default App;
