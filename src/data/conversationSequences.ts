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
    text: `One of iHeart’s favorite comedians is Jess Hilarious. Here she is wearing Messy Vision Eyeware.`,
    type: "text",
    delay: 6000
  },
  {
    text: "",
    type: "style-rec",
    contentId: "rec-001",
    delay: 1000
  },
  {
    text: "Interested in learning about the history of sunglasses? Check out the podcast below!",
    type: "text",
    delay: 5000
  },
  {
    text: "",
    type: "podcast-rec",
    contentId: "podcast-001",
    delay: 1000
  }
];

// Premium lipstick sequence
export const premiumLipstickSequence: MessageSequenceItem[] = [
  {
    text: `There are many great lipsticks on the market. If you can provide more details about the finish you prefer (matte, satin, glossy, sheer), undertone (cool, warm, neutral) or any other special features, I think I can narrow the options a bit more. Or, if you just want a recommendation right now, here are three great products across different categories: `,
    type: "text",
    delay: 1000
  },
  {
    text: "",
    type: "product-lipstick",
    delay:3000
  },
  {
    text: "Do you ever think about your lip health? Lip expert, Sara Happ, gives iHeart listeners a crash course on how to care for your kissers!",
    type: "text",
    delay: 6000
  },
  {
    text: "",
    type: "podcast-rec",
    contentId: "podcast-002",
    delay: 1000
  }
];

// Budget lipstick sequence
export const budgetLipstickSequence: MessageSequenceItem[] = [
  {
    text: "Absolutely! Here are several excellent red lipsticks available at affordable prices. Here are three options, all for less than $25.",
    type: "text",
    delay: 1000
  },
  {
    text: "",
    type: "product-budget-lipstick",
    delay: 2000
  },
  {
    text: `Looking for somewhere to wear your new lipstick? Check out iHeart Radio’s upcoming event list!`,
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