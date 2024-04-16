"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import HomeCard from './HomeCard'

const MeetingTypeList = () => {

    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting'>()
    const router = useRouter();
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <HomeCard 
            img="icons/add-meeting.svg"
            title="New Meeting"
            description="Start an instant meeting"
            handleClick={() => setMeetingState('isInstantMeeting')}
            className="bg-orange-1"
        />
        <HomeCard 
            img="icons/schedule.svg"
            title="Schedule Meeting"
            description="Plan your meeting"
            handleClick={() => setMeetingState('isScheduleMeeting')}
            className="bg-blue-1"

        />
        <HomeCard 
            img="icons/recordings.svg"
            title="View Recordings"
            description="Check out your recordings"
            handleClick={() => router.push("/")}
            className="bg-purple-1"

        />
        <HomeCard 
            img="icons/join-meeting.svg"
            title="Join Meeting"
            description="via invitaion link"
            handleClick={() => setMeetingState('isJoiningMeeting')}
            className="bg-yellow-1"

        />
    </section>
  )
}

export default MeetingTypeList