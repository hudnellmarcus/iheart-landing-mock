import ProductDisplay from "./ProductDisplay";
import { sunglasses, premiumLipsticks, budgetLipsticks } from "@/data/products";
import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import { PodcastRecommendation } from "./ChatMessages";
import { podcasts } from "@/data/messages";

const ChatInterface = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col relative z-100 items-center h-auto">
        <div className="flex mx-auto">
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
          <PodcastRecommendation podcast={podcasts[0]} />
        </div>
        <div>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
