# boucheriegarnier.fr — les variables

Les noms, les rôles, où la valeur vit. Jamais une valeur. Ce fichier remplace
`.env.example` : une session qui ajoute une variable l'inscrit ici dans le même
commit.

| Variable                        | Rôle                                                    | Publique ou secrète | Où la valeur vit                                        |
| ------------------------------- | ------------------------------------------------------- | ------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Le projet Sanity qui sert le contenu du site            | Publique            | Vercel (Production, Préversion) et `.env.local` du poste |
| `NEXT_PUBLIC_SANITY_DATASET`    | Le jeu de données Sanity lu par le site                 | Publique            | Vercel (Production, Préversion) et `.env.local` du poste |
| `NEXT_PUBLIC_SANITY_API_VERSION`| La date d'API Sanity ; facultative, le code a la sienne | Publique            | nulle part : la valeur par défaut de `src/sanity/env.ts` |

Les deux premières sont exigées à la construction : sans elles, `next build`
s'arrête sur `Missing environment variable`. Elles sont publiques par
construction — elles partent dans le paquet du navigateur.
