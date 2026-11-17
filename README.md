## **CQL Interactive, un groupe créé par 2 lycéens**

CQL Interactive est un groupe créé par 2 adolescents qui regroupe plusieurs quiz en ligne, comme [C Quoi Le Jeu](https://cquoilejeu.fr). Retrouvez nous sur [cql-interactive.fr](https://cql-interactive.fr).

## **Les co-créateurs🤝:**

Nous sommes deux adolescents à avoir créé ce projet : Théo et Elie. "Nous voulons créer des jeux gratuits, sans publicités, accessibles à tous et respectueux des données."

## **Nous rejoindre🔗:**

**Notre Site :** [cql-interactive.fr](https://cql-interactive.fr)

**Lien vers le serveur Discord officiel :** [discord.gg/Evu8WXm27z](https://discord.gg/Evu8WXm27z)

**Lien vers le GitHub :** [github.com/CQL-Interactive](https://github.com/CQL-Interactive/)

**Lien vers le Tipeee, pour nous soutenir :** [tipeee.com/cql-interactive](https://fr.tipeee.com/cql-interactive/)

**Lien vers le TikTok :** [tiktok.com/@cql_interactive](https://www.tiktok.com/@cql_interactive)

**Lien vers la chaîne YouTube :** [youtube.com/@cql-interactive](https://www.youtube.com/@cql-interactive)

**Lien vers Instagram :** [instagram.com/cql_interactive](https://www.instagram.com/cql_interactive)

## **Nos jeux créés :**

**- [C Quoi Le Jeu](https://cquoilejeu.fr)**

**- C Quoi Le Film (en cours de développement)**

## **Execution en local :**

Requis : `Node.js` et `npm`
``` 
git clone https://github.com/CQL-Interactive/cql-interactive.fr.git
cd cql-interactive.fr
npm install
```
créer un fichier `.env` avec ces informations :
```
# Port du serveur
PORT=3002

# Configuration SMTP OVH pour l'envoi d'e-mails
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=votre mail
SMTP_PASS="le mot de passe de votre boite mail"
SMTP_FROM=votre mail
SMTP_TO=votre mail
```
Pour le lancer en développement :
```
npm run dev
```

Pour le mettre en production :
```
npm run build
npm start
```

## **LICENCE :**

Le site de CQL Interactive est sous licence GNU General Public License v3.0. Consultez le fichier [LICENSE](https://github.com/CQL-Interactive/cql-interactive.fr/blob/main/LICENSE) pour plus de détails.
