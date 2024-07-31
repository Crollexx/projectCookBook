const router = require('express').Router()

router.route('/')
.get()
router.route('/:id')
.delete()

module.exports = router