import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { edgeGridContent } from '../../data/commonData';

export default function EdgeGrid() {
  const headerRef = useScrollAnimation();
  const tableRef = useScrollAnimation();

  return (
    <section className={`${styles.py5} ${styles.bgWhite}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block: Entrance sequence utilizing blur-in */}
        <div 
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <h2 className={styles.sectionTitle}>{edgeGridContent.sectionTitle} <span className="text-gradient">{edgeGridContent.sectionTitleAccent}</span> {edgeGridContent.sectionTitleSuffix}</h2>
        </div>
        
        {/* Table Wrapper Block: Glides up comfortably using fade-up once visible */}
        <div 
          ref={tableRef}
          className={`${styles.tableResponsive} animate fade-up scroll-hidden`}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>{edgeGridContent.col1Header}</th>
                <th className={styles.th}>{edgeGridContent.col2Header}</th>
                <th className={styles.th}>{edgeGridContent.col3Header}</th>
              </tr>
            </thead>
            <tbody>
              {edgeGridContent.rows.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.tdLabel}>{row.capability}</td>
                  <td className={styles.tdValueSuccess}>{row.propertyverx}</td>
                  <td className={styles.tdValueMuted}>{row.legacy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}






// without animation and interaction hook


// import React from 'react';
// import { styles } from './style';

// export default function EdgeGrid() {
//   return (
//     <section className={`${styles.py5} ${styles.bgWhite}`}>
//       <div className="max-w-7xl mx-auto">
//         <div className={styles.sectionHeader}>
//           <h2 className={styles.sectionTitle}>The <span className="text-gradient">PropertyVerx</span> Edge</h2>
//         </div>
        
//         <div className={styles.tableResponsive}>
//           <table className={styles.table}>
//             <thead>
//               <tr>
//                 <th className={styles.th}>Capability</th>
//                 <th className={styles.th}>PropertyVerx AI-OS</th>
//                 <th className={styles.th}>Legacy Systems / Excel</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className={styles.tdLabel}>Data Access</td>
//                 <td className={styles.tdValueSuccess}>AI Command Search</td>
//                 <td className={styles.tdValueMuted}>Manual Filtering</td>
//               </tr>
//               <tr>
//                 <td className={styles.tdLabel}>Revenue Recovery</td>
//                 <td className={styles.tdValueSuccess}>Automated Workflows</td>
//                 <td className={styles.tdValueMuted}>Manual Phone Calls</td>
//               </tr>
//               <tr>
//                 <td className={styles.tdLabel}>Security</td>
//                 <td className={styles.tdValueSuccess}>End-to-End Encryption</td>
//                 <td className={styles.tdValueMuted}>Local Excel Risks</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }



