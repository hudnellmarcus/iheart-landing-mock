import Footer from "@/components/Footer";
import LandingPageInput from "@/components/LandingPageInput";
import ChatLayout from "@/components/ChatLayout";

export default function Home() {
  return (
    <ChatLayout>
      <div className="flex flex-col mt-12 justify-start md:mt-0 items-center md:justify-center flex-1">
        <LandingPageInput />
      </div>
      <div className="flex">
        <Footer />
      </div>
      </ChatLayout>
  );
}
