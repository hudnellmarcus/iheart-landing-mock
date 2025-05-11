import Image from "next/image";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r border-black/10">
      <div className="flex-1 flex flex-col">
        <button className="flex items-center mt-6 mx-auto py-2 px-12 bg-iheart-red rounded-xl text-white">
          + New chat
        </button>
        <div className="flex flex-col mt-6 w-full mb-92">
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

      <div className="py-4 border-t border-black/10">
        <div className="flex flex-col gap-1">
          <SideBarItem icon="/Trash.png" text="Clear Conversations" href="_#" />
          <SideBarItem icon="/Sun.png" text="Light Mode" href="_#" />
          <SideBarItem icon="/User.png" text="My Account" href="_#" />
          <SideBarItem
            icon="/ArrowSquareOut.png"
            text="Upgrade iHeart Account"
            href="_#"
          />
          <SideBarItem icon="/SignOut.png" text="Log Out" href="_#" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
