import {  Task, User } from "@/types";
import { cookies } from "next/headers";
import { getCurrentUser } from "../session";

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


export async function getUserInfo() {
  const loggedInUser = await getCurrentUser();
  if (!loggedInUser) {
    return {};
  }
const email = loggedInUser.email
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/${email}`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return {};
    }

    const userInfo: User = await res.json();

    return userInfo
  } catch (error) {
    console.error("Error fetching user info:", error);
    return {}
  }
}