import { Card } from '@/components/ui/card';
import { ActivityItemProps } from '@/constants/dashboard';
import { AlertCircle, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function ActivityItem({ activity }: ActivityItemProps) {
  const getActivityIcon = (message: string) => {
    if (message.includes('thanh toán') || message.includes('payment')) return <DollarSign className="w-5 h-5 text-success" />;
    if (message.includes('hoàn thành') || message.includes('completed')) return <CheckCircle className="w-5 h-5 text-success" />;
    if (message.includes('cảnh báo') || message.includes('warning')) return <AlertCircle className="w-5 h-5 text-warning" />;
    return <Clock className="w-5 h-5 text-primary" />;
  };

  const getActivityColor = (message: string) => {
    if (message.includes('thanh toán') || message.includes('payment')) return 'border-l-success';
    if (message.includes('hoàn thành') || message.includes('completed')) return 'border-l-success';
    if (message.includes('cảnh báo') || message.includes('warning')) return 'border-l-warning';
    return 'border-l-primary';
  };

  return (
    <Card variant="outlined" className={`p-4 hover:scale-[1.01] transition-all duration-300 border-l-4 ${getActivityColor(activity.message)} group`}>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-background-secondary/50 rounded-lg group-hover:bg-primary/10 transition-colors">
          {getActivityIcon(activity.message)}
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary mb-2 font-medium group-hover:text-primary transition-colors">
            {activity.message}
          </p>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Clock className="w-3 h-3" />
            <span>{activity.timestamp}</span>
          </div>
        </div>
        {activity.amount && (
          <div className="flex items-center gap-1 text-sm font-bold text-success bg-success/10 px-3 py-1 rounded-full">
            <DollarSign className="w-4 h-4" />
            +${activity.amount.toLocaleString()}
          </div>
        )}
      </div>
    </Card>
  );
}
