import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { CoCounselDrawer } from './CoCounselDrawer';
import { HighQAssistant } from './HighQAssistant';
import { WhiteLabelHeader } from './WhiteLabelHeader';
import { HelpCircle } from 'lucide-react';
import Footer from '../../imports/Footer/Footer';

export function Layout() {
  const location = useLocation();
  const [isCoCounselOpen, setIsCoCounselOpen] = useState(false);
  const [isCoCounselExpanded, setIsCoCounselExpanded] = useState(false);
  const [isHighQAssistantOpen, setIsHighQAssistantOpen] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState<{ content: string; timestamp: number; prefillOnly?: boolean } | null>(null);

  // Determine context based on current route
  const getContext = (): 'documents' | 'tracker' | 'general' => {
    if (location.pathname.includes('/documents')) return 'documents';
    if (location.pathname.includes('/tracker')) return 'tracker';
    return 'general';
  };

  const handleOpenChat = () => {
    setIsCoCounselOpen(true);
  };

  const handleSendMessageToChat = (message: string, prefillOnly = false) => {
    setTriggerMessage({ content: message, timestamp: Date.now(), prefillOnly });
    setIsCoCounselOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Main Content Area */}
      <div className={`flex-1 min-w-0 transition-all duration-300 ${isCoCounselOpen && !isCoCounselExpanded ? 'mr-[400px]' : ''}`}>
      
      {/* Rounded corner border effect when drawer is open */}
      {isCoCounselOpen && !isCoCounselExpanded && (
        <>
          {/* Right border */}
          <div className="fixed top-[16px] bottom-0 w-[1px] bg-[#D2D2D2] z-50 pointer-events-none" style={{ right: '400px' }} />
          
          {/* Rounded corner arc */}
          <div 
            className="fixed top-0 w-[16px] h-[16px] pointer-events-none z-50"
            style={{
              right: '400px',
              borderBottomLeft: '16px solid transparent',
              borderTop: '1px solid #D2D2D2',
              borderRight: '1px solid #D2D2D2',
              borderTopRightRadius: '16px',
              background: 'transparent'
            }}
          />
        </>
      )}
      
      {/* White Label Header - Armstrong + Fischer */}
      <WhiteLabelHeader onCoCounselClick={handleOpenChat} />

      {/* Page Content */}
      <Outlet context={{
        isCoCounselOpen: isCoCounselOpen && !isCoCounselExpanded,
        setIsCoCounselOpen,
        sendMessageToChat: handleSendMessageToChat
      }} />

      {/* Footer */}
      <Footer />
      </div>

      {/* HighQ Assist Drawer */}
      {isCoCounselOpen && (
        <CoCounselDrawer
          onClose={() => {
            setIsCoCounselOpen(false);
            setIsCoCounselExpanded(false);
          }}
          onExpandChange={setIsCoCounselExpanded}
          triggerMessage={triggerMessage}
          context={getContext()}
        />
      )}

      {/* HighQ Assistant Drawer */}
      {isHighQAssistantOpen && (
        <HighQAssistant
          onClose={() => setIsHighQAssistantOpen(false)}
          shouldShift={isCoCounselOpen && !isCoCounselExpanded}
        />
      )}

      {/* HighQ Assistant Help Button */}
      <button
        onClick={() => setIsHighQAssistantOpen(!isHighQAssistantOpen)}
        className={`fixed bottom-6 w-14 h-14 bg-[#0a4e75] border border-[#123021] text-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] hover:bg-[#0c5e8a] transition-all flex items-center justify-center z-40 ${
          isCoCounselOpen && !isCoCounselExpanded ? 'right-[424px]' : 'right-6'
        }`}
        title="HighQ Assistant"
      >
        <HelpCircle className="w-6 h-6" />
      </button>
    </div>
  );
}