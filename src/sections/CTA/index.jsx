import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { Button } from '../../components/CTAButton';

export default function CTA() {
  const ctaContentRef = useScrollAnimation();

  return (
    <section className="py-18 px-6 bg-rough-black dark:bg-mint text-center text-white">
      <h1 className=' font-poppins text-3xl ' >Talk to our team.</h1>
      <Button
        className="bg-paper font-poppins text-xl text-rough-black px-6 py-2 rounded-full animate-pulse mt-6 hover:bg-paper/90 transition-colors duration-300"
        onClick={() => {console.log('CTA button clicked');}}
        text="Book a Demo"
      />
    </section>
  );
}
