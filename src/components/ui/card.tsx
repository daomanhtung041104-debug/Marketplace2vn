import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from '@/constants/ui';

export function Card({ 
  children, 
  className,
  variant = 'default',
  padding = 'md',
  hover = false
}: CardProps) {
  const variants = {
    default: 'modern-card border border-border/20',
    elevated: 'modern-card shadow-lg hover:shadow-2xl border border-border/20 hover-lift',
    outlined: 'modern-card border border-border/20',
    glass: 'glass-card border border-border/20',
    gradient: 'bg-gradient-primary border border-primary/20 text-white'
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={cn(
      'rounded-2xl transition-all duration-300 ease-out',
      variants[variant],
      paddings[padding],
      hover && 'hover:scale-[1.02] hover-lift hover-glow',
      className
    )}>
      {children}
    </div>
  );
}
