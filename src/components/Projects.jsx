import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "C Quoi Le Jeu",
      description: "Notre projet principal : un quiz dans lequel il faut deviner le nom d'un jeu vidéo à partir d'une image !",
      link: "https://cquoilejeu.fr",
      logo: "/logos/cqlj-logo.png"
    },
    {
      title: "Caaqlojin",
      description: "La mascotte de CQL Interactive ainsi que notre bot Discord, toujours accompagnée de son fidèle compagnon CaqlojinAI qui répond à toutes vos questions !",
      link: "https://discord.gg/Evu8WXm27z",
      logo: "/logos/caaqlojin-logo.png"
    },
    {
      title: "C Quoi Le Film",
      description: "Le nouveau défi que CQL Interactive s'est lancé : un quiz sur le cinéma dans lequel il faut deviner le nom d'un film à partir d'un extrait sonore, d'un même ou de la BO !",
      soon: true,
      logo: "/logos/cqlf-logo.png"
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
                  Découvrir
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
