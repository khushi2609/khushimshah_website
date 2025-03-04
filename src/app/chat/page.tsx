import ChatInterface from '@/components/Chat/ChatInterface';
import { botPersona } from '@/data/chatData';

export default function Chat() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ChatInterface
          persona={botPersona}
          initialPrompt={{
            id: 'initial',
            message: botPersona.greeting,
            options: botPersona.defaultOptions,
          }}
        />
      </div>
    </main>
  );
} 