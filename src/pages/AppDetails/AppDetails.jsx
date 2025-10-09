import React from 'react';
import Downloadicon from "./../../assets/icon-downloads.png"
import ratings from "./../../assets/icon-ratings.png"
import Review from "./../../assets/icon-review.png"

const AppDetails = () => {
    return (
    <div className='p-15 space-y-5'>
        
    <div>
        <img src="" alt="" />
        <div className='space-y-4'>
            <h1 className='font-bold text-4xl text-[#001931]'>SmPlan:ToDo List with Reminder</h1>
            <p className='font-bold'>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>productive.io</span></p>
           <div className='flex space-x-15 items-center'>
             <div className=' space-y-3'>
                <img src={Downloadicon} alt="" />
                <p>Downloads</p>
                <h1 className='font-bold text-4xl text-[#001931]'>8M</h1>
            </div>
             <div className=' space-y-2'>
                <img src={ratings} alt="" />
                <p>Average Ratings</p>
                <h1 className='font-bold text-4xl text-[#001931]'>4.9</h1>
            </div>
             <div className=' space-y-1'>
                <img src={Review} alt="" />
                <p>Total Reviews</p>
                <h1 className='font-bold text-4xl text-[#001931]'>54K</h1>
            </div>
           </div>
           <button className='btn bg-[#00D390] text-white font-bold text-xl'>Install Now (291 MB)</button>
        </div>
    </div>

   <div>
    <h1 className='font-bold text-xl text-[#001931]'>Ratings</h1>
   </div>

   <div>
    <h1 className='font-bold text-xl text-[#001931]'>Description</h1>
    <p className='text-[#627382]'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
   <br />
A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
   </div>

    </div>
    );
};

export default AppDetails;