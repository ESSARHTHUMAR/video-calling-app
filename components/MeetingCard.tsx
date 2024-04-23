import { avatarImages } from "@/Constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  icon: string;
  title: string;
  date: string;
  buttonIcon: string;
  buttonText: string;
  link: string;
  handleClick: () => void;
  isPreviousMeeting: boolean;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon,
  buttonText,
  handleClick,
  link,
}: MeetingCardProps) => {
  const {toast} = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} height={28} width={28} alt="icon" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              width={40}
              height={40}
              alt="Avatars"
              src={img}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[2px] border-white bg-dark-2 text-white">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
              {buttonIcon && (
                <Image src={buttonIcon} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-dark-4 px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
