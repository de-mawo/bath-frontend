import Container from "@/components/Common/Container";
import ContentWrapper from "@/components/Common/ContentWrapper";
import ProjectsContent from "./ProjectsContent";
import { getUserInfo } from "@/lib/data/getUsers";
import { Project, User } from "@prisma/client";
import { getUserProjectsData } from "@/lib/data/getProjects";

const UserProjectsPage = async () => {

  const user = await getUserInfo();
   // Check if user is null before destructure
   if (!user) {
    // Handle the case where user is null, for example, redirect to login page or display an error message
    return <div>User info not available</div>;
  }

  const {  course } = user as User;

  const projects = await getUserProjectsData(course as string)

  return (
    <>
      <Container>
        <div className="flex flex-wrap justify-between items-center my-6 ">
          {/* LEFT SIDE */}
          <div className="flex justify-start items-center">
            <h2 className="text-xl font-extrabold leading-tight  lg:text-2xl">
              My Projects
            </h2>
          </div>

        </div>
        <ContentWrapper>
          <div className="flex items-center justify-start p-3   ">
            <h3 className="text-lg font-semibold tracking-tight">
              All Projects
            </h3>
          </div>
          <hr />
          <ProjectsContent projects={projects as Project[]} />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default UserProjectsPage;
