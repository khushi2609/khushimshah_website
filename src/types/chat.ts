export type MessageType = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}

export interface ChatOption {
  id: string;
  text: string;
  nextPrompt?: string;
}

export interface ChatPrompt {
  id: string;
  message: string;
  options?: ChatOption[];
}

export interface BotPersona {
  name: string;
  avatar: string;
  greeting: string;  // Will be used for Cypher's introduction about Khushi
  defaultOptions: ChatOption[];
}

export interface ChatState {
  messages: ChatMessage[];
  currentPrompt?: ChatPrompt;
  isTyping: boolean;
} 