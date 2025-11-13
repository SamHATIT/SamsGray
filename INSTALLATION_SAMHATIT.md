# 🚀 Installation et Configuration - Samhatit Consulting Blog

## 📋 Vue d'ensemble

Ce document contient toutes les instructions pour finaliser l'installation et le déploiement du blog Gray adapté au style Samhatit Consulting.

---

## ✅ Travail Déjà Réalisé

### Phase 1 & 2 Complétées ✓
- ✅ Migration complète de la palette couleurs (Graphite + Copper)
- ✅ Intégration de la font Inter
- ✅ Configuration Tailwind avec toutes les variables Samhatit
- ✅ Création du Hero avec particules animées
- ✅ Adaptation de la Navigation sticky avec effets copper
- ✅ Création du Footer multi-colonnes
- ✅ Adaptation des Cards au style dark copper
- ✅ Mise à jour du layout principal

### Branches
- **Branche de travail** : `claude/analyze-samsgray-repo-01189VcTXyQTozvXVRgmmKv3`
- **Branche backup** : `backup/original-gray-20251113`
- **Commit** : `dcd5e2c` - "feat: Adapt Gray blog to Samhatit Consulting brand identity"

---

## 🔧 Installation et Configuration

### 1. Cloner et Accéder au Projet

```bash
# Si ce n'est pas déjà fait
cd /home/user/SamsGray

# Vérifier la branche
git branch
# Vous devriez être sur : claude/analyze-samsgray-repo-01189VcTXyQTozvXVRgmmKv3
```

### 2. Installer les Dépendances

```bash
# Les dépendances sont déjà installées, mais au cas où :
npm install
```

### 3. **IMPORTANT** - Configurer Unbody.io

Le projet utilise Unbody.io pour la gestion du contenu IA. Vous devez configurer vos credentials :

#### A. Créer un compte Unbody.io
1. Aller sur https://unbody.io
2. Créer un compte (gratuit)
3. Créer un nouveau projet
4. Récupérer vos credentials :
   - `UNBODY_API_KEY`
   - `UNBODY_PROJECT_ID`

#### B. Configurer le fichier .env

Éditer le fichier `.env` à la racine du projet :

```bash
# Ouvrir le fichier
nano .env

# Remplacer les valeurs vides par vos credentials :
UNBODY_API_KEY=votre_clé_api_ici
UNBODY_PROJECT_ID=votre_project_id_ici
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# Sauvegarder : Ctrl+O puis Enter, puis Ctrl+X
```

#### C. Configurer votre source de contenu dans Unbody.io

1. Dans le dashboard Unbody.io, connecter une source (Google Drive recommandé)
2. Ajouter vos documents/articles
3. Attendre que Unbody.io indexe votre contenu

---

## 🎨 Ajouter le Logo Samhatit

Remplacer le fichier `/public/img.png` par votre logo Samhatit :

```bash
# Option 1 : Via ligne de commande
cp /chemin/vers/votre/logo-samhatit.png /home/user/SamsGray/public/img.png

# Option 2 : Via interface graphique
# Placer manuellement votre logo dans /public/img.png
```

**Recommandations logo :**
- Format : PNG avec fond transparent
- Dimensions : environ 180x60px (ou ratio similaire)
- Optimisé pour le web

---

## 🚀 Lancer le Projet

### Mode Développement

```bash
# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur : http://localhost:3000
```

### Build de Production

```bash
# 1. Pre-build (génère les données statiques depuis Unbody)
npm run prebuild

# 2. Build Next.js
npm run build

# 3. Lancer en production
npm start
```

---

## 🎯 Prochaines Étapes (Optionnel)

### Phase 3 - Pages Additionnelles

Créer les pages manquantes mentionnées dans la navigation :

#### 1. Page Services (`/src/pages/services.tsx`)
```typescript
import DefaultLayout from "@/layouts/default";

export default function ServicesPage() {
  return (
    <DefaultLayout metaProps={{ title: "Services | Samhatit Consulting" }}>
      <div className="py-12 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          {/* Ajouter le contenu */}
        </section>
      </div>
    </DefaultLayout>
  );
}
```

#### 2. Page Expertises (`/src/pages/expertises.tsx`)
Similaire à la structure ci-dessus

#### 3. Page À propos (`/src/pages/about.tsx`)
Similaire à la structure ci-dessus

#### 4. Page Contact (`/src/pages/contact.tsx`)
Ajouter un formulaire de contact

#### 5. Calculateur ROI (`/src/pages/roi-calculator.tsx`)
Intégrer votre calculateur ROI existant

### Phase 4 - Optimisations

1. **Adapter les autres composants Cards**
   - `Defaults.ArticleCard.tsx`
   - `Defaults.VideoCard.tsx`
   - Appliquer le même style copper/graphite

2. **Améliorer le Hero**
   - Ajouter une image de fond (votre boardroom-bg.jpg)
   - Ajuster les textes selon votre messaging

3. **SEO & Meta**
   - Ajouter favicon Samhatit
   - Configurer Open Graph images
   - Meta descriptions personnalisées

4. **Performance**
   - Optimiser les images
   - Code splitting
   - Lazy loading

---

## 📝 Structure des Fichiers Modifiés

```
/home/user/SamsGray/
├── .env                                    # ⚠️ À CONFIGURER
├── tailwind.config.js                     # ✅ Palette Samhatit
├── gray.config.ts                         # ✅ Branding
├── public/
│   └── img.png                            # ⚠️ Remplacer par logo Samhatit
├── src/
│   ├── components/
│   │   ├── Hero.tsx                       # ✅ Nouveau - Hero avec particules
│   │   ├── Footer.tsx                     # ✅ Nouveau - Footer multi-colonnes
│   │   ├── navbar.tsx                     # ✅ Modifié - Nav Samhatit
│   │   └── defaults/
│   │       └── Defaults.Card.tsx          # ✅ Modifié - Style copper
│   ├── layouts/
│   │   └── default.tsx                    # ✅ Modifié - Footer intégré
│   ├── pages/
│   │   └── index.tsx                      # ✅ Modifié - Hero ajouté
│   └── styles/
│       └── globals.css                    # ✅ Modifié - Variables CSS
```

---

## 🐛 Dépannage

### Erreur : "Cannot find module 'ts-node/register'"
✅ **Déjà résolu** - Les dépendances ont été installées

### Erreur : "UNBODY_API_KEY and UNBODY_PROJECT_ID must be set"
❌ **Action requise** - Configurer le fichier `.env` (voir section 3)

### Le site ne démarre pas
```bash
# Vérifier les dépendances
npm install

# Nettoyer le cache
rm -rf .next
npm run dev
```

### Problèmes de style/couleurs
```bash
# Rebuilder Tailwind
npm run dev
# Rafraîchir le navigateur avec Ctrl+F5 (hard refresh)
```

---

## 📞 Contact & Support

- **Email** : contact@samhatit-consulting.cloud
- **LinkedIn** : https://linkedin.com/company/samhatit-consulting

---

## 🎨 Palette de Couleurs Samhatit

Pour référence future lors de l'ajout de nouveaux composants :

```css
/* Couleurs principales */
--graphite: #0D0F11;
--graphite-light: #181B1E;
--graphite-medium: #212831;
--copper: #B46A3C;
--copper-light: #C77B4A;
--copper-glow: rgba(180, 106, 60, 0.4);

/* Classes Tailwind */
bg-graphite
bg-graphite-light
text-copper
text-copper-light
border-copper
shadow-glow
bg-gradient-copper
```

---

## ✅ Checklist de Mise en Production

- [ ] Configurer `.env` avec credentials Unbody.io
- [ ] Remplacer `/public/img.png` par logo Samhatit
- [ ] Tester `npm run dev` localement
- [ ] Vérifier que toutes les pages se chargent
- [ ] Tester la navigation mobile
- [ ] Vérifier les effets hover (glow copper)
- [ ] Configurer le contenu dans Unbody.io
- [ ] Build de production : `npm run build`
- [ ] Tester en mode production : `npm start`
- [ ] Déployer sur votre hébergeur (Vercel, Netlify, etc.)

---

**Date de création** : 13 novembre 2025
**Version** : 1.0 - Adaptation initiale Samhatit Consulting
**Dernière modification** : 13 novembre 2025

---

Bon courage pour la suite ! 🚀
