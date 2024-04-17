import { CallingState, useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React from 'react'
import Loader from './Loader';
import { Button } from './ui/button';

const EndCallButton = () => {

    const router = useRouter();
    const call = useCall();
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipants = useLocalParticipant();
    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

    if(callingState !== CallingState.JOINED){
        return <Loader />
    }

    const isMeetingOwner = localParticipants && call?.state.createdBy && localParticipants.userId === call.state.createdBy.id;
    if(!isMeetingOwner) return null;

  return (
    <Button onClick={async () => {
        await call.endCall();
        router.push("/")
    }} className="bg-red-500">
        End call for everyone
    </Button>
  )
}

export default EndCallButton