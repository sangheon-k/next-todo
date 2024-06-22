"use client";

import React, { useEffect } from "react";
import {
  createTodos,
  getTodos,
  getTodosById,
  getTodosBySearch,
} from "@/apis/todos-no-rls";

const TodoContainer = () => {
  useEffect(() => {
    createTodos("Next.js에서 Todo를 생성함");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
