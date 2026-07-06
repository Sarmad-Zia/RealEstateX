import React, { useRef, useState, useEffect, useCallback } from 'react'
import { styles } from './style.js'
import { assetData } from './data.js'
import { ChevronLeft,ChevronRight } from 'lucide-react'

const GAP = 20 // must match the `gap-5` in styles.track

function AssetPortfolio() {
    const realCount = assetData.length
    // Triple the data so there's always a real-looking buffer to slide into
    const loopedAssets = [...assetData, ...assetData, ...assetData]

    const viewportRef = useRef(null)
    const trackRef = useRef(null)
    const [index, setIndex] = useState(realCount)
    const [cardStep, setCardStep] = useState(280)

    // Measure actual rendered card width so the carousel is responsive
    // instead of relying on a hardcoded pixel guess
    useEffect(() => {
        const measure = () => {
            const card = trackRef.current?.querySelector('[data-card]')
            if (card) setCardStep(card.offsetWidth + GAP)
        }
        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    // Apply the transform whenever index or size changes, with animation
    useEffect(() => {
        const track = trackRef.current
        if (!track) return
        track.style.transition = 'transform 450ms ease-in-out'
        track.style.transform = `translateX(-${index * cardStep}px)`
    }, [index, cardStep])

    const goNext = () => setIndex((prev) => prev + 1)
    const goPrev = () => setIndex((prev) => prev - 1)

    // When we've drifted into a cloned buffer zone, snap back to the
    // equivalent spot in the middle copy with the transition disabled
    // first, then a forced reflow, so the jump is completely invisible
    const handleTransitionEnd = useCallback(() => {
        const track = trackRef.current
        if (!track) return

        let target = null
        if (index >= realCount * 2) target = index - realCount
        else if (index < realCount) target = index + realCount

        if (target !== null) {
            track.style.transition = 'none'
            track.style.transform = `translateX(-${target * cardStep}px)`
            // force reflow so the browser commits the no-transition state
            // before React re-renders with the new index
            track.getBoundingClientRect()
            setIndex(target)
        }
    }, [index, realCount, cardStep])

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                One platform for every asset in your portfolio.
            </h2>
            <h3 className="text-center text-sm text-[var(--color-ink)] font-[var(--font-inter)] mb-6">
                Our ERP solution is designed to manage all type Real Extate assets in one place.
            </h3>

            <div ref={viewportRef} className={styles.viewport}>
                <div
                    ref={trackRef}
                    className={styles.track}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {loopedAssets.map((asset, i) => (
                        <div key={i} data-card className={styles.card}>
                            <div className={styles.cardImageWrap}>
                                <img
                                    src={asset.image}
                                    alt={asset.name}
                                    className={styles.cardImage}
                                />
                            </div>

                            <div className={styles.cardFooter}>
                                <p className={styles.cardName}>{asset.name}</p>
                                <p className={styles.cardType}>{asset.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.controls}>
                <button onClick={goPrev} aria-label="Previous" className={styles.navButton}>
                    <ChevronLeft size={30} />
                </button>
                <button onClick={goNext} aria-label="Next" className={styles.navButton}>
                    <ChevronRight size={30} />
                </button>
            </div>
        </section>
    )
}

export default AssetPortfolio