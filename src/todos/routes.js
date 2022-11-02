const { Router } = require('express');

const router = Router()

const { addTodoItem, getAllTodosItems, getTodoItemDetails, updatedCompletedItem} = require("./controller")

router.post('/', addTodoItem)
router.get('/', getAllTodosItems)
router.get('/:id', getTodoItemDetails)
router.put('/:id', updatedCompletedItem)


module.exports = router