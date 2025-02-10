import { ReactNode } from "react";

export default function ({ children }: Readonly<{ children: ReactNode }>) {
  return <div>hi {children}</div>;
}
