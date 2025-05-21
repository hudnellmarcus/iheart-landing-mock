"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryStore } from "@/store/queryStore";

const LandingPageInput = () => {
  const [inputText, setInputText] = useState("");
  const router = useRouter();
  const setInitialQuery = useQueryStore((state) => state.setInitialQuery);

  useEffect(() => {
  const handlePopState = () => {
    window.location.reload();
  };
  
  window.addEventListener('popstate', handlePopState);
  return () => window.removeEventListener('popstate', handlePopState);
}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
        setInitialQuery(inputText);
      router.push(`/chat`);
    }
  };

  useEffect(() => {
    setInputText("");
    }, []);

  return (
    <div className="flex flex-col items-center w-[90vw] p-4">
      <Image
        src="/iHeartCashback_Horizontal_Logo_red 1.png"
        alt="iheart cashback logo"
        width={500}
        height={45}
         style={{ 
            width: 'min(500px, 60vw) max(700px)',
            height: 'auto',
          }}
        className="mb-8"
        priority
      />
      <form onSubmit={handleSubmit} className="max-w-lg w-full relative">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What are you shopping for?"
          className="text-xs md:text-lg w-full py-3 pl-5 pr-24 text-gray-500 outline-none border-gray-200 border md:border-0 rounded-full shadow-md"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
          <button type="submit" className="focus: outline-none">
            <Image
              src="/PaperPlaneRight.png"
              alt="send message icon"
              width={20}
              height={20}
            />
          </button>
          <button type="button" className="focus: outline-none">
            <Image
              src="/microphone.png"
              alt="iheart cashback logo"
              width={24}
              height={24}
            />
          </button>
        </div>
      </form>
    </div>
  );
};
export default LandingPageInput;
