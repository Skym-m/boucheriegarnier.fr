# Maison Garnier — où on en est

État du **9 octobre 2026**, relevé dans le dépôt. Cinq entrées de dernier mouvement au plus.

## Dernier mouvement

- **9 octobre.** Lot Dependabot repris sous pnpm : Next 16.4, React 19.3, Sanity et @sanity/vision 6.18, @types/node 26, TypeScript 7 (le compilateur natif ; le contrôle de types de `next build` le prend et attrape bien une erreur).
- **7 octobre.** npm cède la place à pnpm (`packageManager`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` qui porte les overrides et autorise le build d'esbuild) ; `@portabletext/react` et `@portabletext/types`, importés sans être déclarés, entrent au `package.json`.
- **20 septembre.** Le dépôt entre dans le SES : le bloc commun v1, `ses.json` (plafond de secours 1), VARIABLES, LIVRAISON, et le relevé du jour dans PLANIFIE.
- **7 septembre.** La doc suit le modèle en trois temps.
- **3 septembre.** Sanity monté de 4 à 6, next-sanity de 11 à 13, `src/sanity/lib/image.ts` adapté à la nouvelle API d'image ; overrides de sécurité supprimés.

## 1. Les machines et les environnements

| Quoi | Où | Ce qu'il faut savoir |
| --- | --- | --- |
| Le site | Vercel, `boucheriegarnier.fr`, branché sur `main` | Dépôt public : aucun secret n'y entre jamais |
| Le contenu | Sanity, studio sur `/studio` | Le client édite lui-même |

## 2. Ce qui tourne

Le site, tel que déployé. Aucune tâche de fond.

## 3. Les chiffres du moment

43 commits depuis le 30 septembre 2024 ; 9 pages ; aucun test.

## 4. Ce qui vit mais n'a pas été vu

Rien de particulier : ce qui est en ligne est ce que le client voit.

## 5. Les trous et les fragilités connus

- **Aucune vérification automatique** : pas de lint, pas de typecheck, pas de test ; seul le build de Vercel garde le site.
- Le dépôt est **public** : le `.gitignore` doit rester strict.
- Les avis de sécurité Dependabot se traitent en montant les majeures (Sanity 6 l'a montré), pas par des overrides.
