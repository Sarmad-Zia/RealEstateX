import { Cloud, Server } from "lucide-react";

export const hostingOptions = [
  {
    icon: Cloud,
    title: 'AWS Cloud Hosting',
    caption: 'Rapid deployment on Tier-1 AWS infrastructure.',
  },
  {
    icon: Server,
    title: 'On-Premises Server',
    caption: 'Full data residency on infrastructure you control.',
  },
];

export const specs = [
  {
    title: 'End-to-End Data Encryption',
    caption: 'Every record and transaction is protected, at rest and in transit.',
  },
  {
    title: 'Daily Automated Backups',
    caption: 'Nightly cloud backups so no ledger entry or agreement is ever lost.',
  },
  {
    title: 'Immutable Activity Logs',
    caption: 'Every user action is timestamped and permanently recorded for auditability.',
  },
];