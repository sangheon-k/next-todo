"use client";

import React, { useEffect } from "react";
import {
  createTodos,
  deleteTodosHard,
  deleteTodosSoft,
  getTodos,
  getTodosById,
  getTodosBySearch,
  updateTodos,
} from "@/apis/todos-no-rls";

const TodoContainer = () => {
  useEffect(() => {
    deleteTodosHard(7);
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
