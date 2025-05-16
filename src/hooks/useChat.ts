import { useState, useCallback } from "react";
import { Message, MessageType } from "@/data/messages";
import {
    sunglassesSequence,
    premiumLipstickSequence,
    budgetLipstickSequence,
    fallbackSequence,
    processMessageQueue,
} from "@/data/conversationSequences";


export function useChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi! What are you looking for today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);

    const addNewMessage = useCallback((
        text: string,
        sender: "user" | "bot",
        messageType: MessageType = "text",
        contentId?: string
    ) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender,
            timestamp: new Date(),
            messageType,
            contentId,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, [setMessages]);


    const handleSunglassesQuery = useCallback(() => {
       processMessageQueue(sunglassesSequence, addNewMessage);
    }, [addNewMessage]);

    const handleLipstickQuery = useCallback((text: string) => {
        const showCheaperOption = text.toLowerCase().includes("cheap")
            || text.toLowerCase().includes("budget")
            || text.toLowerCase().includes("less expensive")
            || text.toLowerCase().includes("cheaper");

       processMessageQueue(showCheaperOption ? budgetLipstickSequence : premiumLipstickSequence, addNewMessage);   
    }, [addNewMessage]);

    const handleSendMessage = useCallback((text: string) => {
        // user message
        addNewMessage(text, "user");

        if (["sunglasses", "sun", "shades"].some((keyword) => text.toLowerCase().includes(keyword))) {
            handleSunglassesQuery();
        } else if (text.toLowerCase().includes("lipstick")) {
            handleLipstickQuery(text);
        } else {
           processMessageQueue(fallbackSequence, addNewMessage);
        }

    }, [addNewMessage, handleSunglassesQuery, handleLipstickQuery]);

    return { messages, handleSendMessage };

}
