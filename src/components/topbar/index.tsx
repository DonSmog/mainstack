import React from "react";

const TopBar = ({ title }: { title: string }) => {
  return (
    <div className="text-left text-[20px] font-bold leading-[24px] text-primary">
      {title}
    </div>
  );
};

export default TopBar;
