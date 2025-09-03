'use client'

import { Template, ImageCard, Button, InputText} from '@/components';
import { Image } from '@/resources/image/image.resource';
import {useImageService} from '@/resources/image/image.service';
import { useState } from 'react';
import Link from 'next/link';

export default function GalleryPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [extension, setExtension] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
    
    setLoading(true);
    const result = await useService.buscar(query, extension);
    setImages(result);
    setLoading(false);
    

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
    <Template loading={loading}>
      
      <section className='flex flex-col items-center justify-center my-5'>
        <div className='flex space-x-4'>
          <InputText placeholder="Type Name or Tags" onChange={event => setQuery(event.target.value)}/>
          <select onChange={event => setExtension(event.target.value)} 
              className='border px-4 py-4 rounded-lg text-gray-900'>    
            <option value={''}>All formats</option>
            <option value={'PNG'}>PNG</option>
            <option value={'JPG'}>JPEG</option>
            <option value={'GIF'}>GIF</option>
          </select>
          <Button style='bg-gray-600 hover:bg-gray-700' label='Search' onClick={searchImages}/>
          <Link href={'/form'} className='flex items-center'>
            <Button style='bg-green-700  hover:bg-green-800 py-3.5' label='Add New'/>
          </Link>

        </div>
      </section>

      <section className="grid grid-cols-4 gap-6">

        {renderImages()}
        <ImageCard name='App' size={10000} uploadDate='01/01/2025' src='https://blog.aticamarketing.com.br/content/images/2025/01/Face-Ads-na-pr-tica.png' />
        <ImageCard name='Tech' size={10000} uploadDate='01/01/2025' src='https://cdn2.hubspot.net/hubfs/53/alternatives-to-Facebook-Google-and-Amazon-ads.jpg'/>
        <ImageCard name='ADS' size={10000} uploadDate='01/01/2025' src='https://influencelogic.com/wp-content/uploads/2022/03/ad.jpeg'/>
      </section>
    </Template>
  );
}