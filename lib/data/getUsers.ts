import {  Task } from "@/types";
import { cookies } from "next/headers";

export async function  getAdminUsersData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return [];
    }

    const users: Task[] = await res.json();

    return [...users];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}
