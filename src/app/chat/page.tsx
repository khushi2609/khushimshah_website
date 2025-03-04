import ChatInterface from '@/components/Chat/ChatInterface';
import { botPersona } from '@/data/chatData';

export default function ChatPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <ChatInterface
        persona={botPersona}
        initialPrompt={{
          id: 'initial',
          message: botPersona.greeting,
          options: botPersona.defaultOptions,
        }}
      />
    </div>
  );
} 