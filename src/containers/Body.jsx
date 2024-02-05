import { Treatments, Gallery, Staff, ContentSection } from '@/containers';
import { welcomeSection_1, welcomeSection_2 } from '@/utils/data';

export default function Body() {
  return (
    <main>
      <ContentSection id='home' contentData={welcomeSection_1} />
      <Treatments />
      <ContentSection id='employment' contentData={welcomeSection_2} additionalStyles={{flexDirection: 'row-reverse'}} />
      <Staff />
      <Gallery />
    </main>
  );
}
