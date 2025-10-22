"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/constants/ui';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group";
    
    const variants = {
      primary: "bg-gradient-primary text-white hover:shadow-2xl hover:scale-105 focus:ring-primary/50 shadow-lg hover:shadow-primary/25",
      secondary: "bg-gradient-secondary text-white hover:shadow-2xl hover:scale-105 focus:ring-secondary/50 shadow-lg hover:shadow-secondary/25",
      outline: "border-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary focus:ring-primary/50 hover:scale-105 backdrop-blur-sm",
      ghost: "bg-transparent text-text-primary hover:bg-background-secondary/50 focus:ring-primary/50 hover:scale-105 backdrop-blur-sm",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:scale-105 focus:ring-purple-500/50 shadow-lg"
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-16 px-8 text-lg"
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
