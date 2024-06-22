import React from "react";
import { sleep } from "@/lib/utils";

const page = async () => {
  // throw new Error("custom Error"); // error test
  await sleep(1500); // loading test
  return <div>page</div>;
};

export default page;
