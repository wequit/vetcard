import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Message } from '@/entities/message/model/types';
import { MessageBubble } from '@/entities/message/ui/MessageBubble';
import { Logo } from '@/shared/ui/Logo';

const TypingIndicator = () => (
    <div className="text-slate-400 text-sm mt-2">AI печатает...</div>
);

const WelcomeScreen = ({ onSuggestionClick }: { onSuggestionClick: (text: string) => void }) => {
    const suggestions = [ "Какой корм лучше?", "Как часто делать прививки?", "Признаки здорового питомца", ];
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <Logo />
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-slate-800">AI Ассистент VetCard</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500">Чем я могу помочь вам сегодня?</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                {suggestions.map(text => (
                    <button key={text} onClick={() => onSuggestionClick(text)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-colors">
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

    const handleSend = (text: string) => {
        const trimmedText = text.trim();
        if (!trimmedText || isLoading) return;

        const userMessage: Message = {
            id: `user-${Date.now()}`,
            text: trimmedText,
            sender: 'user',
        };

        setMessages(prev => [...prev, userMessage]);
        setInput(''); 
        setIsLoading(true); 

        setTimeout(() => {
            const aiResponse: Message = {
                id: `ai-${Date.now()}`,
                text: `Это симуляция ответа AI на ваш запрос: "${trimmedText}". Здесь будет реальный ответ от нейросети.`,
                sender: 'ai',
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsLoading(false); 
        }, 1500);
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200 flex flex-col h-[80vh] sm:h-[75vh]">
            <div className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
                <AnimatePresence>
                    {messages.length === 0 && !isLoading ? (
                        <WelcomeScreen onSuggestionClick={(text) => handleSend(text)} />
                    ) : (
                        messages.map(msg => <MessageBubble key={msg.id} message={msg} />)
                    )}
                </AnimatePresence>
                {isLoading && <TypingIndicator />}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-2 sm:p-4 border-t border-slate-200">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                    className="flex items-center bg-slate-100 rounded-xl p-2"
                >
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(input); }}}
                        placeholder="Спросите что-нибудь..."
                        className="flex-1 bg-transparent resize-none border-none focus:ring-0 text-sm text-slate-800 placeholder-slate-500 px-2"
                        rows={1}
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()} className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all disabled:bg-slate-300 flex-shrink-0">
                        <FaPaperPlane className="text-sm"/>
                    </button>
                </form>
            </div>
        </div>
    );
};