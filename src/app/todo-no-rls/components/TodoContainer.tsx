"use client";

import React from "react";
import TodoList from "@/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onUpdateTodos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
  } = useTodosController();

  console.log("loading", loading);
  console.log("todos", todos);

  return (
    <div>
      <TodoList
        sharedUserFullName="test User"
        ownerUserId="12313"
        loading={loading}
        todoListData={todos as []}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
