import { cookies } from "next/headers";

export async function getCourses() {
  try {
    const res = await fetch("http://localhost:4000/api/v1/course", {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return null;
    }

    const courses = await res.json();

    return courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    console.log(error);

    return error;
  }
}


