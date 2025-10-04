# Projet Pok-dex

Ceci est une application Pokédex qui vous permet de parcourir une liste de Pokémon.

## Version Déployée

Vous pouvez voir l'application en direct ici : [https://pok-dex-ss.vercel.app/pokedex](https://pok-dex-ss.vercel.app/pokedex)

## Développement Local

Pour exécuter ce projet localement, vous devrez lancer à la fois le frontend et le backend.

### Backend

Le backend est un simple serveur Express qui sert les données des Pokémon.

1.  Accédez au répertoire `api` :
    ```bash
    cd api
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Démarrez le serveur :
    ```bash
    node pokemon.js
    ```
    Le serveur fonctionnera à l'adresse `http://localhost:3000`.

### Frontend

Le frontend est une application Vue.js construite avec Vite.

1.  Accédez au répertoire `frontend` :
    ```bash
    cd frontend
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Créez un fichier `.env` dans le répertoire `frontend` avec le contenu suivant :
    ```
    VITE_API_URL=http://localhost:3000/api
    ```
4.  Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```
    L'application sera disponible à l'adresse `http://localhost:5173`.

## Structure du Projet

- `api/`: Contient le serveur backend Express.
  - `pokemon.js`: Le fichier principal du serveur.
  - `cache.js`: Middleware de mise en cache.
- `data/`: Contient les données des Pokémon.
  - `pokemons.json`: Un fichier JSON avec tous les Pokémon.
- `frontend/`: Contient l'application frontend Vue.js.
  - `src/`: Le code source principal de l'application Vue.
  - `public/`: Les ressources publiques.
