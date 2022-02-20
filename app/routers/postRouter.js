const express = require('express')
const app = express()
const router = express.Router()

const postCrontroller = require('../controllers/postController')


router.get('/', postCrontroller.index )
router.post('/', postCrontroller.store )
router.get('/:id', postCrontroller.show)
router.put('/:id', postCrontroller.update )
router.delete('/:id', postCrontroller.delete)



module.exports = router