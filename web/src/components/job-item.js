import React from "react";

const JobItem = ({ title, description, timeline, enterprise }) => {
  return (
    <div className="flex flex-row w-full py-4">
      <div className="flex flex-col w-2/6">
        <p className="font-barlow text-secondary-grey font-light text-base">
          {timeline}
        </p>
        <h5 className="text-lg font-barlow">{title}</h5>
        <small className="text-xs font-light  font-barlow">{enterprise}</small>
      </div>
      <div className="w-4/6 font-barlow font-base">{description}</div>
    </div>
  );
};

export default JobItem;
