"use client";
import { useState, useEffect, useRef } from "react";
import ProductDisplay from "./ProductDisplay";
import { sunglasses, premiumLipsticks, budgetLipsticks } from "@/data/products";
import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import { PodcastRecommendation, StyleRecommendation } from "./ChatMessages";
import { podcasts, recommendations } from "@/data/messages";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  messageType?:
    | "text"
    | "product-sunglasses"
    | "product-lipstick"
    | "podcast-rec"
    | "style-rec";
  contentId?: string;
};

const ChatInterface = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! How can I help you?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  // scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addNewMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSendMessage = (text: string) => {
    // user message
    addNewMessage(text, "user");

    // bot response with product display for sunglasses
    if (text.toLowerCase().includes("sunglasses")) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now().toString(),
            text: "",
            sender: "bot",
            timestamp: new Date(),
            messageType: "product-sunglasses",
          },
        ]);

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: Date.now().toString(),
              text: "",
              sender: "bot",
              timestamp: new Date(),
              messageType: "style-rec",
              contentId: "rec-001",
            },
          ]);

          setTimeout(() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                id: Date.now().toString(),
                text: "",
                sender: "bot",
                timestamp: new Date(),
                messageType: "podcast-rec",
                contentId: "podcast-001",
              },
            ]);
          }, 6000);
        }, 3000);
      }, 10);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-64 h-full flex-shrink-0 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* chat area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col mx-auto">
        {/* chat messages */}
        <div className="max-w-3xl mt-auto mb-14 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="clear-both mb-4">
              {message.messageType === "product-sunglasses" ? (
                <ProductDisplay
                  title="💸 😎 Here are some stylish sunglasses that iHeart listeners are buying!"
                  products={sunglasses}
                />
              ) : message.messageType === "podcast-rec" ? (
                <PodcastRecommendation
                  podcast={
                    podcasts.find((p) => p.id === message.contentId) ||
                    podcasts[0]
                  }
                />
              ) : message.messageType === "style-rec" ? (
                <StyleRecommendation
                  recommendation={
                    recommendations.find((r) => r.id === message.contentId) ||
                    recommendations[0]
                  }
                />
              ) : (
                // Regular text message
                message.text && (
                  <p
                    className={`rounded-lg ${
                      message.sender === "user"
                        ? "float-right bg-gray-200 text-iheart-red py-1 px-2 mb-4 rounded-full clear-both"
                        : "bg-gray-100 p-3 inline-block"
                    }`}
                  >
                    {message.text}
                  </p>
                )
              )}
            </div>
          ))}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="p-4 fixed z-10 bottom-10 right-50">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
