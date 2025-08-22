import { Template, ImageCard } from '@/components';

export default function GalleryPage() {
  return (
    <Template>
      <section className="grid grid-cols-3 gap-6">
        <ImageCard name='Natureza' size='10MB' uploadDate='01/01/2025' src='https://assets.weforum.org/article/image/responsive_large_0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg' />
        <ImageCard name='App' size='10MB' uploadDate='01/01/2025' src='https://blog.aticamarketing.com.br/content/images/2025/01/Face-Ads-na-pr-tica.png' />
        <ImageCard name='Tech' size='10MB' uploadDate='01/01/2025' src='https://cdn2.hubspot.net/hubfs/53/alternatives-to-Facebook-Google-and-Amazon-ads.jpg'/>
        <ImageCard name='ADS' size='10MB' uploadDate='01/01/2025' src='https://influencelogic.com/wp-content/uploads/2022/03/ad.jpeg'/>
      </section>
    </Template>
  );
}