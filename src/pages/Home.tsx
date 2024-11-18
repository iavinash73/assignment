import React, { useState } from 'react';
import logo from "../assets/Logo.png"
import leftLine from "../assets/lineL.png"
import rightLine from "../assets/lineR.png"
import profile1 from "../assets/Avatar1.png"
import profile2 from "../assets/Avatar2.png"
import profile3 from "../assets/Avatar3.png"
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import home from "../assets/Home.png"

const Home: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter a valid email');
            return;
        }

        try {
            await addDoc(collection(db, 'waitlist'), {
                email: email
            });
            console.log("added to firebase")
            setMessage('Successfully joined the waitlist!');
            setEmail('');
        } catch (error) {
            console.error('Error adding email to waitlist:', error);
            setMessage('Failed to join the waitlist. Please try again.');
        }
    };


    return (
        <>
            {/* <img src={home} className='absolute h-screen w-screen'></img> */}
            <div className="relative font-normal text-sm flex items-center gap-5 text-[#D387FF]">
            <img src={logo} className="absolute top-[-100px] left-1/2 transform -translate-x-1/2" alt="Logo" />
            <img src={leftLine} className="h-[2px]" alt="Left Line" />
                Waitlist
                <img src={rightLine} className="h-[2px]" alt="Right Line" />
            </div>
            <div className="text-[64px] md:text-[128px] font-semibold bg-gradient-to-b from-[#49235F] 50% via-[#793D8C] 75% to-[#D387FF] bg-clip-text text-transparent">
            Algenius
            </div>
            <div className="font-sans text-base md:text-lg font-light w-[90vw] md:w-[50vw] lg:w-[30vw] text-center text-[#D387FF] my-4">
                Be first in line to experience the future of AI with AIgenius! Join our waitlist for exclusive access.
            </div>
            <form onSubmit={handleSubmit} className="flex items-center rounded-md w-[80vw] md:w-[50vw] lg:w-[35vw] my-4 border-[2px] border-[#D387FF33] bg-gradient-to-t from-[#D387FF33] to-[#D387FF00] text-[#D387FF] z-10">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-md bg-transparent focus:outline-none placeholder:text-[#D387FF] placeholder:text-[14px] pl-5 font-light placeholder:text-opacity-60 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button type="submit" className="px-4 py-2 bg-[#D387FF] text-[12px] md:text-[14px] text-black font-medium rounded-md hover:bg-[#bc6bfe] duration-300 focus:outline-none m-2 min-w-max">
                    Join Waitlist
                </button>
            </form>
            {message && <div className="text-center text-[#D387FF99]">{message}</div>}
            <div className="flex -space-x-2 overflow-hidden mt-4 items-center">
                <img alt="Profile 1" src={profile1} className="inline-block size-8 rounded-full border-2 border-[#2B1B38]" />
                <img alt="Profile 2" src={profile2} className="inline-block size-8 rounded-full border-2 border-[#2B1B38]" />
                <img alt="Profile 3" src={profile3} className="inline-block size-8 rounded-full border-2 border-[#2B1B38]" />
                <div className="pl-6 text-[#D387FF90] text-sm md:text-base">Join 5,000+ already onboard</div>
            </div>
        </>
    );
};

export default Home;
