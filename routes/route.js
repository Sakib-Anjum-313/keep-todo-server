import express from "express";
import {
    addNewTodo,
    deleteTodo,
    getAllTodos,
    toggleTodoDone,
    updateTodo,
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/addNewTodo", addNewTodo);
route.get("/getAllTodos", getAllTodos);
route.get("/getAllTodos/:id", toggleTodoDone);
route.put("/editedTodo/:id", updateTodo);
route.delete("/deleteTodo/:id", deleteTodo);

export default route;
