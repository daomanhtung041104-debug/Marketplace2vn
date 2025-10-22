import React from 'react';
import { Card } from '@/components/ui/card';
import { StatsCardProps } from '@/constants/dashboard';
import { TrendingUp, DollarSign, Briefcase, Clock } from 'lucide-react';

export default function StatsCard({ title, value, description }: StatsCardProps) {
  const getIcon = (title: string) => {
    if (title.includes('thu nhập') || title.includes('Tổng thu nhập')) return <DollarSign className="w-6 h-6" />;
    if (title.includes('dự án') || title.includes('Dự án')) return <Briefcase className="w-6 h-6" />;
    if (title.includes('tỷ lệ') || title.includes('Tỷ lệ')) return <TrendingUp className="w-6 h-6" />;
    if (title.includes('thanh toán') || title.includes('Thanh toán')) return <Clock className="w-6 h-6" />;
    return <TrendingUp className="w-6 h-6" />;
  };

  const getGradient = (title: string) => {
    if (title.includes('thu nhập') || title.includes('Tổng thu nhập')) return 'bg-gradient-to-br from-green-400 to-green-600';
    if (title.includes('dự án') || title.includes('Dự án')) return 'bg-gradient-to-br from-blue-400 to-blue-600';
    if (title.includes('tỷ lệ') || title.includes('Tỷ lệ')) return 'bg-gradient-to-br from-purple-400 to-purple-600';
    if (title.includes('thanh toán') || title.includes('Thanh toán')) return 'bg-gradient-to-br from-orange-400 to-orange-600';
    return 'bg-gradient-to-br from-gray-400 to-gray-600';
  };

  return (
    <Card variant="elevated" className="p-6 hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-xl ${getGradient(title)} text-white shadow-lg`}>
              {getIcon(title)}
            </div>
            <p className="text-text-secondary text-sm font-medium">{title}</p>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
            {value}
          </p>
          {description && (
            <p className="text-xs text-text-muted flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </Card>
  );
}
