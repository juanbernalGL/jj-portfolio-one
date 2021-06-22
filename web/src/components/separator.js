import React from "react";

const Separator = ({ label }) => {
  return (
    <div className="flex flex-row pt-6 align-top">
      <div className="font-barlow text-base border-b border-primary flex-1"></div>
      <div className="font-barlow text-base text-error px-4 flex-shrink-0 flex justify-center">
        {label}
      </div>
      <div className="font-barlow text-base border-b border-primary flex-1"></div>
    </div>
  );
};

export default Separator;
