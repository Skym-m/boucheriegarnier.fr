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
