import { Project } from "@/types";
import { cookies } from "next/headers";

export async function getProjectsData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/project`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return [];
    }

    const projects: Project[] = await res.json();

    return [...projects];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}
