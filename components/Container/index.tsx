import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container py-8 mx-auto">
      {children}
    </div>
  );
}

export default Container;