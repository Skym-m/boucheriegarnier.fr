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

Stack : Next 16, Sanity 6 et next-sanity 13 (montés le 3 septembre 2026), pnpm (version épinglée par `packageManager`).

## Développement

```bash
pnpm install
pnpm dev
pnpm build
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

<!-- ses v5 · site -->
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
- Ce qui peut se faire maintenant se fait maintenant : pas d'échéance de
  calendrier pour repousser un nettoyage. Une transition qui attend vraiment
  quelque chose — un ancien domaine encore servi aux apps installées, un ancien
  nom de variable encore lu, un pont vers une ancienne version, une valeur de
  secours « le temps de » — entre dans `docs/PLANIFIE.md` le jour où elle naît,
  avec l'événement qui la retire (« à la mise à jour App Store », « dès le
  domaine déplacé ») et le geste. Une transition sans événement est une faute.
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
  d'écran** — l'iPhone du fondateur pour iOS, navigateur pour le web — et la
  capture est jointe. Une page touchée sans capture n'est pas finie. L'agent
  installe sur l'iPhone ; le fondateur vérifie sur l'appareil. Aucun
  simulateur ni runtime de simulateur ne s'installe sur le poste. Une app
  se publie directement par App Store Connect, sans TestFlight.
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

### 10. L'avancement

JARVIS suit chaque session de développement depuis son bureau : il relit en
silence la fin des transcripts. Rien d'autre n'est demandé aux agents que ceci.

- Une tâche de plus d'une étape s'annonce par un plan numéroté au début
  (« 1. … 2. … 3. … ») ; le passage à l'étape suivante se dit en clair
  (« étape 3 sur 5 : … »). Aucune ligne de temps, aucune balise pour JARVIS :
  il en tire lui-même l'avancement et le temps restant.
- Un blocage se dit en une phrase qui commence par « Bloqué : » et nomme ce
  qu'on attend.
- `docs/PLANIFIE.md` commence par la feuille de route, entre
  `<!-- feuille-de-route -->` et `<!-- /feuille-de-route -->`, dans ce format,
  et se met à jour à chaque jalon atteint, pas seulement en fin de session :

```
Jalon : <nom> — <fait le JJ/MM | en cours | à venir>
- [x] <partie> — <fait le JJ/MM>
- [~] <partie> — <NN %> — <ce qui reste>
- [!] <partie> — attend : <ce qu'on attend>
- [ ] <partie> — <quand>
Prochaine étape : <une phrase>
À trancher : <la question> — sans réponse : <ce qui se fait par défaut>
```

### 11. Le disque

Le Mac a été plein deux fois en un mois : 600 Go de builds, de copies et de
téléchargements laissés par les sessions. Une session laisse le poste comme
elle l'a trouvé.

- Ce qu'une session produit pour elle-même — build, DerivedData, capture,
  journal, essai, copie de travail — va dans son dossier temporaire ou dans le
  `tmp/` ignoré du dépôt, et elle le supprime avant de finir (ce qu'elle a
  créé elle-même : la section 7 ne vise pas ça). Jamais dans `~`, `Documents`,
  `Téléchargements`, le Bureau, ni dans un `dist/` qui n'est pas un livrable.
  Un script qui écrit dans un dossier temporaire le vide en sortant, même en
  échec.
- Xcode compile dans son DerivedData par défaut. Un `-derivedDataPath` à part
  est jetable et disparaît à la fin de la session.
- Pas de clone ni de worktree en plus sans le dire dans le plan ; un worktree
  disparaît quand sa branche est fusionnée ou abandonnée.
- Un modèle, un jeu de données, un outil ou un runtime existe en un seul
  exemplaire sur le poste et sur le disque externe : chercher avant de
  télécharger, et noter dans `docs/ETAT.md` où il vit. Pas de nouvelle
  version d'un outil à côté de l'ancienne : on remplace.
- Une sauvegarde de base se prend avant une opération risquée, jamais par
  habitude ; une fois l'opération validée, on ne garde que la dernière, et
  elle part sur le disque externe.
- Un chemin absolu ou un lien vers un autre disque ne s'écrit pas dans un
  script : il casse au premier rangement. Déplacer un dossier qu'un script
  utilise, c'est mettre le script à jour dans le même geste.
- La fin de session dit ce qui a été laissé hors du dépôt, et sa taille.
  « Rien » est la bonne réponse.

### 12. Les variables

- Un nom dit la chose, pas le produit : `ACCOUNT_PROVISIONING_HMAC_KEY`, pas
  `SATURN_CLIENT_MUTATION_HMAC_KEY`. Le nom d'un produit n'ouvre une variable
  que pour en désigner un autre, devant le nom que cet autre emploie chez lui :
  `PLATFORM_KEY` dans Saturn est `SATURN_PLATFORM_KEY` chez qui l'appelle.
- Trois préfixes permis, aucun autre : `SKYM_` pour ce que pose l'outillage
  commun (`SKYM_BUILD_*`, `SKYM_PACKAGES_TOKEN`) ; le nom du produit pour un
  réglage Xcode, qui partage l'espace d'Apple (`SATURN_API_URL`) ; `JARVIS_`
  dans le `.env` du daemon.
- Le nom qu'attend un fournisseur ou une plateforme se garde tel quel :
  `CRON_SECRET`, `DATABASE_URL`, `SENTRY_AUTH_TOKEN`, `SENTRY_PROJECT`,
  `STRIPE_SECRET_KEY`, `RESEND_API_KEY`, `BLOB_READ_WRITE_TOKEN`. Sinon : le
  fournisseur, puis la chose (`SUPABASE_SECRET_KEY`, `APNS_KEY_ID`).
- Les fins de nom sont fermées et les synonymes tranchés : le dictionnaire est
  dans NOMS. `_URL`, jamais `_BASE_URL` ; `_PUBLISHABLE_KEY`, jamais
  `_ANON_KEY` ; `X_ENABLED`, jamais `ENABLE_X`.
- `NEXT_PUBLIC_` et `VITE_` ne portent que ce que le navigateur lit, jamais un
  secret. Une valeur publique a un seul nom : le serveur lit aussi le
  `NEXT_PUBLIC_`. Elle se pose en clair, pour se relire au diagnostic ; un
  secret, et une adresse personnelle, se posent `sensitive`.
- Une valeur, une entrée. Identique en Production, Preview et Development :
  une seule entrée qui vise les trois. Différente : une entrée par
  environnement, et `VARIABLES.md` dit pourquoi. Pas de surcharge par branche
  que `VARIABLES.md` ne nomme pas, avec sa raison.
- La vérité est dans `docs/VARIABLES.md` et chez l'hébergeur, nulle part
  ailleurs. Ce que la plateforme pose (`VERCEL_*`, `NODE_ENV`) ne se pose pas.
  Une variable que le code ne lit plus quitte le code, le tableau et
  l'hébergeur dans le même geste ; une intégration qui pose ce que personne ne
  lit se débranche. Un fichier tiré par `vercel env pull` se supprime après
  usage : il porte des secrets en clair.
- Sur GitHub Actions, le même nom que sur Vercel : une valeur publique en
  variable (`vars.`), un secret en secret (`secrets.`).
- Renommer se fait en trois temps, jamais dans l'autre ordre : poser le
  nouveau nom à côté de l'ancien, déployer le code qui ne lit que le nouveau,
  retirer l'ancien. Un secret qu'on ne retrouve nulle part se fait tourner,
  pas recopier.
<!-- /ses -->
