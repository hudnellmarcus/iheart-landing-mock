"use client";
import { useState } from "react";
import Image from "next/image";
import { useSidebarStore } from "@/store/sidebarStore";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [inputText, setInputText] = useState("");
  const { toggle: toggleSidebar } = useSidebarStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between bg-gray-200 py-3 rounded-lg w-[50vw]"
    >
      <div className="flex px-4 gap-4">
        <button 
          type="button" 
          className="block md:hidden" 
          onClick={toggleSidebar}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <Image src="/Image.png" alt="image icon" width={20} height={20} />
        <Image src="/microphone.png" alt="microhpone" width={28} height={28} />
      </div>
      <input
        type="text"
        placeholder="Type message"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        className="w-full outline-none"
      />

      <button type="submit">
        <Image
          src="/PaperPlaneRight.png"
          alt="send"
          width={24}
          height={24}
          className="mr-4"
        />
      </button>
    </form>
  );
};

export default ChatInput;
