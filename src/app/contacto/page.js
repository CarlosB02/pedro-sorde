"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Check, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy";
import styles from "./page.module.css";

const InstagramIcon = ({ size = 16, className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);

    // Simulate clean API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <main className={styles.wrapper}>
      {/* Subtle background galaxy particles */}
      <div className={styles.backgroundGalaxy}>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={0.8}
          glowIntensity={0.4}
          saturation={0}
          hueShift={0} // silver / monochrome
          twinkleIntensity={0.3}
          rotationSpeed={0.01}
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.6}
          transparent={true}
          className={styles.galaxyCanvas}
        />
      </div>

      <div className="film-grain" />
      <Header />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Info Details */}
          <div className={styles.infoColumn}>
            <span className={styles.superTitle}>Contacto</span>
            <h1 className={styles.mainTitle}>Vamos criar algo real.</h1>
            <p className={styles.description}>
              Seja para um casamento intimista, cobertura de eventos ou um projeto editorial único, estou disponível para contar a tua história.
            </p>

            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:contact@pmastratto.com" className={styles.detailValue}>
                    contact@pmastratto.com
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>Instagram</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.detailValue}
                  >
                    @pmastratto
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>Localização</span>
                  <span className={styles.detailValue}>Lisboa, Portugal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Sleek Modern Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              {isSubmitted ? (
                <motion.div
                  className={styles.successWrapper}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.successIconWrapper}>
                    <Check size={32} />
                  </div>
                  <h3 className={styles.successTitle}>Mensagem Enviada</h3>
                  <p className={styles.successText}>
                    Obrigado pelo contacto. Responderei o mais brevemente possível para começarmos a delinear o teu projeto.
                  </p>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formField}>
                    <label 
                      htmlFor="name" 
                      className={`${styles.formLabel} ${form.name ? styles.labelShrink : ""}`}
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="O teu nome completo"
                      className={styles.input}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label 
                      htmlFor="email" 
                      className={`${styles.formLabel} ${form.email ? styles.labelShrink : ""}`}
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="O teu endereço de e-mail"
                      className={styles.input}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label 
                      htmlFor="subject" 
                      className={`${styles.formLabel} ${form.subject ? styles.labelShrink : ""}`}
                    >
                      Assunto / Categoria
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Ex: Casamento, Evento, Editorial..."
                      className={styles.input}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label 
                      htmlFor="message" 
                      className={`${styles.formLabel} ${form.message ? styles.labelShrink : ""}`}
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Fala-me sobre a tua ideia, conceito ou datas..."
                      className={styles.textarea}
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.btnContent}>A enviar...</span>
                    ) : (
                      <span className={styles.btnContent}>
                        Enviar Mensagem <Send size={14} style={{ marginLeft: 6 }} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
