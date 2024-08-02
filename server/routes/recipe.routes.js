const router = require('express').Router()
const { Recipe } = require('../db/models')

router.get('/', async (req, res) => {
    try {
        const recipeAll = await Recipe.findAll()
        res.json(recipeAll)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})
router.get('/:id', async (req, res) => {
    try {
        const {id}= req.params
        const recipe = await Recipe.findOne({where: {id}})
        res.json(recipe)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})

module.exports = router