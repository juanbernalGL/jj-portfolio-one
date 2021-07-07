import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="flex flex-col">
      <div className="text-error text-5xl py-10">skills</div>
      <div className="flex flex-wrap py-4">
        {skills.map((item) => (
          <div
            key={item}
            className="font-barlow text-sm border-primary border px-4 py-3 m-1 text-primary"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
