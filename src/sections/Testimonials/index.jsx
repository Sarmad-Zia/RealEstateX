import React, { useState } from 'react';
import { styles } from './style';
import { testimonials } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust path if needed
import '../../assets/animations/gerneralAnimations.css'; // Uses .animate, .scale-in, .pop-in, .pulse etc.
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TrustedBy from '../TrustedBy';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const sectionRef = useScrollAnimation();
  const current = testimonials[index];

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} animate fade-up scroll-hidden`}
    >
      <TrustedBy />

      <div className={styles.divider} ></div>

      <h2 className={styles.heading + 'pt-6'}>
        Our Customers Love <span className={styles.headingAccent}>RealEstateX</span>
      </h2>

      <div className={styles.carouselRow}>
        {/* Desktop Left Button */}
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className={`${styles.navBtn} hidden md:flex`}
        >
          <ChevronLeft size={30} />
        </button>

        {/* Card Component (Optimized Responsiveness) */}
        <div key={current.id} className={`${styles.card} animate scale-in`}>
          <p className={styles.quoteText}>
            "{current.before}
            <span className={styles.quoteBold}>{current.bold}</span>
            {current.after}"
          </p>

          <div className={styles.authorRow}>
            {current.avatarType === "photo" ? (
              <img
                src={current.avatarUrl}
                alt={current.name}
                className={styles.avatarPhoto}
              />
            ) : (
              <span className={styles.avatarInitials}>{current.initials}</span>
            )}
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>{current.name}</p>
              <p className={styles.authorRole}>
                {current.role}
                <br />
                {current.company}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Right Button */}
        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className={`${styles.navBtn} hidden md:flex`}
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Mobile Navigation Controls Row */}
      <div className={styles.mobileNavRow}>
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className={styles.navBtn}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className={styles.navBtn}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}