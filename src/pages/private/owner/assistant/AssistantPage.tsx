
import { FaRobot } from 'react-icons/fa';
import { Chat } from '@/features/chat-with-ai/ui/Chat';

export const AssistantPage = () => {
    return (
        <div>
            <header className="mb-8">
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaRobot className="text-teal-500" />
                    AI Ассистент
                </h1>
                <p className="mt-2 text-slate-600">Задайте вопрос нашему умному помощнику о здоровье и уходе за питомцем.</p>
            </header>

            <Chat />
        </div>
    );
};