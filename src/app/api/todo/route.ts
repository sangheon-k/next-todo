import { NextResponse } from "next/server";
import { getTodoAction } from "@/actions/todo/\btodo.action";

export const GET = async () => {
  const result = await getTodoAction();

  console.log("todo GET API income", result);
  return NextResponse.json({ ...result });
};
