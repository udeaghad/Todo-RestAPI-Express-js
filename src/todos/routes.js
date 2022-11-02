const { Router } = require('express');

const router = Router()

const { addTodoItem, getAllTodosItems, getTodoItemDetails, updatedCompletedItem, deleteTodoItem} = require("./controller")

router.post('/', addTodoItem)
router.get('/', getAllTodosItems)
router.get('/:id', getTodoItemDetails)
router.put('/:id', updatedCompletedItem)
router.delete('/:id', deleteTodoItem)


module.exports = router