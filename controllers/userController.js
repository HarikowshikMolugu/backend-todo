const todo = require("../models/userTodo");
const moment = require("moment-timezone");
exports.addTodo = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const newUserTodo = await todo.create({
            userid: id,
            content: content,
            status: "Incomplete",
            created_at: moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
        });

        res.status(200).json({ message: 'Todo added Sucessfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add Todo to user' });
    }
};

exports.getTodosByUserId = async (req, res) => {
    const { id } = req.params;

    try {
        const todos = await todo.findAll({ where: { userid: id } });
        res.status(200).json({ todos: todos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch todos for user' });
    }
};


exports.updateStatus = async (req, res) => {
    const { todoId } = req.params;

    try {
        const result = await todo.update(
            {
                status: "Completed",
                completed_at: moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
            },
            { where: { id: todoId } }
        );

        res.status(200).json({ message: 'Status Updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to Update Status' });
    }
};

exports.removeTodo = async (req, res) => {
    const { todoId } = req.params;

    try {
        const result = await todo.destroy({ where: { id: todoId } });

        res.status(200).json({ message: 'Todo Removed' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to Remove Todo' });
    }
};

exports.todoUpdate = async (req,res) => {
    const { todoId } = req.params;
    const {content} = req.body;

    try{
        const result = await todo.update({ content:content }, {where: {id:todoId}} );

        res.status(200).json({message: 'Todo Updated Sucessfully'});

    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Failed to updated Todo content'});
    }
}
