import Container from "@/components/Common/Container";
import ContentWrapper from "@/components/Common/ContentWrapper";
import { ReviewSelector } from "./ReviewSelector";
import { getProjectTaskData } from "@/lib/data/getTasks";
import { getOneProjectMarksData } from "@/lib/data/getMarks";
import { getUserInfo } from "@/lib/data/getUsers";
import { redirect } from "next/navigation";
import { Marks, Task, User } from "@/types";

export default async function SingleProjectPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await getUserInfo();

  const { id: LoggedInUserId } = user as User;

  const userId = searchParams.userId as string;
  const projectId = searchParams.proId as string;
  const courseCode = searchParams.course as string;
  const tasks = await getProjectTaskData(projectId);
  const projectmarks = await getOneProjectMarksData(projectId); 

  console.log('ProMarks',projectmarks);
  

  if (userId === LoggedInUserId) {
    redirect(`/portal`);
  }

  return (
    <Container>
      <div className="flex flex-col space-y-4 my-6 ">
        <h2 className="text-xl font-extrabold leading-tight  lg:text-2xl">
          Reviews
        </h2>
      </div>
      <ContentWrapper>
        <ReviewSelector
          tasks={tasks as Task[]}
          projectmarks={projectmarks as Marks}
          courseCode={courseCode}
          userId={userId}
          projectId={projectId}
        />
      </ContentWrapper>
    </Container>
  );
}
