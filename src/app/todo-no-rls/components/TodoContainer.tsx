"use client";

import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  console.log("loading", loading);
  console.log("todos", todos);

  return (
    <div>
      <TodoList sharedUserFullName="test User" />
    </div>
  );
};

export default TodoContainer;
