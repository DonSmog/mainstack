import { ReactNode } from "react";

export const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border rounded-[12px] border-border px-3 py-4 w-full">
      {children}
    </div>
  );
};
