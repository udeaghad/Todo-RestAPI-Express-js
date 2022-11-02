const { Router } = require('express');

const router = Router()

const { addTodoItem, getAllTodosItems, getTodoItemDetails} = require("./controller")

router.post('/', addTodoItem)
router.get('/', getAllTodosItems)
router.get('/:id', getTodoItemDetails)


module.exports = router