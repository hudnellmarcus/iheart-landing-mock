"use client";
import { useState, useEffect, useRef } from "react";
import ProductDisplay from "./ProductDisplay";
import { sunglasses, premiumLipsticks, budgetLipsticks } from "@/data/products";
import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import { PodcastRecommendation } from "./ChatMessages";
import { podcasts } from "@/data/messages";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatInterface = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I am iHeart Radio. How can I help you?",
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

    //bot response with timeout
    /* setTimeout(() => {
      addNewMessage(
        "Sure! Here are some stylish sunglasses that iHeart listeners are buying!",
        "bot"
      ); */

    // add product display
    if (text.toLowerCase().includes("sunglasses")) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now().toString(),
            text: "product-sunglasses",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-64 h-full flex flex-shrink-0 border-r border-gray-200">
        <Sidebar />
      </div>
      {/* chat area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col mx-auto">
        {/* chat messages */}
        <div className="max-w-3xl mt-auto mb-14 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg max-w-md ${
                message.sender === "user"
                  ? "ml-auto w-auto bg-gray-200 text-iheart-red"
                  : ""
              }`}
            >
              {message.text === "product-sunglasses" ? (
                <ProductDisplay
                  title="💸 😎 Here are some stylish sunglasses thatiHeart listeners are buying!"
                  products={sunglasses}
                />
              ) : (
                <p>{message.text}</p>
              )}
            </div>
          ))}
          {/* <ProductDisplay
        title="💸 😎 Here are some stylish sunglasses thatiHeart listeners are buying!"
        products={sunglasses} /> */}
          {/* <ProductDisplay
        title="🤑 💄 Got it! Here are some Red Lipsticks that iHeart listeners are buying!"
        products={premiumLipsticks} /> 
          <ProductDisplay
            title="🤑 💄 No problem! Here are some Red Lipsticks at a lower price"
            products={budgetLipsticks}
          />*/}
          {/* <PodcastRecommendation podcast={podcasts[0]} /> */}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 fixed z-10 bottom-10 right-50 border border-green-200">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
