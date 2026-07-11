// data.js
// Path assumes this component lives 2 directories below `src`, matching the
// same depth as the `../../hooks/...` import used elsewhere in this project —
// adjust the `../../` prefix below if your actual nesting differs.
import fbrLogo from '../../assets/images/complaince/fbr.png';
import reraLogo from '../../assets/images/complaince/rera.png';
import ldaLogo from '../../assets/images/complaince/lda.png';
import psebLogo from '../../assets/images/complaince/pseb.png';
import rudaLogo from '../../assets/images/complaince/ruda.png';
import rdaLogo from '../../assets/images/complaince/rda.png';
import isoLogo from '../../assets/images/complaince/iso.png'; 


export const accreditations = [
  { id: 'fbr', logo: fbrLogo, alt: 'Federal Board of Revenue (FBR)' },
  { id: 'rera', logo: reraLogo, alt: 'Real Estate Regulatory Authority (RERA)' },
  { id: 'lda', logo: ldaLogo, alt: 'Lahore Development Authority (LDA)' },
  { id: 'pseb', logo: psebLogo, alt: 'Pakistan Software Export Board (PSEB)' },
  { id: 'ruda', logo: rudaLogo, alt: 'Ravi Urban Development Authority (RUDA)' },
  { id: 'rda', logo: rdaLogo, alt: 'Rawalpindi Development Authority (RDA)' },
  { id: 'iso', logo: isoLogo, alt: 'International Organization for Standardization (ISO)' },
  // { id: 'pseb', logo: psebLogo, alt: 'Pakistan Software Export Board (PSEB)' },
];