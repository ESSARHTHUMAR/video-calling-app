import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

const MeetingRoom = () => {

  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal')

  type CallLayoutType = "Speaker-right" | "Speaker-left" | "grid";
  const [layout, setLayout] = useState<CallLayoutType>("Speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const router = useRouter  ();

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "Speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
        <div className="fixed bottom-0 flex items-center justify-center w-full gap-5 flex-wrap p-2">
          <CallControls onLeave={() => router.push("/")} />
          <DropdownMenu>
            <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent className="bg-dark-1 text-white border-dark-1">
              {["Grid", "Speaker-Right", "Speaker-Left"].map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType)
                  }}>
                    {item}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-dark-1"/>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <CallStatsButton />
          <button onClick={() => setShowParticipants((prev) => !prev)}>
            <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <Users size={20} className="text-white" />
            </div>
          </button>
          {!isPersonalRoom && <EndCallButton/>}
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
