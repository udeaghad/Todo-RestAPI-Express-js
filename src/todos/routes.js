const { Router } = require('express');

const router = Router()

const { addTodoItem, getAllTodosItems} = require("./controller")

router.post('/', addTodoItem)
router.get('/', getAllTodosItems)


module.exports = router