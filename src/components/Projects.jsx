import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "C Quoi Le Jeu",
      description: "Un jeu en ligne gratuit — devinez le nom d'un jeu vidéo à partir d'une image.",
      link: "https://cquoilejeu.fr",
      logo: "/logos/cqlj-logo.png"
    },
    {
      title: "C Quoi La Réponse",
      description: "Quiz de culture générale — arrivera très prochainement.",
      soon: true,
      logo: "/logos/cqlr-logo.png"
    }
  ];

  return (
    <section id="projets" className="panel">
      <div className="container">
        <h2>Nos Projets</h2>
        <div className="grid projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="card glass fade-in-up"
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="card-logo">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
              <h3>{project.title} {project.soon && <small>(en cours)</small>}</h3>
              <p>{project.description}</p>
              {!project.soon && (
                <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                  Visiter le site
                </a>
              )}
              {project.soon && <span className="pill soon">Bientôt</span>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
