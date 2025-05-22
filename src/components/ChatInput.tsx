"use client";
import { useState } from "react";
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
      className=" flex-col justify-center bg-gray-200 py-3 px-4 md:px-0 mb-2 h-20 rounded-lg w-full md:w-[50vw]"
    >
      <div className="flex">
        <input
          type="text"
          placeholder="Type message"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          className="w-full px-4 outline-none"
        />
        <button type="submit">
          <img
            src="/PaperPlaneRight.svg"
            alt="send"
            className="mr-6 px-2 w-full h-full"
          />
        </button>
      </div>
      <div className="flex w-24 items-center justify-between px-4 mt-2">
        <img src="/image_vector.svg" alt="image icon" className="w-6 h-6" />
        <img src="/Microphone.svg" alt="microhpone" className="w-6 h-6" />
      </div>
    </form>
  );
};

export default ChatInput;
