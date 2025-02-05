import { ReactElement } from "react";

interface PropsInterface {
  icon: ReactElement;
  text: string;
}

export function SidebarItem({ icon, text }: PropsInterface) {
  return (
    <div className="flex text-gray-700 py-2  hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
