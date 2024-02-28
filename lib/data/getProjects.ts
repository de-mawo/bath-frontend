import { Project } from "@/types";
import { cookies } from "next/headers";

export async function getProjectsData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/project`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

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

export async function getUserProjectsData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/project/myProjects`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

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

export async function getProjectData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/project/${id}`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    if (!res.ok) {
      return [];
    }

    const project: Project = await res.json();

    return project;
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}
