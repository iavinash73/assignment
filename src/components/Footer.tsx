import { FC } from 'react';
import x from '../assets/x.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium.png';
import planet from "../assets/planet.png";

const Footer: FC = () => {
    return (
        <>
            <div className="absolute z-10 bottom-[20px] flex gap-6">
                <img src={x} className="size-8" alt="Close Icon" />
                <img src={facebook} className="size-8" alt="Facebook Icon" />
                <img src={linkedin} className="size-8" alt="LinkedIn Icon" />
                <img src={medium} className="size-8" alt="Medium Icon" />
            </div>
            <img src={planet} className='absolute bottom-0'></img>
        </>
    );
};

export default Footer;
