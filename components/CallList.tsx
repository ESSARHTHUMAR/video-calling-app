"use client"


import { useGetCalls } from '@/hooks/useGetCalls'
import { CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CallList = ({ type } : { type: 'ended' | 'upcoming' | 'recordings'}) => {

    const { endedCalls, recordings, upcomingCalls, isLoading } = useGetCalls();
    const router = useRouter();
    const [recording, setRecording] = useState<CallRecording[]>([])

    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls;

            case 'recordings':
                    return recording;

            case 'upcoming':
                    return upcomingCalls;
        
            default:
                return [];
        }
    }

    const getNoCallsMessage = () => {
        switch (type) {
            case 'ended':
                return 'No Previous Calls';

            case 'recordings':
                    return 'No recordings';

            case 'upcoming':
                    return 'No upcoming calls';
        
            default:
                return '';
        }
    }

  return (
    <div>CallList</div>
  )
}

export default CallList