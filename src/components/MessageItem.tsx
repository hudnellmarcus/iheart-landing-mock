import { Message } from "@/data/messages";
import ProductDisplay from "./ProductDisplay";
import { PodcastRecommendation, StyleRecommendation } from "./Recommendations";
import { podcasts, recommendations } from "@/data/messages";
import { sunglasses, premiumLipsticks, budgetLipsticks } from "@/data/products";

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
          title="🤑 💄 Got it! There are many great lipsticks on the market. If you can provide more details about the finish you prefer (matte, satin, glossy, sheer), undertone (cool, warm, neutral) or any other special features, I think I can narrow the options a bit more. Or, if you just want a recommendation right now, here are three great products across different categories:"
          products={premiumLipsticks}
        />
      );

    case "product-budget-lipstick":
      return (
        <ProductDisplay
          title="💃🏻 🪩 Absolutely! Here are several excellent red lipsticks available at affordable prices. Here are three options, all for less than $25."
          products={budgetLipsticks}
        />
      );

    case "podcast-rec":
      return (
        <PodcastRecommendation
          podcast={
            podcasts.find((p) => p.id === message.contentId) || podcasts[0]
          }
        />
      );

    case "style-rec":
      return (
        <StyleRecommendation
          recommendation={
            recommendations.find((r) => r.id === message.contentId) ||
            recommendations[0]
          }
        />
      );

    default:
      // Regular text message
      return message.text ? (
        <p
          className={`rounded-lg ${
            message.sender === "user"
              ? "float-right bg-gray-200 text-black text-sm md:text-base py-1 px-3 mb-4 rounded-full clear-both"
              : "p-3 inline-block font-medium text-black text-sm md:text-base"
          }`}
        >
          {message.text}
        </p>
      ) : null;
  }
}
