"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import StatsCard from '@/components/dashboard/StatsCard';
import ProjectCard from '@/components/dashboard/ProjectCard';
import ActivityItem from '@/components/dashboard/ActivityItem';
import { MOCK_STATS, MOCK_PROJECTS, MOCK_RECENT_ACTIVITIES } from '@/constants/dashboard';
import { useWallet } from '@/contexts/WalletContext';
import { Wallet, ArrowRight, Shield, BarChart3, Briefcase, Activity, User } from 'lucide-react';
import ProfileDisplay from '@/components/profile/ProfileDisplay';
import ProfileUpdateForm from '@/components/profile/ProfileUpdateForm';


const robotoCondensed = {
  fontFamily: "'Roboto Condensed', sans-serif",
  fontWeight: 400,
  fontStyle: 'normal',
};

export default function DashboardPage() {
  const { account, connectWallet, isConnecting } = useWallet();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'primary';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Hoàn thành';
      case 'in-progress': return 'Đang thực hiện';
      case 'pending': return 'Chờ xử lý';
      default: return status;
    }
  };



  if (!account) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 pt-20">
          <Container>
            <div className="max-w-2xl mx-auto text-center py-20">
              <div className="mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wallet className="w-12 h-12 text-primary" />
                </div>
                <h1 style={robotoCondensed} className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                  Kết nối ví để truy cập Dashboard
                </h1>
                <p style={robotoCondensed} className="text-xl text-text-secondary mb-8">
                  Bạn cần kết nối ví Petra để xem thông tin dashboard và quản lý dự án
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="flex items-center gap-2 mx-auto"
                >
                  <Wallet className="w-5 h-5" />
                  {isConnecting ? 'Đang kết nối...' : 'Kết nối ví Petra'}
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  Hoặc{' '}
                  <Link href="/" className="text-primary hover:underline">
                    quay về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary/30 to-background flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <Header />
      
      <main className="flex-1 pt-20 relative z-10">
        <Container>
          <div className="mb-12 text-center">
            <div className="inline-block">
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
                <span 
                  style={robotoCondensed}
                  className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block animate-fade-in-up"
                >
                  Dashboard
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            </div>
            <p 
              style={robotoCondensed}
              className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Quản lý dự án và theo dõi thu nhập của bạn với giao diện hiện đại
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-2 mb-8 border border-border/20 shadow-lg">
              <TabsList className="flex w-full bg-transparent gap-2">
                <TabsTrigger 
                  value="overview" 
                  className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">Tổng quan</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="projects" 
                  className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Dự án</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="activity" 
                  className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <Activity className="h-5 w-5" />
                  <span className="font-medium">Hoạt động</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="profile" 
                  className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">DID Profile</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="profile-settings" 
                  className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Cập nhật hồ sơ</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <StatsCard 
                    title="Tổng thu nhập" 
                    value={`$${MOCK_STATS.totalEarnings.toLocaleString()}`} 
                    description="+12% so với tháng trước"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <StatsCard 
                    title="Dự án đang thực hiện" 
                    value={MOCK_STATS.activeProjects} 
                    description="3 dự án sắp hoàn thành"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <StatsCard 
                    title="Tỷ lệ hoàn thành" 
                    value={`${MOCK_STATS.completionRate}%`} 
                    description="Xuất sắc!"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <StatsCard 
                    title="Thanh toán chờ" 
                    value={`$${MOCK_STATS.pendingPayments.toLocaleString()}`} 
                    description="Sẽ được xử lý trong 24h"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <Card variant="elevated" className="p-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-2">Thao tác nhanh</h2>
                  <p className="text-text-secondary">Quản lý công việc của bạn một cách hiệu quả</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <Button variant="gradient" className="h-20 flex flex-col gap-3 group">
                    <Briefcase className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Tạo dự án mới</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-3 group hover:bg-green-50 hover:border-green-300 hover:text-green-700">
                    <DollarSign className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Rút tiền</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-3 group hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
                    <BarChart3 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Xem báo cáo</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-3 group hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700">
                    <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Cài đặt</span>
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <Card variant="elevated" className="p-8 animate-fade-in-up">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">Dự án đang thực hiện</h2>
                    <p className="text-text-secondary">Theo dõi tiến độ và quản lý dự án của bạn</p>
                  </div>
                  <Button variant="outline" size="sm" className="hover:scale-105">
                    Xem tất cả
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {MOCK_PROJECTS.map((project, index) => (
                    <div 
                      key={project.id} 
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ProjectCard 
                        project={project}
                        getStatusColor={getStatusColor}
                        getStatusText={getStatusText}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-8">
              <Card variant="elevated" className="p-8 animate-fade-in-up">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">Hoạt động gần đây</h2>
                    <p className="text-text-secondary">Cập nhật mới nhất về dự án và giao dịch</p>
                  </div>
                  <Button variant="outline" size="sm" className="hover:scale-105">
                    Xem tất cả
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {MOCK_RECENT_ACTIVITIES.map((activity, index) => (
                    <div 
                      key={activity.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ActivityItem activity={activity} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <ProfileDisplay userAddress={account} />
            </TabsContent>
            <TabsContent value="profile-settings" className="space-y-6">
              <ProfileUpdateForm />
            </TabsContent>
          </Tabs>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
