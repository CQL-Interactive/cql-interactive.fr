import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function LegalNotices() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReturnHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="legal-notices-page">
      <motion.div 
        className="legal-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Mentions Légales</h1>
        <p>Informations légales du site CQL Interactive</p>
      </motion.div>

      <div className="container legal-content">
        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>1. Identification du site</h2>
          
          <h3>Responsable de la publication :</h3>
          <ul>
            <li><strong>Nom :</strong> CQL Interactive</li>
            <li><strong>Forme juridique :</strong> Association de fait</li>
            <li><strong>Adresse email de contact :</strong> contact@cql-interactive.fr</li>
            <li><strong>Directeurs de publication :</strong> Elie Saidane Lemercier & Théo Graziano</li>
          </ul>

          <h3>Informations sur le site :</h3>
          <ul>
            <li><strong>Nom du site :</strong> CQL Interactive</li>
            <li><strong>URL :</strong> www.cql-interactive.fr</li>
            <li><strong>Description :</strong> Site officiel de CQL Interactive</li>
          </ul>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>2. Hébergement</h2>
          
          <h3>Hébergeur du site :</h3>
          <ul>
            <li><strong>Nom :</strong> Contabo</li>
            <li><strong>Localisation :</strong> Europe</li>
            <li><strong>Site web :</strong> www.contabo.com</li>
          </ul>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>3. Conditions d'utilisation</h2>
          
          <h3>Accès au site :</h3>
          <p>
            Ce site est accessible gratuitement à toute personne disposant d'un accès Internet. 
            CQL Interactive ne garantit pas un accès continu et sans interruption du site.
          </p>

          <h3>Utilisation autorisée :</h3>
          <p>Vous acceptez de n'utiliser ce site que pour des fins légales et conformément à ces conditions d'utilisation. À titre de non-limitation, vous acceptez de ne pas :</p>
          <ul>
            <li>Reproduire ou copier le contenu sans autorisation</li>
            <li>Modifier le contenu ou l'apparence du site</li>
            <li>Utiliser des robots, spiders ou autres outils de scraping automatisé</li>
            <li>Tenter d'accéder à des parties non autorisées du site</li>
            <li>Interférer avec le fonctionnement normal du site</li>
            <li>Transmettre un virus ou code malveillant</li>
            <li>Harceler ou menacer d'autres utilisateurs</li>
            <li>Participer à des activités commerciales non autorisées</li>
          </ul>

          <h3>Limitation de responsabilité :</h3>
          <p>
            Le contenu de ce site est fourni "tel quel" sans aucune garantie, explicite ou implicite. 
            CQL Interactive ne peut être tenue responsable des dommages directs, indirects, 
            accidentels, spéciaux ou consécutifs résultant de l'accès à ce site ou de l'utilisation 
            de son contenu, même si CQL Interactive a été informée de la possibilité de tels dommages.
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>4. Données personnelles et RGPD</h2>
          
          <h3>Collecte de données :</h3>
          <p>
            CQL Interactive collecte des informations personnelles uniquement lorsque vous 
            les fournissez volontairement via les formulaires du site (contact, etc.).
          </p>

          <h3>Traitement des données :</h3>
          <ul>
            <li><strong>Base légale :</strong> Consentement de l'utilisateur et exécution de contrats</li>
            <li><strong>Responsables du traitement :</strong> Elie Saidane Lemercier & Théo Graziano</li>
            <li><strong>Durée de conservation :</strong> Les données sont conservées pendant une durée indéterminée ou jusqu'au retrait du consentement</li>
          </ul>

          <h3>Droits des utilisateurs :</h3>
          <p>Conformément à la RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès aux données vous concernant</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l'oubli (suppression des données)</li>
            <li>Droit de limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit de ne pas être soumis à une décision automatisée</li>
          </ul>

          <h3>Exercer vos droits :</h3>
          <p>
            Pour exercer l'un de ces droits, veuillez envoyer une demande écrite à 
            contact@cql-interactive.fr avec une copie d'une pièce d'identité. 
            Nous vous répondrons dans un délai de 30 jours.
          </p>

          <h3>Cookies :</h3>
          <p>
            Ce site n'utilise aucun cookie. 
            Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2>5. Liens externes</h2>
          
          <p>
            Ce site peut contenir des liens vers des sites externes. CQL Interactive n'est pas 
            responsable du contenu, de la fiabilité ou de la sécurité de ces sites externes. 
            L'inclusion d'un lien n'implique pas l'approbation ou l'affiliation avec ces tiers.
          </p>

          <p>
            Si vous découvrez un lien cassé ou un contenu manquant, veuillez nous le signaler 
            à contact@cql-interactive.fr.
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2>6. Limitation de responsabilité</h2>
          
          <p>
            CQL Interactive met tout en œuvre pour que les informations présentes sur ce site 
            soient exactes et à jour. Cependant, nous ne pouvons pas garantir l'absence d'erreurs 
            ou d'omissions. En accédant à ce site, vous reconnaissez que :
          </p>
          <ul>
            <li>Les informations sont fournies "telles quelles" sans garantie</li>
            <li>CQL Interactive n'est responsable d'aucun dommage résultant de l'utilisation du site</li>
            <li>Vous utilisez le site à vos risques et périls</li>
          </ul>

          <h3>Disponibilité du service :</h3>
          <p>
            Même si CQL Interactive s'efforce de maintenir le site en fonctionnement 24h/24 
            nous ne garantissons pas une disponibilité ininterrompue. Nous pouvons effectuer 
            des maintenances ou des mises à jour sans préavis.
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2>7. Propriété des contenus fournis par l'utilisateur</h2>
          
          <p>
            En soumettant du contenu à ce site (commentaires, messages, suggestions, etc.), 
            vous accordez à CQL Interactive une licence non exclusive, libre de redevances et 
            perpétuelle pour utiliser, reproduire, modifier et distribuer ce contenu.
          </p>

          <p>
            Vous conservez la propriété de votre contenu et êtes responsable des violations 
            de droits d'auteur ou d'autres droits de propriété intellectuelle.
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2>8. En cas de litige</h2>

          <p>
            Si vous avez un différend, nous vous encourageons d'abord à nous contacter 
            à contact@cql-interactive.fr pour essayer de résoudre le problème à l'amiable.
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2>9. Modification des mentions légales</h2>
          
          <p>
            CQL Interactive se réserve le droit de modifier ces mentions légales à tout moment. 
            Les modifications entreront en vigueur dès leur publication sur le site. 
            Votre utilisation continue du site après les modifications constitue votre acceptation 
            des conditions modifiées.
          </p>

          <p>
            <strong>Date de dernière mise à jour :</strong> 06/04/2026
          </p>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <h2>10. Contact</h2>
          
          <p>
            Pour toute question concernant ces mentions légales, votre utilisation du site 
            ou pour signaler un problème, veuillez nous contacter :
          </p>

          <ul>
            <li><strong>Email :</strong> contact@cql-interactive.fr</li>
          </ul>
        </motion.section>

        <motion.div
          className="legal-back-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <button className="cta" onClick={handleReturnHome}>
            ← Retour à l'accueil
          </button>
        </motion.div>
      </div>
    </div>
  );
}
