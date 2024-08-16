"use client";

import { pingAction } from "@/actions/ping/ping.action";
import { getTodoAction } from "@/actions/todo/\btodo.action";
import React from "react";

const ClientComopnentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log("handleClick result", result);
  };
  return (
    <div>
      <button onClick={handleClick}>Test server actions</button>
    </div>
  );
};

export default ClientComopnentTest;
