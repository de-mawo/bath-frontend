import { CopyToClipBoard } from "@/components/Common/CopyToClipBoard";
import TableWrapper from "@/components/Common/TableWarapper";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Project } from "@prisma/client";

type Props = {
    projects: Project[];
  };

const AdminProjectsTable = ({ projects }: Props) => {

    return (
        <TableWrapper title="All Projects">
        <div className="relative overflow-x-auto  ">
          <Table>
            <TableHeader className="whitespace-nowrap">
              <TableRow>
                <TableHead>Project Code</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Tags</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="whitespace-nowrap">
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">
                    {" "}
                    <Badge> {project.code}</Badge>{" "}
                  </TableCell>
                  <TableCell className="font-medium capitalize relative  group">
                    <Badge
                      variant="outline"
                      className="hover:bg-slate-100  group-hover:opacity-25"
                    >
                      {project.id}
                    </Badge>
                    <CopyToClipBoard
                      text={project.id}
                      className="absolute text-rose-600 right-48 top-2 cursor-pointer invisible group-hover:visible  "
                    />
                  </TableCell>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.slug}</TableCell>
                  <TableCell>
                    <ul className="list-none flex flex-wrap space-x-2">
                      {project.tags.map((value, index) => {
                        return (
                          <li key={index} className="">
                            <Badge>{value}</Badge>
                          </li>
                        );
                      })}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableWrapper>
      )
  
}

export default AdminProjectsTable