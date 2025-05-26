import { MessageType } from "./messages";

export type MessageSequenceItem = {
  text: string;
  type: string;
  delay: number;
  contentId?: string;
};

// Sunglasses conversation flow
export const sunglassesSequence: MessageSequenceItem[] = [
  {
    text: "I'd be happy to help you find sunglass options. As part of iHeart Cashback, I'll include brands that other listeners are purchasing from too!",
    type: "text",
    delay: 2000
  },
  {
    text: "",
    type: "product-sunglasses",
    delay: 4000
  },

  {
    text: "",
    type: "style-rec",
    contentId: "rec-003",
    delay: 10000
  },

  {
    text: "",
    type: "podcast-rec",
    contentId: "podcast-003",
    delay: 10000
  }
];

// Premium lipstick sequence
export const premiumLipstickSequence: MessageSequenceItem[] = [
  {
    text: "",
    type: "product-lipstick",
    delay:2000
  },

  {
    text: "",
    type: "podcast-rec",
    contentId: "podcast-002",
    delay: 10000
  }
];

// Budget lipstick sequence
export const budgetLipstickSequence: MessageSequenceItem[] = [

  {
    text: "",
    type: "product-budget-lipstick",
    delay: 2000
  },
  {
    text: "",
    type: "style-rec",
    contentId: "rec-002",
    delay: 8000
  },
];

// Generic fallback response
export const fallbackSequence: MessageSequenceItem[] = [
  {
    text: "I'm sorry, I didn't understand that.",
    type: "text",
    delay: 1000
  }
];

// Helper function to process a message sequence
export const processMessageQueue = (
  queue: MessageSequenceItem[],
  addNewMessage: (text: string, sender: "user" | "bot", messageType: MessageType, contentId?: string) => void,
  index = 0
) => {
  if (index >= queue.length) return;
  
  const item = queue[index];
  
  setTimeout(() => {
    addNewMessage(
      item.text,
      "bot",
      item.type as MessageType,
      item.contentId
    );
    
    processMessageQueue(queue, addNewMessage, index + 1);
  }, item.delay);
};