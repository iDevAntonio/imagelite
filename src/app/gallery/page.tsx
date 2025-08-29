'use client'

import { Template, ImageCard } from '@/components';
import { Image } from '@/resources/image/image.resource';
import {useImageService} from '@/resources/image/image.service';
import { useState } from 'react';

export default function GalleryPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [extension, setExtension] = useState<string>('');

  async function searchImages() {
    
    console.log("Valor digitado: ", query);
    const result = await useService.buscar(query, extension);
    setImages(result);
    console.table(result);

  }

  function renderImageCard(image: Image) {
  
    return(
      <ImageCard
        key={image.url} name={image.name} 
        src={image.url} extension={image.extension}
        size={image.size} uploadDate={image.uploadDate}
      />
    )

  }

  function renderImages() {
    return images.map(renderImageCard);
  }
    

  return (
    <Template>
      
      <section className='flex flex-col items-center justify-center my-5'>
        <div className='flex space-x-4'>
          <input type="text" 
            onChange={event => setQuery(event.target.value)}
            className='border px-5 py-2 rounded-lg text-gray-900'/>
          <select onChange={event => setExtension(event.target.value)} 
              className='border px-4 py-4 rounded-lg text-gray-900'>    
            <option value={''}>All formats</option>
            <option value={'PNG'}>PNG</option>
            <option value={'JPG'}>JPEG</option>
            <option value={'GIF'}>GIF</option>
          </select>
          <button onClick={searchImages} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300'>Search</button>
          <button onClick={searchImages} className='bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors duration-300'>Add New</button>


        </div>
      </section>

      <section className="grid grid-cols-3 gap-6">

        {renderImages()}
        <ImageCard name='App' size={10000} uploadDate='01/01/2025' src='https://blog.aticamarketing.com.br/content/images/2025/01/Face-Ads-na-pr-tica.png' />
        <ImageCard name='Tech' size={10000} uploadDate='01/01/2025' src='https://cdn2.hubspot.net/hubfs/53/alternatives-to-Facebook-Google-and-Amazon-ads.jpg'/>
        <ImageCard name='ADS' size={10000} uploadDate='01/01/2025' src='https://influencelogic.com/wp-content/uploads/2022/03/ad.jpeg'/>
      </section>
    </Template>
  );
}