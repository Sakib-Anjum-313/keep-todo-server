import express from "express";
import {
    activeTodo,
    addNewTodo,
    deleteTodo,
    doneTodo,
    getAllTodos,
    toggleTodoDone,
    updateTodo
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/addNewTodo/:email", addNewTodo);
route.get("/getAllTodos/:email", getAllTodos);
route.get("/getAllTodos/:email/:id", toggleTodoDone);
route.put("/editedTodo/:id", updateTodo);
route.delete("/deleteTodo/:id", deleteTodo);



route.get("/activeTodos/:email", activeTodo);
route.get("/doneTodos/:email", doneTodo);



export default route;
