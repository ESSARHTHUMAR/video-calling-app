import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  title: string;
  className?: string;
  handleClick?: () => void;
  buttonText: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  buttonText,
  className,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-6 w-full max-w-[520px] border-none text-white bg-dark-1 px-6 py-9">
       <div className="flex flex-col gap-6">
        {image && (
            <div className="flex justify-center">
                <Image src={image} width={72} height={72} alt="image"/>
            </div>
        )}
        <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
        {children}
        <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
            {buttonIcon && (
                <Image src={buttonIcon} width={13} height={13} alt="Start meeting"/>
            )} &nbsp;
            {buttonText || "Schedule Meeting"}
        </Button>
       </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
