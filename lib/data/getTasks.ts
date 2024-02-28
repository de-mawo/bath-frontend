import {  Task } from "@/types";
import { cookies } from "next/headers";

export async function getTasksData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/task`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return [];
    }

    const tasks: Task[] = await res.json();

    return [...tasks];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}

export async function getProjectTaskData(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/task/${id}`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return [];
    }

    const tasks: Task[] = await res.json();

    return [...tasks];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}
