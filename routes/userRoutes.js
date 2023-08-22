const express = require('express');
const userController = require("../controllers/userController")

const router = express.Router();

router.post('/todo/add/:id',userController.addTodo);
router.get('/todo/:id',userController.getTodosByUserId);
router.post('/todo/updateStatus/:todoId',userController.updateStatus);
router.post('/todo/remove/:todoId',userController.removeTodo);
router.post('/todo/update/:todoId',userController.todoUpdate);
module.exports = router;
