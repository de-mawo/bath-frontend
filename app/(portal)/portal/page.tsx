import Container from "@/components/Common/Container";
import WelcomeBanner from "./WelcomeBanner";
import UpcomingEvents from "./UpcomingEvents";
import CurrentProjects from "./CurrentProjects";
import ProgressMarks from "./ProgressMarks";
// import { Events, Project, User } from "@prisma/client";
// import { getUserEventsData } from "@/lib/data/getEvents";
// import { getUserInfo } from "@/lib/data/getUsers";
// import { getUserProjectsData } from "@/lib/data/getProjects";
// import { getUserModuleMarksData } from "@/lib/data/getMarks";

const PortalPage = async () => {

  

  return (
    <>
      <Container>
        {/* <WelcomeBanner name={name as string} /> */}
        <div className="  rounded-lg shadow-md px-6  max-h-[80vh] overflow-y-auto bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex-flex-col">
              {/* <UpcomingEvents events={filteredEvents as Events[]}/>
              <CurrentProjects projects={filteredProjects as Project[]} /> */}
            </div>
            <div className="flex flex-col">
              {/* <ProgressMarks moduleMarks={moduleMarks} /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PortalPage;
