import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const counterVal = req.cookies.get(COOKIE_COUNTER)?.value;

  if (counterVal) {
    response.cookies.set(COOKIE_COUNTER, `${Number(counterVal) + 1}`);
  } else {
    response.cookies.set(COOKIE_COUNTER, "1");
  }

  return response;
}

export const config = {
  matcher: ["/", "/todo-no-rls", "/api/:path*"],
};

const COOKIE_COUNTER = "cookie-counter";
