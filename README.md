# TP-api-kindergarden

> Travail pratique en Node.js — Simulation d’un objet connecté avec validation et visualisation des données.

##  Objectif

Ce projet a pour but de simuler un objet connecté (comme un capteur) qui émet régulièrement des données (température et humidité). Ces données sont ensuite :

- **Validées** avec la librairie `validator.js` côté serveur.
- **Visualisées en temps réel** côté client grâce à la librairie `D3.js`.
- Transmises via **WebSocket** (`socket.io`) pour une mise à jour dynamique.

---

##  Technologies utilisées

- **Node.js** avec **Express.js** – pour le serveur web.
- **validator.js** – pour la validation des données simulées.
- **socket.io** – pour la communication en temps réel entre le serveur et le navigateur.
- **D3.js** – pour la visualisation graphique des données (température en temps réel).
- **HTML/CSS/JS** – pour la partie frontend.

---

##  Fonctionnalités

- Génération automatique de données simulées toutes les 2 secondes.
- Vérification que les données sont dans une plage réaliste (température entre 0 et 50 °C, humidité entre 0 et 100 %).
- Affichage dynamique d’un graphique des dernières 20 valeurs.
- Architecture simple et modulaire.

---

##  Lancer le projet

### 1. Cloner le repo
```bash
git clone https://github.com/ton-utilisateur/tp-api-kindergarden.git
cd tp-api-kindergarden
```

### 2. Installer les dépendances

```bash
 npm install
```

### 3. Démarrer l'application
```bash
npm start
```
Accède à : http://localhost:3000