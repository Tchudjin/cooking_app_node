const express = require('express');
const app = express();

// Configuration de EJS comme moteur de modèle
app.set('view engine', 'ejs');

// Exemple de données de recettes
const recipes = [
    { id: 1, title: 'Pizza', ingredients: ['Pâte à pizza', 'Sauce tomate', 'Fromage', 'Garnitures au choix'] },
    { id: 2, title: 'Salade César', ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'] }
  ];

  // Route pour afficher une recette par son ID
app.get('/recipes/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (recipe) {
      res.render('recipe', { recipe: recipe });
    } else {
      res.send('Recette introuvable');
    }
  });
  
  // Démarrer le serveur
  const port = 3000;
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });

  