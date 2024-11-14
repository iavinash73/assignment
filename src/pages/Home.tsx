import React, { useState } from 'react';
import logo from "../assets/Logo.png"
import leftLine from "../assets/lineL.png"
import rightLine from "../assets/lineR.png"
import profile1 from "../assets/Avatar1.png"
import profile2 from "../assets/Avatar2.png"
import profile3 from "../assets/Avatar3.png"
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


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
            <img src={logo} className="absolute top-14" alt="Logo" />
            <div className="font-medium flex items-center gap-5">
                <img src={leftLine} className="h-[2px]" alt="Left Line" />
                Waitlist
                <img src={rightLine} className="h-[2px]" alt="Right Line" />
            </div>
            <div className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[128px] font-medium bg-gradient-to-t from-[#E9C2FF] to-[#2B1B38] bg-clip-text text-transparent">
                Algenius
            </div>
            <div className="font-sans w-[50vw] text-center">
                Be first in line to experience the future of AI with AIgenius! Join our waitlist for exclusive access.
            </div>
            <form onSubmit={handleSubmit} className="flex items-center rounded-md w-[90vw] sm:w-[70vw] md:w-[40vw] mt-4 border-[1px] border-[#D387FF33] bg-gradient-to-t from-[#D387FF33] to-[#D387FF00]">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-md bg-transparent focus:outline-none placeholder:text-[#E9C2FF] pl-5 font-light placeholder:text-opacity-60 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button type="submit" className="px-4 py-2 bg-[#D387FF] text-[12px] md:text-[14px] text-black font-medium rounded-md hover:bg-[#bc6bfe] duration-300 focus:outline-none m-2 min-w-max">
                    Join Waitlist
                </button>
            </form>
            {message && <div className="mt-4 text-center">{message}</div>}
            <div className="flex -space-x-2 overflow-hidden mt-4 items-center">
                <img alt="Profile 1" src={profile1} className="inline-block size-8 rounded-full border border-[#2B1B38]" />
                <img alt="Profile 2" src={profile2} className="inline-block size-8 rounded-full border border-[#2B1B38]" />
                <img alt="Profile 3" src={profile3} className="inline-block size-8 rounded-full border border-[#2B1B38]" />
                <div className="pl-6 text-[#D387FF99]">Join 5,000+ already onboard</div>
            </div>
        </>
    );
};

export default Home;
