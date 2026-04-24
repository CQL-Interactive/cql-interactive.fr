import { motion } from 'framer-motion';

export default function Hero() {
return (
    <section id="accueil" className="hero">
        <motion.div
            className="hero-glass fade-in-up"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.img
                src="/logos/cql-logo.png"
                alt="CQL Interactive Logo"
                className="hero-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            />
            <h1>CQL Interactive</h1>
            <p className="lead">
                CQL Interactive crée des quiz en ligne amusants et accessibles à tous.
                Nos jeux sont gratuits et pensés pour que chacun puisse s'amuser facilement, seul ou entre amis.
                Nous prenons également soin de respecter nos utilisateurs et de protéger leurs données.
            </p>
            <motion.a
                className="cta"
                href="#projets"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Découvrir nos projets
            </motion.a>
        </motion.div>
    </section>
);
}
