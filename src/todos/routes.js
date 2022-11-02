const { Router } = require('express');

const router = Router()

const { addTodoItem} = require("./controller")

router.post('/', addTodoItem)

module.exports = router