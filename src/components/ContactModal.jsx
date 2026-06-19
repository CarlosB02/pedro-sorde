"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import styles from "./ContactModal.module.css";

export default function ContactModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    
    setIsSubmitting(true);
    // Simulate API call with a luxury feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", projectType: "", message: "" });
      
      // Auto close after 3 seconds on success
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} // Prevent overlay click closing
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
              <X size={22} />
            </button>

            {isSubmitted ? (
              <motion.div 
                className={styles.successWrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className={styles.successIconWrapper}>
                  <Check size={32} />
                </div>
                <h3 className={styles.successTitle}>Inquiry Received</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. Let&apos;s turn your vision into visual art soon.
                </p>
              </motion.div>
            ) : (
              <>
                <div className={styles.header}>
                  <span className={styles.subtitle}>Inquire</span>
                  <h3 className={styles.title}>Start a Project</h3>
                  <p className={styles.description}>
                    Let&apos;s create something distinct. Fill in your details and I will be in touch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.fieldGroup}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="E.g., Jane Doe"
                        className={styles.input}
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="E.g., jane@example.com"
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="projectType" className={styles.label}>Project Category</label>
                    <select 
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select an option</option>
                      <option value="wedding">Wedding / Elopement</option>
                      <option value="nightlife">Nightlife / Concert</option>
                      <option value="editorial">Editorial / Exhibition</option>
                      <option value="other">Other Unique Concept</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Tell me about your vision</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe the atmosphere, location, and dates..."
                      className={styles.textarea}
                      rows={4}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className={styles.loadingText}>Submitting inquiry...</span>
                    ) : (
                      <span>Submit Request</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
