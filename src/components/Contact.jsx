import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formResp, setFormResp] = useState('');

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/CQL-Interactive", icon: "💻" },
    { name: "Discord", url: "https://discord.gg/Evu8WXm27z", icon: "💬" },
    { name: "Faire un don", url: "https://fr.tipeee.com/cql-interactive", icon: "💛" },
    { name: "Instagram", url: "https://www.instagram.com/cql_interactive", icon: "📷" },
    { name: "TikTok", url: "https://www.tiktok.com/@cql_interactive", icon: "🎵" },
    { name: "YouTube", url: "https://www.youtube.com/@cql-interactive", icon: "📺" },
    { name: "Bento", url: "https://bento.me/cql-interactive", icon: "🔗" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormResp('Envoi en cours...');
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());

    try {
      const r = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await r.json();
      if (json.ok) {
        setFormResp(json.message || 'Message envoyé — merci !');
        e.target.reset();
      } else {
        setFormResp(json.message || "Erreur lors de l'envoi.");
      }
    } catch (error) {
      setFormResp('Erreur réseau.');
    }
  };

  return (
    <section id="contact" className="panel alt contact-panel">
      <div className="container">
        <h2>Nous contacter</h2>
        <div className="contact-grid">
          <motion.form
            id="contactForm"
            className="card glass contact-form fade-in-up delay-1"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label>
              Nom*
              <input required name="name" type="text" placeholder="Votre nom" />
            </label>
            <label>
              Email*
              <input required name="email" type="email" placeholder="Votre email" />
            </label>
            <label>
              Message*
              <textarea required name="message" placeholder="Votre message"></textarea>
            </label>
            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer
            </motion.button>
            <p className="form-response">{formResp}</p>
          </motion.form>

          <motion.aside
            className="card glass contact-info fade-in-up delay-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4>Retrouvez-nous</h4>
            <ul className="links">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 0.05 * index }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label={link.name}>{link.icon} </span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
