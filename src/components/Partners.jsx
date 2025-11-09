import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    {
      name: "Veltrona",
      description: "Innovation, design et développement sous une même signature.",
      link: "https://veltrona.fr",
      logo: "/logos/veltrona-logo.png"
    }
  ];

  return (
    <section id="partenaires" className="panel">
      <div className="container">
        <h2>Nos Partenaires</h2>
        <div className="grid projects-grid">
          {partners.map((partner, index) => (
            <motion.div
              className="card glass fade-in-up"
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="card-logo">
                <img src={partner.logo} alt={`${partner.name} logo`} />
              </div>
              <h4>{partner.name}</h4>
              <p>{partner.description}</p>
              <a className="link" href={partner.link} target="_blank" rel="noopener noreferrer">
                {partner.link.replace('https://', '')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
