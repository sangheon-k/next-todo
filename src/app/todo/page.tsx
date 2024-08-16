import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";
import React from "react";
import ClientComopnentTest from "./components/ClientComopnentTest";

const page = async () => {
  console.log(">> SSR Start");

  await sleep(1500);

  const res = await pingAction();

  console.log(">> SSR End");

  return (
    <div>
      <ClientComopnentTest />
    </div>
  );
};

export default page;
