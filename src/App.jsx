import React, {useState} from 'react';
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

  return (
    <div className='w-[90%] mx-auto'>
      <div className='flex items-center justify-center my-4'>
        <input className='h-8 pl-4 font-medium border-b-2 border-gray-400 shadow-lg' type="text" placeholder='Search for images...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className='px-2 py-1 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600'
        onClick={() => {
          searchImages(searchTerm);
          setIsLoading(false);
        }}>Search</button>
      </div>

      <div className='grid grid-cols-3 gap-1 mt-2'>
        {images.map(image => (
          <ImageCard key={image.id} image={image} />))}
      </div>
    </div>
  )
}

export default App;
