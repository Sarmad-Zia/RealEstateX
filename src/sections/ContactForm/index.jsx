import React, { useState } from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed
import {
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

// TODO: replace with your real sales inbox and line before this goes live.
const SALES_EMAIL = 'sales@realestatex.com';
const SALES_PHONE = '+92 300 1234567';
const SALES_PHONE_HREF = 'tel:+923001234567';

// Mirrors the pricing tier names so a prospect's self-selection here lines
// up with the Pricing section instead of introducing new, unrelated labels.
const PROJECT_TYPES = [
  'Emerging Society',
  'Established Enterprise',
  'Mega-Project Elite',
  'Not Sure Yet',
];

const initialForm = {
  fullName: '',
  companyName: '',
  workEmail: '',
  phone: '',
  projectType: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = 'Required';
  if (!form.companyName.trim()) errors.companyName = 'Required';
  if (!form.workEmail.trim()) {
    errors.workEmail = 'Required';
  } else if (!/^\S+@\S+\.\S+$/.test(form.workEmail)) {
    errors.workEmail = 'Enter a valid email';
  }
  return errors;
}

export default function ContactForm({ onSubmit = async () => {} }) {
  const contentRef = useScrollAnimation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await onSubmit(form);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className={styles.section}>
      <div ref={contentRef} className="animate fade-up scroll-hidden">
        <div className={styles.grid}>
          {/* Left context column */}
          <div className={`${styles.leftCol} animate slide-left delay-1`}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Talk to Our Team</span>
            </div>

            <h2 className={styles.heading}>Request a Proposal</h2>
            <p className={styles.subhead}>
              Tell us about your society or portfolio and we&apos;ll scope a proposal &mdash;
              or just reach us directly using the details below.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactIconWrap}>
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className={styles.contactLabel}>Phone</p>
                  <a href={SALES_PHONE_HREF} className={styles.contactValue}>
                    {SALES_PHONE}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIconWrap}>
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <a href={`mailto:${SALES_EMAIL}`} className={styles.contactValue}>
                    {SALES_EMAIL}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIconWrap}>
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className={styles.contactLabel}>Based In</p>
                  <p className={styles.contactValue}>Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className={`${styles.formCard} animate slide-right delay-2`}>
            {isSubmitted ? (
              <div className={styles.successBox}>
                <CheckCircle2 className={styles.successIcon} />
                <div>
                  <p className={styles.successTitle}>Request received</p>
                  <p className={styles.successText}>
                    Thanks, {form.fullName.split(' ')[0] || 'there'} &mdash; our enterprise team
                    will get back to you shortly. In the meantime, feel free to call{' '}
                    {SALES_PHONE} directly.
                  </p>
                  <button type="button" onClick={handleReset} className={styles.successReset}>
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formGrid}>
                  <div className={styles.fieldWrap}>
                    <label className={styles.label} htmlFor="fullName">
                      Full Name
                    </label>
                    <div className={styles.inputWrap}>
                      <User className={styles.inputIcon} />
                      <input
                        id="fullName"
                        type="text"
                        className={styles.input}
                        placeholder="Your name"
                        value={form.fullName}
                        onChange={handleChange('fullName')}
                      />
                    </div>
                    {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label className={styles.label} htmlFor="companyName">
                      Society / Company Name
                    </label>
                    <div className={styles.inputWrap}>
                      <Building2 className={styles.inputIcon} />
                      <input
                        id="companyName"
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Sunrise Enclave Housing Society"
                        value={form.companyName}
                        onChange={handleChange('companyName')}
                      />
                    </div>
                    {errors.companyName && (
                      <span className={styles.errorText}>{errors.companyName}</span>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label className={styles.label} htmlFor="workEmail">
                      Work Email
                    </label>
                    <div className={styles.inputWrap}>
                      <Mail className={styles.inputIcon} />
                      <input
                        id="workEmail"
                        type="email"
                        className={styles.input}
                        placeholder="you@company.com"
                        value={form.workEmail}
                        onChange={handleChange('workEmail')}
                      />
                    </div>
                    {errors.workEmail && <span className={styles.errorText}>{errors.workEmail}</span>}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label className={styles.label} htmlFor="phone">
                      Phone Number
                    </label>
                    <div className={styles.inputWrap}>
                      <Phone className={styles.inputIcon} />
                      <input
                        id="phone"
                        type="tel"
                        className={styles.input}
                        placeholder="+92 3XX XXXXXXX"
                        value={form.phone}
                        onChange={handleChange('phone')}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldWrapFull}>
                    <label className={styles.label} htmlFor="projectType">
                      Project Scale
                    </label>
                    <div className={styles.inputWrap}>
                      <Building2 className={styles.inputIcon} />
                      <select
                        id="projectType"
                        className={styles.select}
                        value={form.projectType}
                        onChange={handleChange('projectType')}
                      >
                        <option value="">Select the closest fit&hellip;</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldWrapFull}>
                    <label className={styles.label} htmlFor="message">
                      Project Details
                    </label>
                    <div className={styles.inputWrapStart}>
                      <MessageSquare className={styles.inputIcon} />
                      <textarea
                        id="message"
                        rows={4}
                        className={styles.textarea}
                        placeholder="Number of files, current tracking method, timeline, anything else worth knowing."
                        value={form.message}
                        onChange={handleChange('message')}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending…' : 'Request Proposal'}
                  </button>
                  <p className={styles.submitNote}>
                    No credit card, no obligation &mdash; just a scoped proposal.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}