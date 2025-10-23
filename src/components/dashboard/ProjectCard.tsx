import { AnimatedProgress } from '@/components/ui/animated-progress';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ProjectCardProps } from '@/constants/dashboard';
import { Calendar, DollarSign, Shield, User } from 'lucide-react';

export default function ProjectCard({ project, getStatusColor, getStatusText }: ProjectCardProps) {
  return (
    <Card variant="elevated" className="p-6 hover:scale-[1.02] transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-primary rounded-lg text-white">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-lg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <User className="w-4 h-4" />
                <span>{project.client}</span>
                <span className="text-primary font-semibold">${project.budget.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge 
            variant={getStatusColor(project.status) as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'live'} 
            size="sm"
            className="hover:scale-105 transition-transform"
          >
            {getStatusText(project.status)}
          </Badge>
          {project.escrow && (
            <Badge variant="success" size="sm" className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Escrow
            </Badge>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-background-secondary/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-secondary">Tiến độ dự án</span>
            <span className="text-sm font-bold text-primary">{project.progress}%</span>
          </div>
          <AnimatedProgress 
            value={project.progress} 
            showLabel={false}
            size="lg"
            variant={project.progress === 100 ? 'success' : 'default'}
            animated={true}
            duration={1000}
            className="h-3"
          />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-text-muted">
            <Calendar className="w-4 h-4" />
            <span>Hạn chót</span>
          </div>
          <span className="font-medium text-text-primary">{project.dueDate}</span>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </Card>
  );
}
