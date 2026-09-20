# Maison Garnier — la règle de la maison

Le site de la **Maison Garnier**, boucherie, charcuterie, traiteur et épicerie fine à Montélimar : les rayons, les créations, le portrait des éleveurs, des articles. Un site Next avec un studio Sanity pour que la maison tienne elle-même ses textes, ses photos et ses articles. Site réalisé par SkymDev pour la Maison Garnier : une prestation client, le contenu appartient au client. Dépôt public sur GitHub.

Ce dépôt n'a pas de socle à part : ce fichier suffit. L'état vit dans le dépôt :
[`docs/ETAT.md`](docs/ETAT.md) dit où on en est, [`docs/PLANIFIE.md`](docs/PLANIFIE.md)
ce qui vient, [`docs/PASSE.md`](docs/PASSE.md) ce qui a été fait. **Une session qui change
l'état met ces trois fichiers à jour ; elle n'ouvre pas de bilan daté ailleurs.**

## Les pièces

| Pièce | Où | Ce que c'est |
| --- | --- | --- |
| Le site | `src/app` | Accueil, boucherie, charcuterie, traiteur, épicerie, créations, articles et leur fiche, studio |
| Le contenu | `src/sanity`, `/studio` | Schémas et requêtes Sanity, utilitaire de dates |

Stack : Next 16, Sanity 6 et next-sanity 13 (montés le 3 septembre 2026), npm.

## Développement

```bash
npm install
npm run dev
npm run build
```

Le déploiement est le geste du fondateur ; sur un site Vercel branché sur `main`, un push
est un déploiement.

## Attentes de session

- Donner le plan et la liste des fichiers touchés avant d'écrire.
- Une session = une unité qui construit sans erreur et se commit seule, en français, en disant
  ce qui change et ce que ça répare.
- Le contenu qui appartient au client vit dans son outil (Sanity quand il y en a un), pas
  dans le code.
- Jamais de secret dans le dépôt ; jamais de déploiement sans demande explicite.
- Pas de README, pas de dossier de doc parallèle, pas de compte rendu daté.
- **Une vérification d'interface se fait sur l'app réelle, par capture
  d'écran** — simulateur ou appareil pour iOS, navigateur pour le web. Jamais
  par une galerie ni un rendu nourri de fixtures : elles montrent ce qu'on
  leur donne, pas l'app.

<!-- ses v1 · site -->
## La règle commune

Ce qui suit vaut pour tous les dépôts de SkymDev et c'est le même texte
partout : la copie que porte un dépôt est vérifiée contre sa source, le dépôt
`SES`, et une phrase qui change là-bas change ici d'un seul geste. Ce qui est
propre au dépôt vit au-dessus, dans le reste d'`AGENTS.md` ; il peut ajouter,
jamais contredire. Si une règle est fausse, on la change dans `SES`, pas ici.

### 1. Ce que tout dépôt porte

| Fichier            | Ce que c'est                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `AGENTS.md`        | L'entrée du dépôt : ce que c'est, pour qui, vendu ou pas ; les pièces ; la stack ; les commandes ; les attentes. Puis ce bloc. |
| `CLAUDE.md`        | `@AGENTS.md`, rien d'autre : Claude Code et Codex lisent le même fichier.                                                      |
| `docs/ETAT.md`     | Le présent : où on en est, relevé dans le dépôt. Cinq entrées de dernier mouvement au plus.                                     |
| `docs/PLANIFIE.md` | L'avenir : l'ordre de reprise, tout ce qui reste, les décisions fermes, les plafonds à faire baisser.                          |
| `docs/PASSE.md`    | Le passé : les étapes en une page, ce qui a été mesuré, réfuté, appris. Condensé.                                               |
| `docs/PRODUIT.md`  | Le socle, jamais daté — quand il y a un socle à écrire.                                                                        |
| `docs/LIVRAISON.md`| Comment ça se met en production, dans quel ordre, et ce qui l'interdit.                                                        |
| `docs/VARIABLES.md`| Les variables d'environnement : leur nom, leur rôle, où la valeur vit. Jamais une valeur. Il remplace `.env.example`.          |

Ces sept noms, et aucun autre, en MAJUSCULES : un dossier `docs/` ne porte
rien d'autre. Pas de `README.md`, sauf pour un paquet publié, où il reste court.
Pas de dossier de doc parallèle, pas de compte rendu daté, pas d'audit ni de
rapport : ce qui compte va dans `PASSE.md`, condensé. `ses.json` porte les
plafonds et les dérogations du dépôt. Un dépôt qui naît reçoit tout cela avant
sa première ligne de code : `ses adopter`.

### 2. Les trois temps

Une session qui change l'état du dépôt met `ETAT.md`, `PLANIFIE.md` et
`PASSE.md` à jour avant de se fermer ; elle n'ouvre pas de bilan daté ailleurs.
Le « dernier mouvement » d'`ETAT.md` tient en cinq entrées ; la sixième part au
passé. Un chapitre fermé du passé se condense. Entre un fichier et le code
vérifié par les contrôles, **le code gagne**, et le fichier se corrige.

### 3. Les noms

Le code est en anglais : identifiants, fichiers, dossiers, routes, schémas,
scripts npm. Le français est pour les humains : interface, documentation,
commits, commentaires. Un fichier TypeScript s'écrit en minuscules et tirets
(`login-form.tsx`) ; un fichier Swift en PascalCase avec le préfixe du produit
(`MercuryAPIClient.swift`) ; l'exécutable iOS s'appelle `<Produit>iOSApp`. Un
sigle est un mot en TypeScript (`Uuid`, `Id`, `Url`) et suit Apple en Swift
(`URL`, `ID`, `iOS`). Une donnée qui entre se vérifie par `parseX`, qui rend le
type ou lève, ou `isX`, qui répond oui ou non ; rien d'autre. Une erreur d'API
porte un code `UPPER_SNAKE`. Un nom ne porte jamais un numéro de phase, un
sigle de lot ni une date.

### 4. La session

- Donner le plan et la liste des fichiers touchés **avant** d'écrire. Toucher
  un fichier hors de la liste, c'est s'arrêter et demander.
- « Plan » veut dire plan : aucune ligne de code avant le go du fondateur.
  Au-delà d'une heure de travail prévue, le plan annonce un budget.
- Une session = une unité qui passe les contrôles du dépôt et se commit seule,
  en français, en disant ce qui change et ce que ça répare.
- Deux tentatives ratées sur le même symptôme : on s'arrête, on écrit ce qui a
  été essayé et ce que ça prouve, on demande. Pas de troisième.
- Pas de dépendance nouvelle, pas de valeur de secours nouvelle, pas de copie
  d'un autre dépôt sans l'avoir dit dans le plan et obtenu le oui.
- Une réponse tient en dix lignes ; on parle en effets, pas en mécanique. La
  fin de session tient en quatre : ce qui change, ce que ça répare, comment
  c'est prouvé, ce qui n'a pas été vérifié.

### 5. Toutes les surfaces, un seul changement

Quand un dépôt a plusieurs surfaces — API, web, iOS, casque, Mac — un
changement de contrat, de route, de page ou de geste partagé les concerne
toutes, dans la même session. Chercher d'abord le partage : ce qui vaut pour
deux surfaces vit à un seul endroit. Dire pour chaque surface « portée, ou non,
et pourquoi » ; la raison s'écrit dans `ETAT.md`. Le prouver par les contrôles
des surfaces touchées.

### 6. La preuve

- « Fini » veut dire : les contrôles de la famille du dépôt passent (chapitre
  TESTS). Un contrôle sauté se nomme.
- **Une vérification d'interface se fait sur l'app réelle, par capture
  d'écran** — simulateur pour iOS, navigateur pour le web — et la capture est
  jointe. Une page touchée sans capture n'est pas finie. L'agent peut installer
  sur l'iPhone du fondateur ; le fondateur vérifie sur l'appareil.
- « Corrigé » sans preuve nommée — la sortie d'une commande, une capture, le
  message reçu — n'existe pas.
- Un test mesure une exigence : il exécute le code, il ne le lit pas ; il parle
  à une vraie base jetable, pas à un faux ; il vérifie un code ou un état,
  jamais une phrase.
- Aucun contrôle ne se contourne en l'assouplissant. Si la règle est devenue
  fausse, on la change dans `SES`, avec sa raison.

### 7. Jamais sans une demande explicite du fondateur

Déployer ; appliquer une migration en production ; pousser sur `main` ou
`stable` ; envoyer un mail ou un message ; supprimer un fichier ou une
branche ; réécrire l'historique git ; dépenser de l'argent ; relever un plafond
de `ses.json`. Et jamais, même autorisé : saisir, afficher ou commiter un
secret ; affaiblir une garde pour faire passer un test ; laisser du code mort ;
modifier à la main un fichier généré ; mettre dans le code un contenu qui
appartient au client.

### 8. Ce qui se partage

Un fichier identique, ou proche, dans deux dépôts est une faute : il monte dans
le paquet partagé (`@skymdev-technologies/ses` pour la technique, SDS pour le
visuel) ou l'un des deux disparaît. Le vérificateur compare les dépôts.

### 9. Où est le reste

Les chapitres du standard sont dans `standard/` du dépôt `SES` :
STRUCTURE, NOMS, PARTAGE, SECOURS, TESTS, INTERFACE, DOCUMENTATION,
EXCEPTIONS. Une session qui touche à un domaine lit son chapitre d'abord.
`ses verifier` contrôle ce bloc, les fichiers de la section 1 et les plafonds ;
`ses adopter` les pose et les remet à jour.
<!-- /ses -->
