import {  Marks } from "@/types";
import { cookies } from "next/headers";

export async function getUserModuleMarksData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/marks`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    if (!res.ok) {
      return [];
    }

    const marks: Marks[] = await res.json();

    return [...marks];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}


export async function getOneProjectMarksData(projectId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/marks/${projectId}`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    if (!res.ok) {
      return {};
    }

    const marks: Marks = await res.json();

    return marks;
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}
