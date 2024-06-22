"use client";

import React, { useEffect } from "react";
import { getTodos, getTodosById, getTodosBySearch } from "@/apis/todos-no-rls";

const TodoContainer = () => {
  useEffect(() => {
    getTodosBySearch("부하");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
