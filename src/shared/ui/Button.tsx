
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
  to?: string;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  to,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md focus-visible:ring-slate-900',
    outline: 'border border-slate-300 text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-400',
    ghost: 'text-slate-900 hover:bg-slate-100 shadow-none focus-visible:ring-slate-400',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const motionProps = {
    whileHover: !disabled ? { y: -2, scale: 1.01 } : {},
    whileTap: !disabled ? { scale: 0.99 } : {},
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  return to ? (
    <MotionLink to={to} className={combinedClassName} {...motionProps}>
      {children}
    </MotionLink>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};