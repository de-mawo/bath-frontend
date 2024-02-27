import Header from "@/components/Common/Header";
import SideBar from "@/components/Common/SideBar";
import { getCurrentUser } from "@/lib/session";
import { UserSession } from "@/types";



export default async function PortalLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const user = await getCurrentUser()

   
    
   
    return (
      <section className="">
      <div className=" min-h-screen bg-slate-100 dark:bg-black">
        <SideBar user={user as UserSession} />
        <div className="sm:ml-[6rem] " > 
          <Header user={user as UserSession} />
          {children}
        </div>
      </div>
    </section>
    );
  }