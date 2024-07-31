const router = require('express').Router()
const auth = require('./auth.routes')
const favourite = require('./favourite.routes')
const recipe = require('./recipe.routes')

router.use('/auth', auth)
router.use('/favourite', favourite)
router.use('/recipe', recipe)



module.exports = router