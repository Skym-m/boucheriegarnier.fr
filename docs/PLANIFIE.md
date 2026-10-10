# Maison Garnier — ce qui vient

Au **7 septembre 2026**.

## Reprise, dans cet ordre

- [ ] Ajouter un `lint` et un `typecheck` au `package.json` et les passer avant chaque push.
- [ ] Vérifier le studio Sanity après la montée en 6 avec le client.

## Décisions qui restent fermes

- Le contenu vit dans Sanity ; le code ne porte pas de texte de la maison.
- Dépôt public, jamais de secret.

## Le relevé SES du 20 septembre 2026

Ce que `ses verifier` a vu le jour où le dépôt est entré dans la règle. Le
plafond de valeurs de secours est de **1** (`ses.json`) : aucune nouvelle
sans le oui du fondateur ; on les passe une à une et on abaisse le plafond.
Les paragraphes d'`AGENTS.md` que le bloc porte désormais (les trois temps,
les attentes communes, la capture d'écran, les surfaces) sont à retirer.

- [x] SHOULD `secrets` — .env.local est suivi par git (2 variables, toutes publiques) → les noms vont dans VARIABLES.md ; git rm --cached, et .gitignore
- [ ] MUST `secours` — 1 valeurs de secours et aucun plafond → inscrire { "plafonds": { "secours": 1 } } dans ses.json et le compte dans PLANIFIE ; aucune nouvelle sans le oui du fondateur
- [ ] SHOULD `ignore` — .gitignore ne couvre pas .env → une ligne `.env*`
- [ ] SHOULD `dependabot` — package.json sans .github/dependabot.yml → un lot par semaine, groupé
- [ ] SHOULD `controle` — package.json sans script lint, typecheck, test → un contrôle unique (`check`) qui les enchaîne
- [ ] SHOULD `controle` — .nvmrc absent → une version de Node épinglée par dépôt
- [ ] MUST `copie` — sanity.config.ts ≈ admilaeti.com (100 %) → monter dans le paquet partagé, ou supprimer l'une des deux copies
- [ ] MUST `copie` — sanity.config.ts ≈ skymdev.fr (100 %) → monter dans le paquet partagé, ou supprimer l'une des deux copies
- [ ] SHOULD `copie` — sanity.config.ts ≈ serendipitartist.com (94 %) → monter dans le paquet partagé, ou supprimer l'une des deux copies
- [ ] SHOULD `copie` — sanity.config.ts ≈ dolcecoffeeshop.fr (89 %) → monter dans le paquet partagé, ou supprimer l'une des deux copies
- [ ] SHOULD `copie` — src/sanity/schemaTypes/banner.ts ≈ serendipitartist.com (89 %) → monter dans le paquet partagé, ou supprimer l'une des deux copies
