import React from "react";
import JobItem from "./job-item";

const JobList = ({ jobs }) => {
  // eslint-disable-next-line no-undef
  const groups = Array.from(new Set(jobs.map((item) => item.group)));
  //   const works = ["work", "delay"];
  return groups.map((group) => (
    <div key={group} className="flex flex-col">
      <div className="text-error text-5xl py-10">{group}</div>
      <div>
        {jobs
          .filter((job) => job.group === group)
          .map((item) => (
            <JobItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  ));
};

export default JobList;
