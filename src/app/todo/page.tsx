import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";
import React from "react";
import ClientComopnentTest from "./components/ClientComopnentTest";
import { getTodoAction } from "@/actions/todo/\btodo.action";

/**
 * 1. ServerAction + Route
 * 2. ServerAction + SSR
 * 3. ServerAction + CSR
 */

const page = async () => {
  console.log(">> SSR Start");

  await sleep(1500);

  const res = await getTodoAction();

  console.log(">> SSR End");

  return (
    <div>
      todo page {JSON.stringify(res)}
      <ClientComopnentTest />
    </div>
  );
};

export default page;
