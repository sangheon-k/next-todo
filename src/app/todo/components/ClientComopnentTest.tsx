"use client";

import { pingAction } from "@/actions/ping/ping.action";
import React from "react";

const ClientComopnentTest = () => {
  const handleClick = async () => {
    const result = await pingAction();
    console.log(result);
  };
  return (
    <div>
      <button onClick={handleClick}>Test server actions</button>
    </div>
  );
};

export default ClientComopnentTest;
