import express from "express";
import { addNewTodo } from "../controller/todo-controller.js";

const route = express.Router();

route.post("/addNewTodo", addNewTodo)


export default route;
