import ChatInterface from "@/components/ChatInterface"
import ChatLayout from "@/components/ChatLayout";
const Chat = () => {
    return (
        <ChatLayout>
            <div className="flex-1 flex overflow-hidden">
                <ChatInterface />
            </div>
        </ChatLayout>
    )
}

export default Chat;