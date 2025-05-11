import ProductDisplay from "./ProductDisplay";
import { sunglasses, premiumLipsticks, budgetLipsticks } from "@/data/products";
import Sidebar from "./Sidebar";

const ChatInterface = () => {
  return (
    <div className="flex">
      <Sidebar />

     {/* <ProductDisplay
        title="💸 😎 Here are some stylish sunglasses thatiHeart listeners are buying!"
        products={sunglasses} /> */}
     {/* <ProductDisplay
        title="🤑 💄 Got it! Here are some Red Lipsticks that iHeart listeners are buying!"
        products={premiumLipsticks} /> */}
    <ProductDisplay
        title="🤑 💄 No problem! Here are some Red Lipsticks at a lower price"
        products={budgetLipsticks} />
    </div>
  );
};

export default ChatInterface;
