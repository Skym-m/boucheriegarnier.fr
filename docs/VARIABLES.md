# boucheriegarnier.fr — les variables

Les noms, les rôles, où la valeur vit. Jamais une valeur. Une session qui
ajoute ou retire une variable met ce tableau à jour dans le même commit.

| Variable | Rôle | Publique ou secrète | Où |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Le projet Sanity qui sert le contenu ; lu par le site, le studio et la CLI Sanity | Publique | Vercel `boucheriegarnier.fr` P V D, en clair ; `.env.local` du poste |
| `NEXT_PUBLIC_SANITY_DATASET` | Le jeu de données Sanity lu par le site, le studio et la CLI Sanity | Publique | Vercel `boucheriegarnier.fr` P V D, en clair ; `.env.local` du poste |

Les deux sont exigées à la construction : sans elles, `next build` s'arrête
sur `Missing environment variable`. La version d'API Sanity est une constante
de `src/sanity/env.ts`, pas une variable.
