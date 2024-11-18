import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div
      className="h-[100vh] w-[100vw] font-sans flex flex-col justify-center items-center"
      style={{
        backgroundImage: "radial-gradient(circle, #230D37, #0D0316)",
      }}
    >
      {children}
      <Footer viewportHeight={viewportHeight} />
    </div>
  );
};

export default MainLayout;
