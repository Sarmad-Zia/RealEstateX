// src/components/ContactForm/index.jsx
import React, { useState, useRef, useEffect } from 'react';
import { styles } from './style';
import {
  SALES_EMAIL,
  SALES_PHONE,
  SALES_PHONE_HREF,
  PROJECT_TYPES,
  initialForm,
} from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed
import {
  User,
  Building2,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  MapPin,
  ChevronDown,
} from 'lucide-react';

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

function ProjectTypeDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (type) => {
    onChange(type);
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className={styles.dropdownRoot}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`${styles.dropdownTrigger} ${isOpen ? styles.dropdownTriggerOpen : ''}`}
      >
        <Building2 className={styles.dropdownIcon} />
        {value ? (
          <span className={styles.dropdownValue}>{value}</span>
        ) : (
          <span className={styles.dropdownPlaceholder}>Select the closest fit&hellip;</span>
        )}
        <ChevronDown
          className={`${styles.dropdownChevron} ${isOpen ? styles.dropdownChevronOpen : ''}`}
        />
      </button>

      {isOpen && (
        <ul role="listbox" className={styles.dropdownMenu}>
          {PROJECT_TYPES.map((type) => (
            <li
              key={type}
              role="option"
              aria-selected={value === type}
              onClick={() => handleSelect(type)}
              className={`${styles.dropdownOption} ${
                value === type ? styles.dropdownOptionActive : ''
              }`}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
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

  const handleProjectTypeChange = (value) => {
    setForm((prev) => ({ ...prev, projectType: value }));
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

            <h2 className={styles.heading}>Request a Tailored Property Management Strategy Session </h2>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactIconWrap}>
                  <Building2 className="w-4 h-4" />
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

                  <div className={styles.fieldWrapFull}>
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

                  <div className={styles.fieldWrapFull}>
                    <label className={styles.label}>Project Scale</label>
                    <ProjectTypeDropdown
                      value={form.projectType}
                      onChange={handleProjectTypeChange}
                    />
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

                <div className={styles.submitRow  }>
                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submiting…' : ' Submit'}
                  </button>
                  {/* <p className={styles.submitNote}>
                    No credit card, no obligation &mdash; just a scoped proposal.
                  </p> */}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}