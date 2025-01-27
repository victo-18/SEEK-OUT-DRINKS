import{ ReactNode } from "react";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <p className="bg-red-500 p-4 font-medium text-white text-center rounded-md mt-4 mb-4">
      {children}
    </p>
  );
};
