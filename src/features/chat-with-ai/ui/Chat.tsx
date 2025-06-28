import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { Message } from '@/entities/message/model/types';
import { MessageBubble } from '@/entities/message/ui/MessageBubble';
import { Logo } from '@/shared/ui/Logo';

const TypingIndicator = () => (
    <div className="text-slate-400 text-sm mt-2">AI печатает...</div>
);

const WelcomeScreen = ({ onSuggestionClick }: { onSuggestionClick: (text: string) => void }) => {
  const suggestions = [
    'Какой корм лучше для щенка?',
    'Как часто нужно делать прививки?',
    'Признаки здорового питомца',
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <Logo />
      <h2 className="mt-4 text-2xl font-bold text-slate-800">AI Ассистент VetCard</h2>
      <p className="mt-2 text-slate-500">Чем я могу помочь вам сегодня?</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {suggestions.map((text) => (
          <button
            key={text}
            onClick={() => onSuggestionClick(text)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm px-4 py-2 rounded-full transition-colors"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Это моковый ответ на ваш вопрос: "${userMessage.text}"`,
        sender: 'ai',
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 flex flex-col h-[75vh]">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <AnimatePresence>
          {messages.length === 0 && !isLoading ? (
            <WelcomeScreen onSuggestionClick={(text) => handleSend(text)} />
          ) : (
            messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
          )}
        </AnimatePresence>
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex items-end bg-slate-100 rounded-xl p-2"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(input);
              }
            }}
            placeholder="Спросите что-нибудь..."
            className="flex-1 bg-transparent resize-none border-none outline-none focus:ring-0 text-sm text-slate-800 placeholder-slate-500 px-2 max-h-40 overflow-y-auto"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all disabled:bg-slate-300"
          >
            <FiSend className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};