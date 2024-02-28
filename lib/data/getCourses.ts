import { Course } from "@/types";
import { cookies } from "next/headers";

export async function getCoursesData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/course`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return [];
    }

    const courses: Course[] = await res.json();

    return [...courses];
  } catch (error) {
    console.error("Error fetching courses:", error);
    console.log(error);

    return;
  }
}
