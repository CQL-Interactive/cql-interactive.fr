import { motion } from 'framer-motion';

export default function Team() {
  return (
    <section id="equipe" className="panel alt">
      <div className="container">
        <h2>Notre Équipe</h2>
        <div className="grid team-grid">
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>Elie SAIDANE LEMERCIER</h4>
            <p>Co-créateur & Développeur en chef</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>Théo GRAZIANO</h4>
            <p>Co-créateur & Community Manager</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>TML</h4>
            <p>Développeur — a réalisé une grande partie de C Quoi Le Jeu</p>
          </motion.div>
          <motion.div className="card glass member" whileHover={{ scale: 1.02 }}>
            <h4>Mael | BRS</h4>
            <p>Community Manager en chef</p>
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
