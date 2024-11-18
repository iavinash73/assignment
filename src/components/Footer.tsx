import x from '/assets/x.png';
import facebook from '/assets/facebook.png';
import linkedin from '/assets/linkedin.png';
import medium from '/assets/medium.png';
import planet from "/assets/Planet.png";

interface FooterProps  {
    viewportHeight:number;
}
const Footer: React.FC<FooterProps> = ({viewportHeight}) => {
    return (
        // <div className={`${viewportHeight<=680 ? "hidden" : "block"}`}>
        <>
            <div className="absolute z-10 bottom-[20px] flex gap-10">
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={x} className="size-4" alt="Close Icon" />
                </button>
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={facebook} className="size-4" alt="Facebook Icon" />
                </button>
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={linkedin} className="size-4" alt="LinkedIn Icon" />
                </button>
                <button className='opacity-70 hover:opacity-100 duration-300'>
                    <img src={medium} className="size-4" alt="Medium Icon" />
                </button>
            </div>
            <div className={` ${viewportHeight<= 680 ? "bottom-[-70px]" : "bottom-[-50px]"} absolute left-1/2 transform -translate-x-1/2 overflow-hidden w-screen`}>
                <img
                    src={planet}
                    className="min-w-[1440px] max-w-none relative left-1/2 transform -translate-x-1/2"
                    alt="Planet"
                />
            </div>
        </>
    );
};

export default Footer;
