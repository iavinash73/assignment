import { FC } from 'react';
import x from '../assets/x.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium.png';
import planet from "../assets/planet.png";

const Footer: FC = () => {
    return (
        <>
            <div className="absolute z-10 bottom-[20px] flex gap-10">
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={x} className="size-5" alt="Close Icon" />
                </button>
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={facebook} className="size-5" alt="Facebook Icon" />
                </button>
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={linkedin} className="size-5" alt="LinkedIn Icon" />
                </button>
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={medium} className="size-5" alt="Medium Icon" />
                </button>
            </div>
            <img src={planet} className="absolute bottom-[-7vh] left-0 w-full"></img>
        </>
    );
};

export default Footer;