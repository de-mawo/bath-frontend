import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { ScrollArea } from "../ui/scroll-area";

type DialogProps = {
  children: ReactNode;
  btnTitle?: string;
  title?: string;
  descr?: string;
  isBtn: boolean;
  icon?: IconType;
};

const DialogWrapper = ({
  children,
  btnTitle,
  title,
  descr,
  icon: Icon,
  isBtn,
}: DialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isBtn ? (
          <Button>{btnTitle}</Button>
        ) : (
          Icon && (
            <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
              <Icon size={24} />
            </button>
          )
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ScrollArea className="max-h-[80vh]">
          <DialogHeader>
            <DialogTitle> {title}</DialogTitle>
            <DialogDescription>{descr}</DialogDescription>
          </DialogHeader>
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
