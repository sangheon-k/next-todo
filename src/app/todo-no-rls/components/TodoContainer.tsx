"use client";

import React, { useEffect } from "react";
import {
  createTodos,
  getTodos,
  getTodosById,
  getTodosBySearch,
  updateTodos,
} from "@/apis/todos-no-rls";

const TodoContainer = () => {
  useEffect(() => {
    updateTodos(7, "Todo를 업데이트 함!");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
