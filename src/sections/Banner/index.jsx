import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { Button } from '../../components/CTAButton';
import { bannerContent } from '../../data/commonData';


export default function InterstitialBanner() {
  // Call the custom hook to get our observer ref
  const bannerRef = useScrollAnimation();

  return (
    <section 
      ref={bannerRef}
      className={`${styles.interstitialBanner} animate blur-in scroll-hidden`}
    >
      {/* Title element pops into view with a base delay configuration */}
      <h2 className={`${styles.bannerTitle} animate fade-up delay-1`}>
        {bannerContent.title}
      </h2>
      
      <p className={`${styles.bannerDesc} animate fade-up delay-2`}>
        {bannerContent.description}
      </p>
      
      <Button
        className={`${styles.bannerBtn} animate fade-up delay-3`}
        text={bannerContent.btnText}
        onPress={() => console.log('See AI in Action')}
      />
    </section>
  );
}




// without animation and interaction hook

// import React from 'react';
// import { styles } from './style';

// export default function InterstitialBanner() {
//   return (
//     <section className={styles.interstitialBanner}>
//       <h2 className={styles.bannerTitle}>This Is Not Just Software. This Is an AI-Powered Operating System.</h2>
//       <p className={styles.bannerDesc}>Replace slow manual processes with the speed of intelligent automation.</p>
//       <button className={styles.bannerBtn}>See AI in Action</button>
//     </section>
//   );
// }
