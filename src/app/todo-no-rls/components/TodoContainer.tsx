"use client";

import React from "react";
import TodoList from "@/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  console.log("loading", loading);
  console.log("todos", todos);

  return (
    <div>
      <TodoList
        sharedUserFullName="test User"
        ownerUserId="12313"
        loading={loading}
        todoListData={todos as []}
      />
    </div>
  );
};

export default TodoContainer;
