import propertyImage from "../../assets/images/feature/landManagement.png";
import accountingImage from "../../assets/images/feature/installments.png";
import realtorImage from "../../assets/images/feature/agentComission.png";
import listingsImage from "../../assets/images/feature/listingOfProperty.png";
import customerImage from "../../assets/images/feature/tucep.png";

import {
  Building2,
  Receipt,
  Handshake,
  LayoutDashboard,
  Users,
} from "lucide-react";

export const featureData = {
  property: {
    title: "Multi-Mode Property, Plot & Land Management",
    icon: Building2,
    image: propertyImage,
    text: "Efficiently manage vast development portfolios, commercial spaces, or multi-family properties under rental, purchase, or off-plan booking modes.",
  },
  accounting: {
    title: "Advanced Installment Plans & Dynamic Accounting",
    icon: Receipt,
    image: accountingImage,
    text: "Create custom down-payment, balloon-payment, and monthly installment matrices with automated ledger calculation, rebates, and instant digital receipts.",
  },
  realtor: {
    title: "Realtor, Broker & Commission Management",
    icon: Handshake,
    image: realtorImage,
    text: "Keep your sales pipelines healthy. Track external broker networks and internal agents with automated multi-tier commission splits and automated rebate structures.",
  },
  listings: {
    title: "Secure Public Property Listings Portal",
    icon: LayoutDashboard,
    image: listingsImage,
    text: "Push properties live directly from your internal inventory onto an external, lightning-fast public listing site complete with high-res galleries and interactive booking forms.",
  },
  customer: {
    title: "Transparent End-User Customer Portal",
    icon: Users,
    image: customerImage,
    text: "Give buyers and tenants complete control. Let them log in to track their remaining balance, download active invoices, view payment histories, and request maintenance.",
  },
};