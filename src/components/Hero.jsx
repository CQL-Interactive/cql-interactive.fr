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
            <h1>CQL Interactive</h1>
            <p className="lead">
                CQL Interactive est un groupe développant plusieurs quiz en ligne.
                Notre objectif est de créer des jeux éducatifs et divertissants, accessibles à tous gratuitement.
                Nous mettons l'accent sur le respect des utilisateurs et la protection de leurs données.
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
