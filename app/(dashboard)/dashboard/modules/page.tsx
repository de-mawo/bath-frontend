import Container from "@/components/Common/Container";
import AddModule from "./AddModule";
import AdminModulesTable from "./AdminModulesTable";
import { getModulesData } from "@/lib/data/getModules";
import { Modules } from "@/types";



const ModulesPage = async () => {
    const modules = await getModulesData();
    return (
      <>
        <Container>
          <div className="flex flex-wrap justify-between items-center my-6 ">
            {/* LEFT SIDE */}
            <div className="flex justify-start items-center">
              <h2 className="text-xl font-extrabold leading-tight  lg:text-2xl">
                Modules
              </h2>
            </div>
  
            {/* RIGHT SIDE  */}
  
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6 ">
             
              <AddModule />
            </div>
          </div>
          <AdminModulesTable modules={modules as Modules[]} />
        </Container>
      </>
    );
  };
  
  export default ModulesPage;