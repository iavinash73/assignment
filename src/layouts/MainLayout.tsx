import React from 'react';
import Footer from '../components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="h-[100vh] w-[100vw] font-sans text-[#E9C2FF99] flex flex-col justify-center items-center gap-4"
      style={{
        backgroundImage: "radial-gradient(circle, #230D37, #0D0316)",
      }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
