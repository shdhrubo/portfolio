import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#10121B] min-h-[60vh] flex items-center justify-center w-full">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h4 className="text-6xl font-bold text-[#44A076] mb-4">404</h4>
        <p className="text-2xl text-white underline decoration-[#44A076] underline-offset-8">Page Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
