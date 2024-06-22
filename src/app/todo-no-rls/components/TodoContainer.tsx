"use client";

import React, { useEffect } from "react";
import { getTodos } from "@/apis/todos-no-rls";

const TodoContainer = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
