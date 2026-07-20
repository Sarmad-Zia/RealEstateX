import { images } from '../../assets/images.js';

export const operations = [
  {
    label: "Asset & Landlord Operations",
    image: images.operations.assetsLandlordOps,
    alt: "Landlord property configuration screen showing asset details and inspection alerts",
    desc: "Configure every property — type, interior, exterior, amenities — and track inspections, work orders, and asset status in one place.",
  },
  {
    label: "Agent Operations",
    image: images.operations.agentOps,
    alt: "Agent assignment and commission invoice screen",
    desc: "Agents see only the properties they're assigned to, with automatic commission lines generated the moment a tenancy agreement is confirmed.",
  },
  {
    label: "Tenant Operations",
    image: images.operations.tenantOps,
    alt: "Tenant maintenance request and booking confirmation screen",
    desc: "Tenants browse available properties, reserve or buy directly, and submit maintenance requests without ever calling the office.",
  },
  {
    label: "Finance Operations",
    image: images.operations.financeOps,
    alt: "Billing dashboard showing synced vendor and tenant invoices",
    desc: "Installments, partial payments, and vendor invoices are generated automatically from confirmed agreements — no manual entry required.",
  },
];