import React from "react";

const TodoListItem = ({ todo }: any) => {
  return <div>{todo?.content}</div>;
};

export default TodoListItem;
