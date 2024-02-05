'use client'

import { NavBar, Treatments, Gallery, Staff, ContentSection } from '@/containers';
import { welcomeSection_1, welcomeSection_2 } from '@/utils/data';
import { Scrollspy } from "@makotot/ghostui";
import { useRef } from 'react';

export default function App() {

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  return (
    <Scrollspy sectionRefs={sectionRefs} offset={-326}>
      {({ currentElementIndexInViewport }) => (
        <>
          <NavBar CEIV={currentElementIndexInViewport} />
          <main id='root-main' data-cy='section-wrapper'>
            <ContentSection id='home' contentData={welcomeSection_1} ref={sectionRefs[0]} />
            <Treatments ref={sectionRefs[1]} />
            <ContentSection id='employment' contentData={welcomeSection_2} additionalStyles={{flexDirection: 'row-reverse'}} />
            <Staff ref={sectionRefs[2]} />
            <Gallery ref={sectionRefs[3]} />
          </main>
        </>
      )}
    </Scrollspy>
  );
}
