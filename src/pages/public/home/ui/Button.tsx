interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline";
  }
  
  export const Button = ({ children, href, variant = "primary" }: ButtonProps) => {
    const className = variant === "primary" 
      ? "bg-indigo-600 text-white hover:bg-indigo-700" 
      : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50";
  
    return (
      <a
        href={href}
        className={`px-4 py-2 rounded-md transition ${className}`}
      >
        {children}
      </a>
    );
  };