"use client";
import { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import MessageItem from "./MessageItem";
import { useChat } from "@/hooks/useChat";
import { useQueryStore } from "@/store/queryStore";
import { useSidebarStore } from "@/store/sidebarStore";

const ChatInterface = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { messages, handleSendMessage } = useChat();
  const setInitialQuery = useQueryStore((state) => state.setInitialQuery);
  const initialQuery = useQueryStore((state) => state.initialQuery);
  const {isOpen, close, toggle: toggleSidebar} = useSidebarStore();
  const processedQueriesRef = useRef(new Set<string>()); // tracking processed queries

   const handleToggleSidebar = () => {
    toggleSidebar();
  };

  // scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (initialQuery && !processedQueriesRef.current.has(initialQuery)) {
      console.log("Processing initial query:", initialQuery);

      //mark as processed immediately
      processedQueriesRef.current.add(initialQuery);

      handleSendMessage(initialQuery);
      // clear the initial query after sending
      // this is to prevent sending the same query again when the component re-renders
      // or when the user navigates back to the chat interface
      setInitialQuery(undefined);
    }
  }, [initialQuery, handleSendMessage, setInitialQuery]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={close}
        />
      )}
      <Sidebar />
      <div className="flex w-full flex-1 overflow-auto">
        {/* chat area */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center relative">
          {/* chat messages */}
          <div className="absolute inset-0 overflow-y-auto">
            <div className="flex flex-col items-center min-h-full p-4">
              <div className="w-full max-w-4xl md:max-w-5xl mb-20 space-y-6 mt-auto mx-auto">
                {messages.map((message) => (
                  <div key={message.id} className="clear-both mb-4">
                    <MessageItem message={message} />
                  </div>
                ))}

                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Chat input */}
          <div className="flex absolute bottom-0 p-1 left-0 right-0">
             <button 
                      type="button" 
                      className="block md:hidden" 
                      onClick={handleToggleSidebar}
                    >
                     <img src="/settings_vector.svg" alt="settings" className="h-auto w-full ml-2"/>
                    </button>
            <div className="max-w-3xl mx-auto">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInterface;
