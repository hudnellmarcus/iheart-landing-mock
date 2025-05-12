import Image from "next/image";

const ChatInput = () => {
  return (
    <div className="flex justify-between fixed z-10 bottom-20 right-50 bg-gray-400/30 py-3 rounded-lg w-[50vw]">
      <div className="flex px-4 gap-4">
        <Image src="/Image.png" alt="image icon" width={20} height={20} />
        <Image src="/microphone.png" alt="microhpone" width={28} height={28} />
      </div>
      <input type="text" placeholder="Type message" className="w-full outline-none" />
      <button type="submit">
        <Image
          src="/PaperPlaneRight.png"
          alt="send"
          width={24}
          height={24}
          className="mr-4"
        />
      </button>
    </div>
  );
};

export default ChatInput;
