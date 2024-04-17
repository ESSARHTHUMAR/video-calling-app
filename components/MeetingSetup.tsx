"use client";

import React, { useEffect, useState } from "react";
import {
  VideoPreview,
  useCall,
  DeviceSettings,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const call = useCall();
  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );
  }

  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex items-center justify-center h-16 gap-3">
        <label className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with Mic and Camera off.
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="bg-green-500"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
