
interface Section {
    id: string;
    label: string;
}

interface SupportSidebarProps {
    sections: Section[];
    activeId: string;
}

export const SupportSidebar = ({ sections, activeId }: SupportSidebarProps) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <aside className="w-64 flex-shrink-0 sticky top-24 h-fit">
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Навигация</h3>
            <nav className="mt-4">
                <ul className="space-y-2">
                    {sections.map(section => {
                        const isActive = activeId === section.id;
                        return (
                            <li key={section.id}>
                                <a 
                                    href={`#${section.id}`} 
                                    onClick={(e) => handleClick(e, section.id)}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive 
                                            ? 'bg-teal-50 text-teal-600' 
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    {section.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};