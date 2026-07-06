import React from 'react'
import { styles } from './style.js'
import { trustedClientsIcons } from './images.js'
import AssetPortfolio from '../AssetsPorfolio/index.jsx'

function TrustedBy() {
    // Duplicate the array so the marquee loops seamlessly
    const marqueeIcons = [...trustedClientsIcons, ...trustedClientsIcons]

    return (
        <div className={styles.trustContainer}>
            <h2 className={styles.trustTitle}>Trusted by leading brands</h2>

            <div className={styles.trustGrid}>
                <div className={styles.trustTrack}>
                    {marqueeIcons.map((image, index) => (
                        <div key={index} className={styles.trustItem}>
                            <img
                                src={image}
                                alt={`Trusted Client ${index + 1}`}
                                className={styles.trustImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* This will now perfectly stay underneath the brand marquee on ALL devices */}
            <div className="bg-white mt-10 mb-0">
                <AssetPortfolio />
            </div>
        </div>
    )
}

export default TrustedBy