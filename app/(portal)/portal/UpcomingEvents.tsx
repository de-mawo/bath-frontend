import { BsCalendar2Event } from "react-icons/bs";
import { TbTimelineEventMinus } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import dayjs from "dayjs";
import { Events } from "@/types";

type Props = {
  events: Events[]
}

const UpcomingEvents = ({events}: Props) => {
  return (
    <>
      <div className="flex items-center justify-between p-3   ">
        <div className="flex items-center space-x-3">
          <BsCalendar2Event />
          <h3 className="text-lg font-semibold tracking-tight">
            Upcoming Events{" "}
          </h3>
        </div>
      
          <button className="  text-rose-500 p-2">
            <TbTimelineEventMinus size={32} />
          </button>
        
      </div>
      <hr />
      {
        events?.map((event) => (
          <div className="flex items-center mt-2" key={event.id}>
          <div className="w-16 h-16 flex flex-col items-center m-3 font-semibold rounded-md border">
            <div className="bg-rose-500 w-full text-center rounded-md text-white">
              {dayjs(event.startDate).format('MMM')}
            </div>
            <div className="h-2/3 w-full flex items-center justify-center">
            {dayjs(event.startDate).format('DD')}
          
            </div>
          </div>
          <div className="flex flex-col">
            <h4>{event.title}</h4>
            <div className="flex items-center space-x-2 text-xs sm:text-base">
              <IoLocationOutline />{" "}
              <Link
                href={event.url as string}
                target="_blank"
                className="capitalize"
              >
                {event.venue}
              </Link>
            </div>
          </div>
        </div>

        ))
      }
     
    </>
  );
};

export default UpcomingEvents;
