import Container from "@/components/Common/Container";
import WelcomeBanner from "./WelcomeBanner";
import UpcomingEvents from "./UpcomingEvents";
import CurrentProjects from "./CurrentProjects";
import ProgressMarks from "./ProgressMarks";
import { getUserEventsData } from "@/lib/data/getEvents";
import { Events, Marks, Project, User, UserSession } from "@/types";
import { getCurrentUser } from "@/lib/session";
import { getUserProjectsData } from "@/lib/data/getProjects";
import { getUserModuleMarksData } from "@/lib/data/getMarks";
// import { getUserModuleMarksData } from "@/lib/data/getMarks";

const PortalPage = async () => {

  const user: UserSession = await getCurrentUser();
  const events = await getUserEventsData();
  const projects = await getUserProjectsData()
  const moduleMarks = await getUserModuleMarksData()

  const { name} = user as User;

  // Get today's date
  const today = new Date();
  // Get the date after 7 days
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  // Filter events
  const filteredEvents = events?.filter((event) => {
    // Convert startDate and endDate strings to Date objects
    const startDate = new Date(event.startDate as Date );
    const endDate = event.endDate ? new Date(event.endDate) : Infinity;
  
    // Check if startDate is less than or equal to today and endDate is less than next 7 days
    return startDate <= today || endDate < nextWeek;
  });
  
  

  const filteredProjects = projects?.filter((project) => {
    // Convert startDate and endDate strings to Date objects
    const startDate = new Date(project.startDate);
    const endDate = project.endDate ? new Date(project.endDate) : Infinity;
  
    // Check if startDate is equal to today or is within the next 7 days
    return startDate >= today && endDate < nextWeek;
  });
  


  return (
    <>
      <Container>
        <WelcomeBanner name={name as string} />
        <div className="  rounded-lg shadow-md px-6  max-h-[80vh] overflow-y-auto bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex-flex-col">
              <UpcomingEvents events={filteredEvents as Events[]}/>
              <CurrentProjects projects={filteredProjects as Project[]} />
            </div>
            <div className="flex flex-col">
              <ProgressMarks moduleMarks={moduleMarks as Marks[]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PortalPage;
