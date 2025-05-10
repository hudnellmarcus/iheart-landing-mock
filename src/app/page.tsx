import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-12 overflow-hidden">
      <div className="flex flex-col items-center">
        <Image
          src="/iHeartCashback_Horizontal_Logo_red 1.png"
          alt="iheart cashback logo"
          width={500}
          height={500}
          style={{ width: "auto", height: "auto" }}
          className="mb-8"
        />
        <div className="max-w-lg w-full relative">
          <input
            type="text"
            placeholder="What are you shopping for?"
            className="w-full py-3 pl-5 pr-24 text-gray-500 outline-none border-none rounded-full shadow-sm"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
            <button className="focus: outline-none">
              <Image
                src="/PaperPlaneRight.png"
                alt="send message icon"
                width={24}
                height={24}
              />
            </button>
            <button className="focus: outline-none">
              <Image
                src="/microphone.png"
                alt="iheart cashback logo"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
