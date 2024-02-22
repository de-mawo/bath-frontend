import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./lib/session";
import { UserSession } from "./types";


export async function middleware(req: NextRequest) {
  try {
    const session: UserSession = await getCurrentUser();
    
    console.log(session);
    
    
    if (req.nextUrl.pathname === "/" && session) {
      return NextResponse.redirect(new URL("/portal", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/portal") && !session) {
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
    console.log(error);
    
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/portal/:path*", "/"],
};
