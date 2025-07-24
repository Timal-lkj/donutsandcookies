# Donuts & Cookies – Site Vitrine

[![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Bundler-Turbopack-yellow)](https://turbo.build/pack)
[![License](https://img.shields.io/github/license/ton-pseudo/donutsandcookies)](LICENSE)
[![Deploy on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com/)

> Site vitrine responsive pour une boutique locale de donuts & cookies.  
> Construit avec **Next.js + Tailwind CSS + App Router**, optimisé pour un déploiement rapide 🚀

---

## Stack Technique

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Turbopack** (dev server ultra rapide)
- **Heroicons + Headless UI** (UI moderne & responsive)

---

## Structure du projet

```bash
src/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Menu.jsx
│   ├── DonutCard.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── public/
│   └── images/
````

---

## Installation

```bash
git clone https://github.com/Timal-lkj/donutsandcookies.git
cd donutsandcookies
npm install
npm run dev
```

Accès : [http://localhost:3000](http://localhost:3000)

---

## Personnalisation

* Remplace les visuels dans `/public/images/`
* Modifie les données dans `Menu.jsx` ou `Testimonials.jsx`
* Adapte les couleurs si besoin dans `tailwind.config.js`

---

## Déploiement

Déploiement conseillé sur **[Vercel](https://vercel.com/)** :

1. Connecte ton compte GitHub
2. Push le projet
3. "Import" dans Vercel
4. Build & deploy automatique 🎉

---

## Sections

* Hero (accroche + CTA)
* Menu (cards produits)
* Témoignages (avis clients)
* Contact (formulaire + infos)
* Footer (réseaux, copyright)

---

## Licence

Ce projet est sous licence MIT — [voir le fichier LICENSE](LICENSE)

---

Merci et bon dev 🧡
