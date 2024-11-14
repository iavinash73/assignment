import React from 'react';
import leftLine from "../assets/lineL.png"
import rightLine from "../assets/lineR.png"
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <div className="font-medium flex items-center gap-5 justify-center">
                <img src={leftLine} className="h-[2px]" alt="Left Line" />
                Not Found
                <img src={rightLine} className="h-[2px]" alt="Right Line" />
            </div>
            <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[128px] font-medium bg-gradient-to-t from-[#E9C2FF] to-[#2B1B38] bg-clip-text text-transparent">
                404
            </h1>
            <button onClick={() => { navigate('/') }} className='p-3 rounded-md w-[40vw] font-medium border-[1px] border-[#D387FF33] bg-gradient-to-t from-[#D387FF33] to-[#D387FF00]'>
                Back to home
            </button>
        </div>
    );
};

export default NotFound;
