import Todo from "../model/Todo.js";

export const addNewTodo = async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = await Todo.create({
      data: req.body.newTodo,
      createdAt: Date.now(),
    });
    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
