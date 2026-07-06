import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style.js'
import { footprintData } from './data.js'
import { Button } from '../../components/CTAButton/index.jsx'

const ANIMATION_DURATION = 1800 // ms

function easeOutQuad(t) {
    return t * (2 - t)
}

function StatBlock({ item, shouldAnimate }) {
    const [current, setCurrent] = useState(0)
    const frameRef = useRef(null)

    useEffect(() => {
        if (!shouldAnimate) return

        const start = performance.now()

        const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1)
            const eased = easeOutQuad(progress)
            setCurrent(Math.round(eased * item.value))

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(tick)
            }
        }

        frameRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frameRef.current)
    }, [shouldAnimate, item.value])

    return (
        <div className={styles.block}>
            <span className={styles.value}>
                {item.prefix}
                {current}
                {item.suffix}
            </span>
            <span className={styles.label}>{item.label}</span>
        </div>
    )
}

function FootprintStrip() {
    const sectionRef = useRef(null)
    const [hasTriggered, setHasTriggered] = useState(false)

    // Trigger the count-up once, the first time the section enters view
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setHasTriggered(true)
                }
            },
            { threshold: 0.35 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [hasTriggered])

    return (
        <section ref={sectionRef} className={styles.section}>
            <p className={styles.tag}>Our Operating Footprint</p>

            <div className={styles.grid}>
                {footprintData.map((item, index) => (
                    <StatBlock key={index} item={item} shouldAnimate={hasTriggered} />
                ))}
            </div>

            <div className={styles.divider} />

            <p className={styles.subtext}>
                Enterprise-grade real estate infrastructure trusted across the Asian
                market to eliminate manual paperwork and secure operational records.
            </p>
            <div className="flex justify-center mt-6">
                <Button text={"Book Live Demo"} className={styles.ctaBtn}  />
            </div>
        </section>
    )
}

export default FootprintStrip