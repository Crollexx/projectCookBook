const router = require('express').Router()
const { Recipe, UserRecipe } = require('../db/models')

router.post('/', async (req, res) => {
    try {
      const { userId, recipeId } = req.body;
  
      const data = await UserRecipe.create({ userId, recipeId });
  
      res.json({ likeState: true });
    } catch ({ message }) {
      res.status(500).json({ err: message });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const data = await UserRecipe.findAll({
        attributes: [],
        where: { userId: id },
        include: [{ model: Recipe }],
      });
  
      const clearData = data.map(({ Recipe }) => Recipe);
  
      res.json(clearData);
    } catch ({ message }) {
      res.status(500).json({ err: message });
    }
  });

module.exports = router