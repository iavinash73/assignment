import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const WaitlistPage: React.FC = () => {
    const [emails, setEmails] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'waitlist'));
                const fetchedEmails: string[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.email) {
                        fetchedEmails.push(data.email);
                    }
                });
                setEmails(fetchedEmails);
            } catch (error) {
                console.error('Error fetching emails:', error);
                setError('Failed to load emails. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchEmails();
    }, []);

    if (loading) {
        return <div className='font-semibold text-[#D387FF] text-3xl'>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-full h-full p-4 flex flex-col items-center justify-center">
            <h1 className={`text-[44px] md:text-[60px] font-semibold bg-gradient-to-b from-[#49235F] 50% via-[#793D8C] 75% to-[#D387FF] bg-clip-text text-transparent mb-6`}>Waitlist Emails</h1>
            {emails.length === 0 ? (
                <p>No emails found.</p>
            ) : (
                <ul className="list-none space-y-2">
                    {emails.map((email, index) => (
                        <li key={index} className="text-[#D387FF] text-lg">{email}</li>
                    ))}
                </ul>
            )}
              <button onClick={() => { navigate('/') }} className='p-3 rounded-md w-[40vw] font-medium border-[2px] border-[#D387FF33] bg-gradient-to-t from-[#D387FF33] to-[#D387FF00] text-[#D387FF] mt-10 relative z-10'>
                Back to home
            </button>
        </div>
    );
};

export default WaitlistPage;
