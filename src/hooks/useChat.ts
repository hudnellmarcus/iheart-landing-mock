import { useState, useCallback } from "react";
import { Message, MessageType } from "@/data/messages";

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi! How can I help you?",
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
        setTimeout(() => {
            addNewMessage("", "bot", "product-sunglasses");

            setTimeout(() => {
                addNewMessage("", "bot", "style-rec", "rec-001");

                setTimeout(() => {
                    addNewMessage("", "bot", "podcast-rec", "podcast-001");
                }, 6000);
            }, 3000);
        }, 10);
    }, [addNewMessage]);

    const handleLipstickQuery = useCallback((text: string) => {
        const showCheaperOption = text.toLowerCase().includes("cheap")
            || text.toLowerCase().includes("budget")
            || text.toLowerCase().includes("less expensive")
            || text.toLowerCase().includes("cheaper");

        setTimeout(() => {
            if (showCheaperOption) {
                addNewMessage(
                    "", "bot", "product-budget-lipstick");
                    setTimeout(() => {
                        addNewMessage("", "bot", "style-rec", "rec-002");
                    }, 5000);
            } else {
                addNewMessage("", "bot", "product-lipstick");
                setTimeout(() => {
                    addNewMessage("", "bot", "podcast-rec", "podcast-002");
                }, 3000);
            }
        }, 1000);
    }, [addNewMessage]);

    const handleSendMessage = useCallback((text: string) => {
        // user message
        addNewMessage(text, "user");

        if (["sunglasses", "sun", "shades"].some((keyword) => text.toLowerCase().includes(keyword))) {
            handleSunglassesQuery();
        } else if (text.toLowerCase().includes("lipstick")) {
            handleLipstickQuery(text);
        } else {
            // bot response
            setTimeout(() => {
                addNewMessage("I'm sorry, I didn't understand that.", "bot");
            }, 1000);
        }

    }, [addNewMessage, handleSunglassesQuery, handleLipstickQuery]);

    return { messages, handleSendMessage };

}
