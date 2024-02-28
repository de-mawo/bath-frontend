import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./lib/session";
import { UserSession } from "./types";

export async function middleware(req: NextRequest) {
  const session: UserSession = await getCurrentUser();

  
  try {
    if (req.nextUrl.pathname === "/" && session) {
      return NextResponse.redirect(new URL("/portal", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/portal") && !session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      session.role !== "ADMIN" &&
      session.role !== "MODERATOR"
    ) {
      return NextResponse.redirect(new URL("/portal", req.url));
    }
  } catch (error) {
    console.log("This is an error", error);
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/portal/:path*", "/"],
};
