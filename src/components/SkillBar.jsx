import React from "react";

const SkillBar = ({ skillName, parcent, lineParcent }) => {
  return (
    <div className="w-[48%] bg-[#e9ecef] mb-11 h-[6px] rounded-3xl relative">
      <div className={`w-[${lineParcent}] h-full rounded-3xl bg-[#f4de4e]`}>
        <div className="span absolute bottom-[8px] left-[3px] capitalize font-medium">
          {skillName}
        </div>
        <div className="span absolute bottom-[8px] right-0">{parcent}</div>
      </div>
    </div>
  );
};

export default SkillBar;
