import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6 ">
      <div className="flex text-2xl pt-8 items-center ">
        <div className="pr-2 text-purple-500">
          <Logo />
        </div>
        Brainly
      </div>
      <div className="pt-8 pl-4 cursor-pointer">
        <SidebarItem icon={<TwitterIcon />} text="Twitter" />
        <SidebarItem icon={<YoutubeIcon />} text="Videos" />
      </div>
    </div>
  );
}
