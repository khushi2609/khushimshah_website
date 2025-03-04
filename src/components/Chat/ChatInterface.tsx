'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, ChatOption, ChatPrompt, BotPersona } from '@/types/chat';
import { v4 as uuidv4 } from 'uuid';
import { chatPrompts } from '@/data/chatData';

interface ChatInterfaceProps {
  persona: BotPersona;
  initialPrompt: ChatPrompt;
}

export default function ChatInterface({ persona, initialPrompt }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<ChatPrompt | undefined>(initialPrompt);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add initial greeting
    const greeting: ChatMessage = {
      id: uuidv4(),
      type: 'bot',
      content: persona.greeting,
      timestamp: new Date(),
    };
    setMessages([greeting]);
  }, [persona.greeting]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = async (content: string, type: 'user' | 'bot') => {
    const newMessage: ChatMessage = {
      id: uuidv4(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = async () => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
  };

  const handleOptionClick = async (option: ChatOption) => {
    await addMessage(option.text, 'user');
    await simulateTyping();
    
    if (option.id === 'back') {
      await addMessage('Let me know if you have any other questions!', 'bot');
      setCurrentPrompt({
        id: 'main',
        message: 'What else would you like to know?',
        options: persona.defaultOptions,
      });
      return;
    }

    const nextPrompt = chatPrompts[option.id];
    if (nextPrompt) {
      await addMessage(nextPrompt.message, 'bot');
      setCurrentPrompt(nextPrompt);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-background shadow-lg">
      <div className="flex items-center p-4 border-b border-primary">
        <div className="relative">
          <img
            src={persona.avatar}
            alt={persona.name}
            className="w-12 h-12 rounded-full mr-3 floating"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-accent">{persona.name}</h1>
          <p className="text-sm text-primary">Cybersecurity Portfolio Interface</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg shadow-md ${
                message.type === 'user'
                  ? 'bg-accent text-white'
                  : 'bg-primary/20 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-primary/20 text-gray-800 p-3 rounded-lg shadow-md">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-primary">
        <div className="grid grid-cols-2 gap-2">
          {currentPrompt?.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className="p-3 text-left rounded-lg bg-white hover:bg-primary/10 text-gray-800 transition-colors shadow-sm hover:shadow-md border border-primary"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 