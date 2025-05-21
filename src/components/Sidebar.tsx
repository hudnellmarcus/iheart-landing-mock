import SideBarItem from "./SideBarItem";
import { useSidebarStore } from "@/store/sidebarStore";

const Sidebar = () => {
  const { isOpen, close } = useSidebarStore();

  return (
    <div className={`
      flex flex-col h-auto bg-white border-r border-black/10 overflow-y-auto overflow-x-hidden
      md:block
      fixed md:relative inset-y-0 left-0 z-30
      w-64 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="flex flex-col">
        <button className="flex items-center mt-6 mx-auto py-2 px-12 bg-iheart-red rounded-xl text-white">
          + New chat
        </button>
        <div className="flex flex-col mt-6 w-full">
          <SideBarItem
            icon="/ChatText.png"
            text="Cashback on Earrings"
            href="_#"
          />
          <SideBarItem
            icon="/ChatText.png"
            text="Cashback on Shoes"
            href="_#"
          />
        </div>
      </div>

      <div className="py-4 border-t border-black/10 mt-6">
        <div className="flex flex-col gap-1">
          <SideBarItem icon="/Trash.png" text="Clear Conversations" href="_#" />
          <SideBarItem icon="/Sun.png" text="Light Mode" href="_#" />
          <SideBarItem icon="/User.png" text="My Account" href="_#" />
          <SideBarItem
            icon="/ArrowSquareOut.png"
            text="Upgrade iHeart Account"
            href="_#"
          />
          <SideBarItem icon="/SignOut.png" text="Log Out" href="_#"/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
