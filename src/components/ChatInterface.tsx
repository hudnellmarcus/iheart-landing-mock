"use client";
import { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import MessageItem from "./MessageItem";
import { useChat } from "@/hooks/useChat";
import { Message, MessageType } from "@/data/messages";
import { useSearchParams } from "next/navigation";
import { useQueryStore } from "@/store/queryStore";

const ChatInterface = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { messages, handleSendMessage } = useChat();
  const searchParams = useSearchParams();
  const setInitialQuery = useQueryStore((state) => state.setInitialQuery);
  const initialQuery = useQueryStore((state) => state.initialQuery);

  // scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
   if(initialQuery !== undefined) {
    handleSendMessage(initialQuery);
    setInitialQuery(undefined);
   }
  }, [initialQuery, handleSendMessage, setInitialQuery]);

  return (
    <div className="flex h-screen w-full mt-6 overflow-hidden">
      <div className="w-64 h-full flex-shrink-0 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* chat area */}
      <div className="flex-1 overflow-y-auto p-4 ml-12 flex flex-col mx-auto">
        {/* chat messages */}
        <div className="max-w-3xl mt-auto mb-14 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="clear-both mb-4">
              <MessageItem message={message} />
            </div>
          ))}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="p-4 fixed z-10 bottom-10 right-80">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
