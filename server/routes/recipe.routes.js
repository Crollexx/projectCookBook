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


module.exports = router