"use client";

import React, { useEffect } from "react";
import { getTodos, getTodosById } from "@/apis/todos-no-rls";

const TodoContainer = () => {
  useEffect(() => {
    getTodosById(1);
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
