import { motion } from 'framer-motion';

export default function Team() {
  return (
    <section id="equipe" className="panel alt">
      <div className="container">
        <h2>Notre Équipe</h2>
        <div className="grid team-grid">
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>Elie SAIDANE LEMERCIER</h4>
            <p>Co-créateur & développeur de CQL Interactive</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>Théo GRAZIANO</h4>
            <p>Co-créateur & Manager Com en chef</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>TML</h4>
            <p>Développeur de C Quoi Le Jeu — a réalisé une grande partie de C Quoi Le Jeu</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>Mael | BRS</h4>
            <p>Manager Com en chef, et créateur des vidéos pour les réseaux sociaux</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>paraχrωme</h4>
            <p>Créateur du serveur Discord et Modérateur</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
