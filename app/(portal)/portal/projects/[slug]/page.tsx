import Container from "@/components/Common/Container";
import ContentWrapper from "@/components/Common/ContentWrapper";
import TaskComponent from "./TaskComponent";
import { getProjectData } from "@/lib/data/getProjects";
import ProjectBanner from "./ProjectBanner";
import ProjectReqs from "./ProjectReqs";
import RequestMarking from "./RequestMarking";
import { getProjectTaskData } from "@/lib/data/getTasks";
import AddProjectWorkLinks from "./AddProjectWorkLinks";
import { getCurrentUser } from "@/lib/session";
import { Project, Task, User } from "@/types";
import { getUserInfo } from "@/lib/data/getUsers";

export default async function SingleProjectPage({

  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await getUserInfo();

  const { id: userId, course } = user as User;

  const id = searchParams.id; 

  const project = await getProjectData(id as string);
  const tasks = await getProjectTaskData(id as string);

  return (
    <Container>
      <ProjectBanner project={project as Project} />
      <ContentWrapper>
        <ProjectReqs project={project as Project} />
        <h3 className="mb-2 text-lg font-extrabold leading-tight  lg:text-2xl">
          Tasks
        </h3>
        <TaskComponent tasks={tasks as Task[]} />
        <AddProjectWorkLinks project={project as Project} userId={userId} />
        <RequestMarking  projectId={id as string} userId={userId} course={course as string}/>
      </ContentWrapper>
    </Container>
  );
}
