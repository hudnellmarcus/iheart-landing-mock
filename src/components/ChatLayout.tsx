import Header from "./Header";

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
