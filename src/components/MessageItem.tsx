import { Message } from "@/data/messages";
import ProductDisplay from "./ProductDisplay";
import  {PodcastRecommendation, StyleRecommendation} from "./ChatMessages";
import { podcasts, recommendations } from "@/data/messages";
import {sunglasses, premiumLipsticks, budgetLipsticks} from "@/data/products";

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {

    switch (message.messageType) {
        case "product-sunglasses":
            return (
                <ProductDisplay
                    products={sunglasses}
                    title="💸 😎 Alright! Here are some stylish sunglasses that iHeart listeners are buying!"                  
                />
            );

            case "product-lipstick":
            return (
                <ProductDisplay
                    title="🤑 💄 Got it! Here are some Red Lipsticks that iHeart listeners are buying!"
                    products={premiumLipsticks}
                />
            );

            case "product-budget-lipstick":
                return (
                    <ProductDisplay
                        title="🤑 💄 No problem! Here are some Red Lipsticks at a lower price."
                        products={budgetLipsticks}
                    />
                );

            case "podcast-rec":
                return (
                    <PodcastRecommendation
                        podcast={podcasts.find(p => p.id === message.contentId) || podcasts[0]}
                    />
                );
            
            case "style-rec":
                return (
                    <StyleRecommendation
                        recommendation={recommendations.find(r => r.id === message.contentId) || recommendations[0]}
                    />
                );

                 default:
      // Regular text message
      return message.text ? (
        <p
          className={`rounded-lg ${
            message.sender === "user"
              ? "float-right bg-gray-200 text-black text-sm py-1 px-2 mb-4 rounded-full clear-both"
              : "bg-gray-100 p-3 inline-block text-sm"
          }`}
        >
          {message.text}
        </p>
      ) : null;
  }
}; 