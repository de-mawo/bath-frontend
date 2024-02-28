import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const CurrentProjects = ({ projects }: Props) => {
  return (
    <>
      <div className="flex items-center justify-start p-3   ">
        <h3 className="text-lg font-semibold tracking-tight">
          Current Projects
        </h3>
      </div>
      <hr />
      {projects?.map((project) => (
        <div className="flex flex-col p-3" key={project.id}>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{project.code}</Badge>{" "}
            <Link
              href={`/portal/projects/${project.slug}?id=${project.id}`}
              className="text-lg font-semibold tracking-tight hover:underline underline-offset-2"
            >
              {project.title}
            </Link>
          </div>
          <p className="inline-flex items-center text-xs sm:text-base">
            started on{" "}
            <span className="mx-1">
              {dayjs(project.startDate).format("MMM")}{" "}
              {dayjs(project.startDate).format("DD")},{" "}
              {dayjs(project.startDate).format("YYYY")}
            </span>{" "}
            ending on <span className="mx-1">{dayjs(project.endDate).format("MMM")}{" "}
              {dayjs(project.endDate).format("DD")},{" "}
              {dayjs(project.endDate).format("YYYY")}</span>{" "}
          </p>
        </div>
      ))}
    </>
  );
};

export default CurrentProjects;
