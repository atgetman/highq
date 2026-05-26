import React from 'react';
import { useOutletContext } from 'react-router';
import { ContactCard } from '../components/ContactCard';
import { WhiteLabelHero } from '../components/WhiteLabelHero';
import { CriticalDatesChart } from '../components/CriticalDatesChart';
import { PortfolioStatusChart } from '../components/PortfolioStatusChart';
import { FirstRow } from '../components/FirstRow';
import { ProjectChat } from '../components/ProjectChat';
import { ProjectMembers } from '../components/ProjectMembers';
import { ProjectFiles } from '../components/ProjectFiles';
import { RecentActivity } from '../components/RecentActivity';

export function Home() {
  const context = useOutletContext<{ 
    isCoCounselOpen: boolean;
    sendMessageToChat?: (message: string, prefillOnly?: boolean) => void;
  }>();
  
  const { isCoCounselOpen, sendMessageToChat } = context || { isCoCounselOpen: false };

  return (
    <>
      {/* Hero Section */}
      <WhiteLabelHero title="Portfolio Meridian workspace" />

      {/* Main Content - 1370px wide, centered */}
      <main className={`max-w-[1370px] mx-auto py-6 pb-8 ${isCoCounselOpen ? 'px-[15px]' : ''}`}>
        {/* Project Workspace - Chat + Members in Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <ProjectChat onSendToCoCounsel={sendMessageToChat} />
          </div>

          {/* Members Panel */}
          <div>
            <ProjectMembers />
          </div>
        </div>

        {/* Files and Recent Activity - Full Width Below */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ProjectFiles />
          </div>
          <RecentActivity />
        </div>

        {/* Charts Section - Portfolio Overview */}
        <div className="mb-6">
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full min-w-0">
              <div className="min-w-0">
                <PortfolioStatusChart />
              </div>
              <div className="min-w-0">
                <CriticalDatesChart />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links and Guidance */}
        <div className="mb-8 mt-8">
          <FirstRow />
        </div>
      </main>
    </>
  );
}