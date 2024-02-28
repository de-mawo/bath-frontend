import { Modules } from "@/types";
import { cookies } from "next/headers";

export async function getModulesData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/module`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return [];
    }

    const modules: Modules[] = await res.json();

    return [...modules];
  } catch (error) {
    console.error("Error fetching modules:", error);
    console.log(error);

    return;
  }
}
