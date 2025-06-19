import { motion } from 'framer-motion';

interface ButtonProps {
  children: any;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
  href?: string;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  href,
}: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md',
    outline: 'border border-teal-600 text-teal-600 hover:bg-teal-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {href ? (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={combinedClassName}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
};