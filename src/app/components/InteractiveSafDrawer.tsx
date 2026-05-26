import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../../imports/CcChat/svg-37qnpn51io';
import { MessageSquarePlus, Clock, Expand, Minimize2, X, Sun, Calendar, FileCheck2, BarChart3, TrendingUp, Sparkles, Square, ThumbsUp, ThumbsDown, Copy, MoreHorizontal, FileText } from 'lucide-react';
import exampleImage from 'figma:asset/486b76a6975c46b24e78399d7eb0cefe9bbf448a.png';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  hasImage?: boolean;
  canceled?: boolean;
}

// Keywords that indicate help/support-related questions
const HELP_KEYWORDS = [
  'help',
  'support',
  'setup',
  'configure',
  'install',
  'update',
  'how to',
  'tutorial',
  'guide',
  'documentation',
  'release',
  'version',
  'feature update',
  'announcement',
  'technical support',
  'status',
  'service status',
];

function isHelpQuestion(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  return HELP_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
}

interface InteractiveSafDrawerProps {
  onClose?: () => void;
  onExpand?: () => void;
  isExpanded?: boolean;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  onShowHistory?: () => void;
  onNewThread?: () => void;
  prefillText?: string;
  context?: 'documents' | 'tracker' | 'general';
}

// SafDrawer header components
function Branding() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative drag-handle" data-name="Branding">
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center relative shrink-0 w-[20px]" data-name="saf-miscellaneous/coCounsel">
        <Sparkles className="text-[#d64000]" size={20} fill="#d64000" />
      </div>
      <p className="font-['Clario:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#232425] text-[20px] w-[252px]">HighQ Assist</p>
    </div>
  );
}

function LeftIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="filled=false">
        <MessageSquarePlus className="text-[#1d4b34]" size={20} strokeWidth={2} />
      </div>
    </div>
  );
}

function Contents({ onNewThread }: { onNewThread?: () => void }) {
  return (
    <div onClick={onNewThread} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#F2F2F2]" data-name="contents">
      <LeftIcon />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="filled=false">
        <Clock className="text-[#1d4b34]" size={20} />
      </div>
    </div>
  );
}

function Contents1({ onShowHistory }: { onShowHistory?: () => void }) {
  return (
    <div onClick={onShowHistory} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#F2F2F2]" data-name="contents">
      <LeftIcon1 />
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="filled=false">
        <Expand className="text-[#1d4b34]" size={20} />
      </div>
    </div>
  );
}

function LeftIconMinimize() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="filled=false">
        <Minimize2 className="text-[#1d4b34]" size={20} />
      </div>
    </div>
  );
}

function Contents2({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#F2F2F2]" data-name="contents">
      {isExpanded ? <LeftIconMinimize /> : <LeftIcon2 />}
    </div>
  );
}

function LeftIcon3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="filled=false">
        <X className="text-[#1d4b34]" size={20} />
      </div>
    </div>
  );
}

function Contents3({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#F2F2F2]" data-name="contents">
      <LeftIcon3 />
    </div>
  );
}

function Frame({ onClose, onExpand, isExpanded, onNewThread, onShowHistory, hasMessages }: { onClose?: () => void; onExpand?: () => void; isExpanded?: boolean; onNewThread?: () => void; onShowHistory?: () => void; hasMessages?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 no-drag">
      {hasMessages && (
        <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <Contents onNewThread={onNewThread} />
        </div>
      )}
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents1 onShowHistory={onShowHistory} />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents2 onClick={onExpand} isExpanded={isExpanded} />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents3 onClick={onClose} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center not-italic relative shrink-0 whitespace-nowrap">
      <Sun className="text-[#de6633]" size={16} style={{ filter: 'drop-shadow(0px 4px 33px rgba(247, 93, 27, 0.4))' }} />
      <p className="font-['Clario:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[#666] text-[20px]">Good morning, Thomas</p>
    </div>
  );
}

function Frame7({ context }: { context?: 'documents' | 'tracker' | 'general' }) {
  let title = (
    <>
      <span className="leading-[1.2]">Get precise insights from your </span>
      <span className="font-['Clario:Bold',sans-serif] leading-[1.2] not-italic">Portfolio Meridian</span>
      <span className="leading-[1.2]"> content</span>
    </>
  );

  if (context === 'documents') {
    title = (
      <>
        <span className="leading-[1.2]">Analyze your </span>
        <span className="font-['Clario:Bold',sans-serif] leading-[1.2] not-italic">Documents</span>
        <span className="leading-[1.2]"> instantly</span>
      </>
    );
  } else if (context === 'tracker') {
    title = (
      <>
        <span className="leading-[1.2]">Stay on top of </span>
        <span className="font-['Clario:Bold',sans-serif] leading-[1.2] not-italic">Critical Dates</span>
        <span className="leading-[1.2]"> and actions</span>
      </>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[0px] w-full">
        <p className="text-[28px]">
          {title}
        </p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#404040] text-[12px] whitespace-nowrap">
        <p className="leading-[1.2]">Powered by MCP</p>
      </div>
    </div>
  );
}

function Frame8({ context }: { context?: 'documents' | 'tracker' | 'general' }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Intro">
        <Frame6 />
        <Frame7 context={context} />
      </div>
      <div className="bg-[#ededed] content-stretch flex gap-[4px] items-center justify-center min-h-[24px] px-[8px] py-[2px] relative rounded-[88px] shrink-0" data-name="saf-badge-status">
        <Label />
      </div>
    </div>
  );
}

function Frame5({ context }: { context?: 'documents' | 'tracker' | 'general' }) {
  let description = "Work smarter by connecting directly to your files, iSheets, and matters. Ask anything and get accurate answers rooted in your actual content.";

  if (context === 'documents') {
    description = "Ask questions about your lease agreements, contracts, and legal documents. Get instant summaries, extract key information, and identify important clauses across your entire document library.";
  } else if (context === 'tracker') {
    description = "Get real-time insights on critical dates, upcoming actions, and property status. Track break options, rent reviews, and compliance deadlines to stay ahead of important milestones.";
  }

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212223] text-[16px] w-full">{description}</p>
    </div>
  );
}

function Intro({ context }: { context?: 'documents' | 'tracker' | 'general' }) {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="Intro">
      <Frame8 context={context} />
      <Frame5 context={context} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Which leases have break options in the next 90 days?</p>
      </div>
    </div>
  );
}

function SuggestionPill({ onClick, icon, text }: { onClick?: () => void; icon?: React.ReactNode; text?: string }) {
  return (
    <div
      onClick={onClick}
      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
      data-name="SuggestionPill"
    >
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      {icon || <Calendar className="text-[#404040]" size={14} />}
      <div className="h-[21px] relative shrink-0" data-name="Text">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">{text || 'Which leases have break options in the next 90 days?'}</p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Show properties with outstanding landlord consents</p>
      </div>
    </div>
  );
}

function SuggestionPill1() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <FileCheck2 className="text-[#404040]" size={14} />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Summarise open rent review positions</p>
      </div>
    </div>
  );
}

function SuggestionPill2() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <BarChart3 className="text-[#404040]" size={14} />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">What's changed this week?</p>
      </div>
    </div>
  );
}

function SuggestionPill3() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <TrendingUp className="text-[#404040]" size={14} />
      <Text3 />
    </div>
  );
}

function Suggestions({ isExpanded, onSuggestionClick, context = 'general' }: { isExpanded?: boolean; onSuggestionClick?: (prompt: string) => void; context?: 'documents' | 'tracker' | 'general' }) {
  // Documents context suggestions
  if (context === 'documents') {
    return (
      <div className={`content-stretch flex gap-[10px] items-start py-[10px] relative shrink-0 w-full ${isExpanded ? 'flex-row flex-wrap' : 'flex-col'}`} data-name="Suggestions">
        <SuggestionPill onClick={() => onSuggestionClick?.('Summarize Zara UK documents')} icon={<FileText className="text-[#404040]" size={14} />} text="Summarize Zara UK documents" />
        <SuggestionPill onClick={() => onSuggestionClick?.('Leases expiring in 6 months')} icon={<Calendar className="text-[#404040]" size={14} />} text="Leases expiring in 6 months" />
        <SuggestionPill onClick={() => onSuggestionClick?.('Pending documents for review')} icon={<FileCheck2 className="text-[#404040]" size={14} />} text="Pending documents for review" />
        <SuggestionPill onClick={() => onSuggestionClick?.('Documents updated this week')} icon={<TrendingUp className="text-[#404040]" size={14} />} text="Documents updated this week" />
      </div>
    );
  }

  // Tracker context suggestions
  if (context === 'tracker') {
    return (
      <div className={`content-stretch flex gap-[10px] items-start py-[10px] relative shrink-0 w-full ${isExpanded ? 'flex-row flex-wrap' : 'flex-col'}`} data-name="Suggestions">
        <SuggestionPill onClick={() => onSuggestionClick?.('Properties with urgent actions')} icon={<Calendar className="text-[#404040]" size={14} />} text="Properties with urgent actions" />
        <SuggestionPill onClick={() => onSuggestionClick?.('Break options in next 90 days')} icon={<FileCheck2 className="text-[#404040]" size={14} />} text="Break options in next 90 days" />
        <SuggestionPill onClick={() => onSuggestionClick?.('Summarize rent review positions')} icon={<BarChart3 className="text-[#404040]" size={14} />} text="Summarize rent review positions" />
        <SuggestionPill onClick={() => onSuggestionClick?.('Critical dates this month')} icon={<TrendingUp className="text-[#404040]" size={14} />} text="Critical dates this month" />
      </div>
    );
  }

  // General/default suggestions
  return (
    <div className={`content-stretch flex gap-[10px] items-start py-[10px] relative shrink-0 w-full ${isExpanded ? 'flex-row flex-wrap' : 'flex-col'}`} data-name="Suggestions">
      <SuggestionPill onClick={() => onSuggestionClick?.('Which leases have break options in the next 90 days?')} icon={<Calendar className="text-[#404040]" size={14} />} text="Which leases have break options in the next 90 days?" />
      <SuggestionPill onClick={() => onSuggestionClick?.('Show properties with outstanding landlord consents')} icon={<FileCheck2 className="text-[#404040]" size={14} />} text="Show properties with outstanding landlord consents" />
      <SuggestionPill onClick={() => onSuggestionClick?.('Summarise open rent review positions')} icon={<BarChart3 className="text-[#404040]" size={14} />} text="Summarise open rent review positions" />
      <SuggestionPill onClick={() => onSuggestionClick?.('What\'s changed this week?')} icon={<TrendingUp className="text-[#404040]" size={14} />} text="What's changed this week?" />
    </div>
  );
}

// HighQ Assist icon component
function CoCounselIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Vector">
          <path d={svgPaths.pe5ede80} fill="#D64000" />
          <path d={svgPaths.p39037300} fill="#D64000" />
          <path d={svgPaths.p5052d80} fill="#D64000" />
          <path d={svgPaths.p167e8400} fill="#D64000" />
          <path d={svgPaths.p3081d580} fill="#D64000" />
          <path d={svgPaths.p1b085e00} fill="#D64000" />
          <path d={svgPaths.p3d4b9c00} fill="#D64000" />
          <path d={svgPaths.p3c56df00} fill="#D64000" />
          <path d={svgPaths.p3cdf4400} fill="#D64000" />
          <path d={svgPaths.p29688e40} fill="#D64000" />
          <path d={svgPaths.p1910e800} fill="#D64000" />
          <path d={svgPaths.p3565f00} fill="#D64000" />
          <path d={svgPaths.p1e0c0f80} fill="#D64000" />
          <path d={svgPaths.p15ce580} fill="#D64000" />
          <path d={svgPaths.p4185400} fill="#D64000" />
          <path d={svgPaths.p2e435d00} fill="#D64000" />
          <path d={svgPaths.p35f0a740} fill="#D64000" />
          <path d={svgPaths.p108b7f00} fill="#D64000" />
          <path d={svgPaths.p340df780} fill="#D64000" />
          <path d={svgPaths.p211f6d00} fill="#D64000" />
          <path d={svgPaths.p28e58c80} fill="#D64000" />
          <path d={svgPaths.p32894700} fill="#D64000" />
          <path d={svgPaths.p27677700} fill="#D64000" />
          <path d={svgPaths.p34c65180} fill="#D64000" />
          <path d={svgPaths.p19d8dd80} fill="#D64000" />
          <path d={svgPaths.p22e04c90} fill="#D64000" />
          <path d={svgPaths.p27071f0} fill="#D64000" />
          <path d={svgPaths.p2cc93970} fill="#D64000" />
        </g>
      </svg>
    </div>
  );
}

// Feedback buttons component
function FeedbackButtons() {
  return (
    <div className="flex items-center gap-1 mt-2 mb-4">
      <button className="p-2 rounded hover:bg-[#f5f5f5] transition-colors" title="Good response">
        <ThumbsUp size={16} className="text-[#666]" strokeWidth={2} />
      </button>
      <button className="p-2 rounded hover:bg-[#f5f5f5] transition-colors" title="Bad response">
        <ThumbsDown size={16} className="text-[#666]" strokeWidth={2} />
      </button>
      <button className="p-2 rounded hover:bg-[#f5f5f5] transition-colors" title="Copy">
        <Copy size={16} className="text-[#666]" strokeWidth={2} />
      </button>
      <button className="p-2 rounded hover:bg-[#f5f5f5] transition-colors" title="More options">
        <MoreHorizontal size={16} className="text-[#666]" strokeWidth={2} />
      </button>
    </div>
  );
}

// Chat messages using CcChat styling
function ChatMessages({ messages, isProcessing }: { messages: Message[]; isProcessing?: boolean }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isProcessing]);

  if (messages.length === 0) {
    return null;
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const formatUserMessageDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    return `${month}/${day}, ${time}`;
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative w-full">
      {messages.map((message) => (
        <React.Fragment key={message.id}>
          {message.sender === 'user' ? (
            // User message
            <div className="min-w-0 relative shrink-0 w-full group" data-name="cc-message-box">
              <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0)] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[4px] items-end min-w-0 py-[16px] relative w-full">
                <div className="bg-[#f0f2f1] px-[12px] py-[8px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px]" style={{ maxWidth: '80%' }}>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#212223] text-[15px]">{message.content}</p>
                </div>
                {message.canceled ? (
                  <div className="pr-[12px]">
                    <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#999] text-[13px]">
                      Canceled request
                    </p>
                  </div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pr-[12px]">
                    <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#999] text-[13px]">
                      {formatUserMessageDate(message.timestamp)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Assistant message
            <div className="min-w-0 relative shrink-0 w-full" data-name="cc-message-box">
              <div className="content-stretch flex items-start min-w-0 py-[16px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-0 relative" data-name="prompt">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
                    <CoCounselIcon />
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="cc-metadata">
                        <p className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] min-h-px min-w-px relative text-[#666] text-[14px] whitespace-pre-wrap">{`HighQ Assist - ${formatTime(message.timestamp)}`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Text">
                    <div className="flex flex-col items-start justify-center w-full">
                      <div className="content-stretch flex items-start justify-center pl-[32px] relative w-full">
                        {message.hasImage ? (
                          <div className="flex-[1_0_0] min-h-px min-w-0 relative">
                            {message.content === '' ? (
                              // Property Summary Response - City Centre Office
                              <>
                                {/* Property Header Card */}
                                <div className="bg-[#f9f9f9] rounded-lg p-6 mb-6 relative">
                                  <div className="absolute top-6 right-6">
                                    <div className="bg-[#ffeded] rounded-[4px] px-[12px] py-[6px]">
                                      <span className="text-[#ab3300] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.2]">
                                        Urgent action required
                                      </span>
                                    </div>
                                  </div>
                                  <h2 className="text-[#212223] text-[32px] font-['Clario:Bold',sans-serif] leading-[1.2] mb-2">City Centre Office</h2>
                                  <p className="text-[#666] text-[18px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                    Manchester, M1 4BT · Tech Solutions Ltd · Assigned to Rachel Drummond
                                  </p>
                                </div>

                                {/* Key Metrics Row */}
                                <div className="grid grid-cols-4 gap-6 mb-8">
                                  <div>
                                    <div className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Annual rent</div>
                                    <div className="text-[#212223] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">£185,000</div>
                                  </div>
                                  <div>
                                    <div className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Lease expiry</div>
                                    <div className="text-[#212223] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">31/03/2031</div>
                                  </div>
                                  <div>
                                    <div className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Break date</div>
                                    <div className="text-[#212223] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">31/03/2026</div>
                                  </div>
                                  <div>
                                    <div className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Rent review</div>
                                    <div className="text-[#212223] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">01/04/2027</div>
                                  </div>
                                </div>

                                {/* RISKS & FINDINGS */}
                                <h3 className="text-[#404040] text-[13px] font-['Source_Sans_3:Bold',sans-serif] uppercase tracking-wider mb-4 mt-8">RISKS & FINDINGS</h3>

                                {/* Urgent Risk Card */}
                                <div className="border-l-4 border-[#AB3300] bg-[#fff5f5] rounded-lg p-4 mb-4">
                                  <h4 className="text-[#8B2500] text-[16px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-2">
                                    Break notice deadline — possible lapse
                                  </h4>
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.6]">
                                    The break option falls on 31 March 2026. Reading the lease document, clause 8.2 requires not less than 6 months' written notice — placing the notice deadline at 30 September 2025. Today's date is 6 April 2026, meaning this deadline has passed. You should confirm with Rachel Drummond whether notice was served and obtain evidence of service immediately. If notice was not served, the break right has lapsed and the lease will run to 31 March 2031.
                                  </p>
                                </div>

                                {/* Warning Risk Card */}
                                <div className="border-l-4 border-[#BA8D37] bg-[#fffbf0] rounded-lg p-4 mb-4">
                                  <h4 className="text-[#8B6914] text-[16px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-2">
                                    Break pre-conditions — verify compliance
                                  </h4>
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.6]">
                                    The lease imposes three pre-conditions on the break: (1) no arrears of rent at the break date, (2) vacant possession of the whole premises, and (3) no material breach of tenant covenants. Even if notice was served in time, failure to satisfy any of these conditions would invalidate the break. Confirm rent account status and tenant's occupation plans.
                                  </p>
                                </div>

                                {/* Info Card */}
                                <div className="border-l-4 border-[#0A4E75] bg-[#f0f7fb] rounded-lg p-4 mb-6">
                                  <h4 className="text-[#0A4E75] text-[16px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-2">
                                    Rent review due April 2027 — begin preparation
                                  </h4>
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.6]">
                                    If the break lapses, the next key event is a rent review on 01 April 2027 on an open market basis. You should instruct a surveyor to assess current market rental value for M1 4BT office space no later than October 2026, giving 6 months to negotiate ahead of the review date.
                                  </p>
                                </div>

                                {/* CRITICAL DATES TIMELINE */}
                                <h3 className="text-[#404040] text-[13px] font-['Source_Sans_3:Bold',sans-serif] uppercase tracking-wider mb-4 mt-8">CRITICAL DATES TIMELINE</h3>

                                <div className="bg-white border border-[#e5e5e5] rounded-lg p-6 mb-6">
                                  {/* Timeline Entry 1 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#AB3300] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#AB3300] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">30 Sep 2025</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Break notice deadline</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Est. 6 months prior to break date — confirm whether notice was served
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 2 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#AB3300] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#AB3300] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">31 Mar 2026</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Break option date</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Lease terminates on this date only if valid notice was served and pre-conditions met
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 3 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#BA8D37] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#BA8D37] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Oct 2026</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Instruct surveyor — rent review</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Recommended start date to prepare for April 2027 review
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 4 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#BA8D37] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#BA8D37] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">01 Apr 2027</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Rent review date</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Open market basis — upward only
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 5 */}
                                  <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#999] mt-1"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#999] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">31 Mar 2031</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Lease expiry</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Outside the Landlord and Tenant Act 1954 — no statutory renewal right
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Source */}
                                <p className="text-[#999] text-[13px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-4">
                                  Sources: iSheet — Lease tracker (1 record) · Files — City Centre Office lease, Manchester/London (clause 8.2 reviewed) · Today: 6 April 2026
                                </p>

                                {/* Feedback Buttons */}
                                <FeedbackButtons />

                                {/* Suggested follow-up */}
                                <div className="mb-2">
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-3">Suggested follow-up</p>
                                  <div className="flex flex-wrap gap-2">
                                    <div 
                                      onClick={() => handleSuggestionClick("Draft a break notice")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Draft a break notice ↗</p>
                                      </div>
                                    </div>
                                    <div 
                                      onClick={() => handleSuggestionClick("Show all break pre-conditions")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Show all break pre-conditions ↗</p>
                                      </div>
                                    </div>
                                    <div 
                                      onClick={() => handleSuggestionClick("Check 1954 Act status")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Check 1954 Act status ↗</p>
                                      </div>
                                    </div>
                                    <div 
                                      onClick={() => handleSuggestionClick("Prepare rent review briefing")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Prepare rent review briefing ↗</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : message.content === 'PARKSIDE_OFFICES' ? (
                              // City Centre Office summary response
                              <>
                                {/* Property Header Card */}
                                <div className="bg-white rounded-[8px] p-4 mb-4 border border-[#d2d2d2] relative">
                                  <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                      <h2 className="text-[#212223] text-[18px] font-['Clario:Bold',sans-serif] leading-[1.2] mb-1">City Centre Office</h2>
                                      <p className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Manchester, M1 4BT · Tech Solutions Ltd
                                      </p>
                                      <p className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mt-2">
                                        Assigned to: Rachel Drummond
                                      </p>
                                    </div>
                                    <div className="bg-[#ffeded] rounded-[4px] px-[8px] py-[4px] shrink-0">
                                      <span className="text-[#ab3300] text-[12px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.2] whitespace-nowrap">
                                        Urgent
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {/* Key Metrics - 2 rows of 2 */}
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <div className="text-[#666] text-[12px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Annual rent</div>
                                      <div className="text-[#212223] text-[16px] font-['Clario:Bold',sans-serif] leading-[1.2]">£185,000</div>
                                    </div>
                                    <div>
                                      <div className="text-[#666] text-[12px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Lease expiry</div>
                                      <div className="text-[#212223] text-[16px] font-['Clario:Bold',sans-serif] leading-[1.2]">31/03/2031</div>
                                    </div>
                                    <div>
                                      <div className="text-[#666] text-[12px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Break date</div>
                                      <div className="text-[#212223] text-[16px] font-['Clario:Bold',sans-serif] leading-[1.2]">31/03/2026</div>
                                    </div>
                                    <div>
                                      <div className="text-[#666] text-[12px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Rent review</div>
                                      <div className="text-[#212223] text-[16px] font-['Clario:Bold',sans-serif] leading-[1.2]">01/04/2027</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Summary paragraph */}
                                <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.6] mb-6">
                                  The lease is performing well with no immediate issues. The tenant (Design Studio Co) has been in occupation since 01 November 2022 on a 10-year term with a break option at year 5.
                                </p>

                                {/* PLANNING AHEAD */}
                                <h3 className="text-[#404040] text-[13px] font-['Source_Sans_3:Bold',sans-serif] uppercase tracking-wider mb-4 mt-6">PLANNING AHEAD</h3>

                                {/* Monitor Card */}
                                <div className="border-l-4 border-[#BA8D37] bg-[#fffbf0] rounded-lg p-4 mb-4">
                                  <h4 className="text-[#8B6914] text-[16px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-2">
                                    Break option approaching — tenant intentions
                                  </h4>
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.6]">
                                    The tenant has a break option on 31 October 2027 — approximately 18 months away. If the lease includes a 6-month notice requirement, the deadline to serve notice would fall around April 2027. You should contact Design Studio Co in Q1 2027 to understand their intentions and confirm whether they plan to remain beyond the break date.
                                  </p>
                                </div>

                                {/* Info Card */}
                                <div className="border-l-4 border-[#0A4E75] bg-[#f0f7fb] rounded-lg p-4 mb-6">
                                  <h4 className="text-[#0A4E75] text-[16px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-2">
                                    Rent review due November 2028
                                  </h4>
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.6]">
                                    There is a rent review on 01 November 2028 (upward only, open market). Assuming the tenant does not exercise the break in 2027, you should instruct a surveyor by May 2028 to assess current market rents for comparable office space in Bristol BS1.
                                  </p>
                                </div>

                                {/* CRITICAL DATES TIMELINE */}
                                <h3 className="text-[#404040] text-[13px] font-['Source_Sans_3:Bold',sans-serif] uppercase tracking-wider mb-4 mt-8">CRITICAL DATES TIMELINE</h3>

                                <div className="bg-white border border-[#e5e5e5] rounded-lg p-6 mb-6">
                                  {/* Timeline Entry 1 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#BA8D37] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#BA8D37] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Apr 2027</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Contact tenant re: break option</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Est. 6 months before break date — confirm tenant intentions
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 2 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#BA8D37] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#BA8D37] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">31 Oct 2027</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Break option date</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Tenant may terminate lease on this date if notice served
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 3 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#0A4E75] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#0A4E75] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">May 2028</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Instruct surveyor — rent review</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Recommended start date (6 months before review)
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 4 */}
                                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#0A4E75] mt-1"></div>
                                      <div className="w-0.5 flex-1 bg-[#e5e5e5] mt-2"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#0A4E75] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">01 Nov 2028</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Rent review date</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        Open market basis — upward only
                                      </p>
                                    </div>
                                  </div>

                                  {/* Timeline Entry 5 */}
                                  <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 rounded-full bg-[#999] mt-1"></div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[#999] text-[15px] font-['Source_Sans_3:Bold',sans-serif] mb-1">31 Oct 2032</div>
                                      <h4 className="text-[#212223] text-[16px] font-['Source_Sans_3:Bold',sans-serif] mb-1">Lease expiry</h4>
                                      <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                        End of contractual term
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Source */}
                                <p className="text-[#999] text-[13px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-4">
                                  Sources: iSheet — Lease tracker (1 record) · Files — Parkside Offices lease, Bristol/London · Today: 6 April 2026
                                </p>

                                {/* Feedback Buttons */}
                                <FeedbackButtons />

                                {/* Suggested follow-up */}
                                <div className="mb-2">
                                  <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-3">Suggested follow-up</p>
                                  <div className="flex flex-wrap gap-2">
                                    <div 
                                      onClick={() => handleSuggestionClick("Check break conditions for Parkside Offices")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Check break conditions for Parkside Offices</p>
                                      </div>
                                    </div>
                                    <div 
                                      onClick={() => handleSuggestionClick("Show all leases with breaks in 2027")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Show all leases with breaks in 2027</p>
                                      </div>
                                    </div>
                                    <div 
                                      onClick={() => handleSuggestionClick("Prepare tenant contact letter")}
                                      className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                    >
                                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Prepare tenant contact letter ↗</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                            {/* Summary Stats */}
                            <div className="flex gap-8 mb-6">
                              <div>
                                <div className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Break options found</div>
                                <div className="text-[#212223] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">2</div>
                              </div>
                              <div>
                                <div className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Require immediate action</div>
                                <div className="text-[#8B2500] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">1</div>
                              </div>
                              <div>
                                <div className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-1">Rent at risk</div>
                                <div className="text-[#212223] text-[24px] font-['Clario:Bold',sans-serif] leading-[1.2]">£327,000</div>
                              </div>
                            </div>

                            {/* Intro paragraph */}
                            <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-6">
                              2 properties have break options falling within the next 90 days. 1 requires urgent action — the break notice window for City Centre Office may already be open depending on the notice period required under the lease.
                            </p>

                            {/* Property Cards */}
                            <div className="flex flex-col gap-4 mb-6">
                              {/* City Centre Office Card */}
                              <div className="border-l-4 border-[#AB3300] bg-white rounded-lg shadow-sm p-4 relative">
                                <div className="absolute top-4 right-4">
                                  <div className="bg-[#ffeded] rounded-[4px] px-[8px] py-[4px]">
                                    <span className="text-[#ab3300] text-[12px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.2]">
                                      Urgent
                                    </span>
                                  </div>
                                </div>
                                <h3 className="text-[#212223] text-[18px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-1">City Centre Office</h3>
                                <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-4">Manchester, M1 4BT · Tech Solutions Ltd</p>
                                
                                <div className="flex gap-12 mb-4">
                                  <div>
                                    <div className="text-[#212223] text-[14px] font-['Source_Sans_3',sans-serif] font-bold leading-[1.5] mb-1">Break date:</div>
                                    <div className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">31/03/2026</div>
                                  </div>
                                  <div>
                                    <div className="text-[#212223] text-[14px] font-['Source_Sans_3',sans-serif] font-bold leading-[1.5] mb-1">Current rent:</div>
                                    <div className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">£185,000 p.a.</div>
                                  </div>
                                  <div>
                                    <div className="text-[#212223] text-[14px] font-['Source_Sans_3',sans-serif] font-bold leading-[1.5] mb-1">Lease status:</div>
                                    <div className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">Break notice</div>
                                  </div>
                                </div>

                                <div className="bg-[#ffeded] border border-[#ffeded] rounded p-3">
                                  <p className="text-[#ab3300] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                    Break date is 31 March 2026 — approximately 85 days away. Depending on the notice period in the lease (typically 6 months), the deadline to serve notice may have already passed. Check lease clause immediately and confirm whether break is still exercisable.
                                  </p>
                                </div>
                              </div>

                              {/* Innovation Centre Card */}
                              <div className="border-l-4 border-[#BA8D37] bg-white rounded-lg shadow-sm p-4 relative">
                                <div className="absolute top-4 right-4">
                                  <div className="bg-[#fff8e5] rounded-[4px] px-[8px] py-[4px]">
                                    <span className="text-[#8b6914] text-[12px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.2]">
                                      Monitor
                                    </span>
                                  </div>
                                </div>
                                <h3 className="text-[#212223] text-[18px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-1">Innovation Centre</h3>
                                <p className="text-[#666] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-4">Cambridge, CB2 1TN · Research Labs Ltd</p>
                                
                                <div className="flex gap-12 mb-4">
                                  <div>
                                    <div className="text-[#212223] text-[14px] font-['Source_Sans_3',sans-serif] font-bold leading-[1.5] mb-1">Break date:</div>
                                    <div className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">28/02/2026</div>
                                  </div>
                                  <div>
                                    <div className="text-[#212223] text-[14px] font-['Source_Sans_3',sans-serif] font-bold leading-[1.5] mb-1">Current rent:</div>
                                    <div className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">£275,000 p.a.</div>
                                  </div>
                                  <div>
                                    <div className="text-[#212223] text-[14px] font-['Source_Sans_3',sans-serif] font-bold leading-[1.5] mb-1">Lease status:</div>
                                    <div className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">Active</div>
                                  </div>
                                </div>

                                <div className="bg-[#fff8e5] border border-[#fff8e5] rounded p-3">
                                  <p className="text-[#8b6914] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                                    Break date is 28 February 2026 — within the 90-day window. Notice deadline likely falls in November 2025 if a 3-month notice period applies. Confirm notice requirements from the lease and diarise accordingly.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Other properties paragraph */}
                            <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-6">
                              6 other properties have break options but these fall outside the 90-day window. The next upcoming after these two is Quayside Tower (Newcastle) with a break on 31/01/2026.
                            </p>

                            {/* Source */}
                            <p className="text-[#999] text-[13px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] mb-4">
                              Source: iSheet — Lease tracker · 10 records reviewed · Today's date: 6 April 2026
                            </p>

                            {/* Feedback Buttons */}
                            <FeedbackButtons />

                            {/* Suggested follow-up */}
                            <div className="mb-2">
                              <p className="text-[#212223] text-[15px] font-['Source_Sans_3:Bold',sans-serif] leading-[1.5] mb-3">Suggested follow-up</p>
                              <div className="flex flex-col gap-2">
                                <div 
                                  onClick={() => handleSuggestionClick("What are the break conditions for City Centre Office?")}
                                  className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                >
                                  <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                    <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">What are the break conditions for City Centre Office?</p>
                                  </div>
                                </div>
                                <div 
                                  onClick={() => handleSuggestionClick("Show leases expiring before end of 2026")}
                                  className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                >
                                  <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                    <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Show leases expiring before end of 2026</p>
                                  </div>
                                </div>
                                <div 
                                  onClick={() => handleSuggestionClick("Draft a break notice for City Centre Office")}
                                  className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                                >
                                  <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                                    <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Draft a break notice for City Centre Office</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </>
                            )}
                          </div>
                        ) : (
                          <p className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-0 relative text-[#212223] text-[15px]">{message.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {isProcessing && (
        <div className="min-w-0 relative shrink-0 w-full" data-name="cc-message-box">
          <div className="content-stretch flex items-start min-w-0 py-[16px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-0 relative" data-name="prompt">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
                <CoCounselIcon />
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="cc-metadata">
                    <p className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] min-h-px min-w-px relative text-[#666] text-[14px] whitespace-pre-wrap">{`HighQ Assist - ${formatTime(new Date())}`}</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Text">
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="content-stretch flex items-start justify-center pl-[32px] relative w-full">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }}></div>
                      <div className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '150ms', animationDuration: '1s' }}></div>
                      <div className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '300ms', animationDuration: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

function Frame9({ isExpanded, messages, onSuggestionClick, isProcessing, context }: { isExpanded?: boolean; messages: Message[]; onSuggestionClick?: (prompt: string) => void; isProcessing?: boolean; context?: 'documents' | 'tracker' | 'general' }) {
  if (messages.length === 0) {
    return (
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-end min-h-px min-w-px relative w-full">
        <Intro context={context} />
        <Suggestions isExpanded={isExpanded} onSuggestionClick={onSuggestionClick} context={context} />
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
      <ChatMessages messages={messages} isProcessing={isProcessing} />
    </div>
  );
}

function Processing({ isExpanded, messages, onSuggestionClick, isProcessing, scrollContainerRef, context }: { isExpanded?: boolean; messages: Message[]; onSuggestionClick?: (prompt: string) => void; isProcessing?: boolean; scrollContainerRef?: React.RefObject<HTMLDivElement>; context?: 'documents' | 'tracker' | 'general' }) {
  return (
    <div ref={scrollContainerRef} className="bg-[#fcfcfc] flex-1 relative w-full overflow-auto" data-name="Processing 2">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] h-full">
        <Frame9 isExpanded={isExpanded} messages={messages} onSuggestionClick={onSuggestionClick} isProcessing={isProcessing} context={context} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
            <p>
              <span className="leading-[1.5]">{`Insights from site: `}</span>
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5]">Portfolio Meridian</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightSend({ onClick, isProcessing }: { onClick?: () => void; isProcessing?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-end pb-[6px] relative shrink-0" data-name="Right Send">
      <div className="content-stretch flex items-start relative shrink-0" data-name="bttn: send prompt">
        <div onClick={onClick} className="bg-[#314b3e] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#415e4e]" data-name="saf-button-icon">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
          <div className="shrink-0 size-[16px] flex items-center justify-center" data-name="send-icon">
            {isProcessing ? (
              <Square className="w-[12px] h-[12px] text-white fill-white" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAreaField({ value, onChange, onSend, onKeyPress, isProcessing, textareaRef, hasMessages }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void; isProcessing?: boolean; textareaRef?: React.RefObject<HTMLTextAreaElement>; hasMessages?: boolean }) {
  const [isFocused, setIsFocused] = React.useState(false);
  
  return (
    <div className="bg-white h-[80px] relative rounded-[12px] shrink-0 w-full" data-name="text-area-field">
      <div className="flex flex-row items-stretch overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[11px] items-stretch pl-[16px] pr-[12px] py-[12px] relative size-full">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={hasMessages ? "Ask a follow up..." : "Ask about your matter..."}
            rows={2}
            className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#212223] text-[15px] bg-transparent border-none outline-none placeholder:text-[#666] resize-none"
          />
          <RightSend onClick={onSend} isProcessing={isProcessing} />
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-solid inset-[-1px] pointer-events-none rounded-[13px] transition-colors ${isFocused ? 'border-[2px] border-[#1d4b34]' : 'border border-[#d2d2d2]'}`} />
    </div>
  );
}

function Frame2({ value, onChange, onSend, onKeyPress, isProcessing, textareaRef, hasMessages }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void; isProcessing?: boolean; textareaRef?: React.RefObject<HTMLTextAreaElement>; hasMessages?: boolean }) {
  return (
    <div className="bg-[#ebf0ed] relative rounded-[13px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-px relative w-full">
          <Frame3 />
          <TextAreaField value={value} onChange={onChange} onSend={onSend} onKeyPress={onKeyPress} isProcessing={isProcessing} textareaRef={textareaRef} hasMessages={hasMessages} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[8px] relative shrink-0">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[0px] text-right whitespace-nowrap">
        <p className="text-[12px]">
          <span className="leading-[1.35]">{`Your data is `}</span>
          <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] text-[#0062c4]">private and secure</span>
          <span className="leading-[1.35]">{`. `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame4({ value, onChange, onSend, onKeyPress, isProcessing, textareaRef, hasMessages }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void; isProcessing?: boolean; textareaRef?: React.RefObject<HTMLTextAreaElement>; hasMessages?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 value={value} onChange={onChange} onSend={onSend} onKeyPress={onKeyPress} isProcessing={isProcessing} textareaRef={textareaRef} hasMessages={hasMessages} />
      <Frame1 />
    </div>
  );
}

function InputContainer({ value, onChange, onSend, onKeyPress, isProcessing, textareaRef, hasMessages }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void; isProcessing?: boolean; textareaRef?: React.RefObject<HTMLTextAreaElement>; hasMessages?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Input container">
      <div className="content-stretch flex flex-col items-center py-[8px] relative shrink-0 w-full" data-name="Chat input">
        <Frame4 value={value} onChange={onChange} onSend={onSend} onKeyPress={onKeyPress} isProcessing={isProcessing} textareaRef={textareaRef} hasMessages={hasMessages} />
      </div>
    </div>
  );
}

export default function InteractiveSafDrawer({ onClose, onExpand, isExpanded, messages, setMessages, onShowHistory, onNewThread, prefillText, context = 'general' }: InteractiveSafDrawerProps) {
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const responseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle prefilled text
  useEffect(() => {
    if (prefillText) {
      setInputValue(prefillText);
      // Auto-scroll to bottom to show the input field
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
        // Focus the textarea to show the active state
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 100);
    }
  }, [prefillText]);

  // Handle triggered messages from external sources (e.g., ProjectChat)
  useEffect(() => {
    // Check if the last message is a user message without a response
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const hasResponse = messages.length >= 2 && messages[messages.length - 1].sender === 'assistant';
      
      // If last message is from user and there's no response yet, generate one
      if (lastMessage.sender === 'user' && !hasResponse && !isProcessing && !lastMessage.canceled) {
        const userContent = lastMessage.content;
        setIsProcessing(true);

        // Check if it's the break options question
        if (userContent === 'Which leases have break options in the next 90 days?' || userContent === 'Upcoming lease break options') {
          const timeout = setTimeout(() => {
            const assistantMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: `**2 critical deadlines require immediate action:**\n\n1. **14-18 Oxford Street** — Break notice for Zara UK must be served by **15 July 2025**. If missed, the break option at 24 March 2026 is lost and the lease runs to 2031.\n\n2. **Tower Point, Brighton** — Lease expired 28 February 2025. Tenant is holding over under the Landlord and Tenant Act 1954. Renewal terms have not yet been agreed — risk of statutory continuation.\n\n*Total annual rent across properties expiring or breaking before end of 2026: £3,760,000*`,
              sender: 'assistant',
              timestamp: new Date(),
              hasImage: true,
            };
            setMessages(prev => [...prev, assistantMessage]);
            setIsProcessing(false);
            responseTimeoutRef.current = null;
          }, 2000);
          responseTimeoutRef.current = timeout;
        } else if (userContent.includes('Give me a full summary of City Centre Office')) {
          const timeout = setTimeout(() => {
            const assistantMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: 'PARKSIDE_OFFICES',
              sender: 'assistant',
              timestamp: new Date(),
              hasImage: true,
            };
            setMessages(prev => [...prev, assistantMessage]);
            setIsProcessing(false);
            responseTimeoutRef.current = null;
          }, 2500);
          responseTimeoutRef.current = timeout;
        } else if (isHelpQuestion(userContent)) {
          const timeout = setTimeout(() => {
            const assistantMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: "For questions about HighQ features, setup guides, product updates, and technical support, please use the HighQ guide assistant located in the bottom right corner of your screen. It has access to comprehensive documentation and can help you with site configuration, feature explanations, and release information.",
              sender: 'assistant',
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, assistantMessage]);
            setIsProcessing(false);
            responseTimeoutRef.current = null;
          }, 500);
          responseTimeoutRef.current = timeout;
        } else {
          const timeout = setTimeout(() => {
            const assistantMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: "I can help you with insights from your Portfolio Meridian data, including matters, documents, and iSheets. What would you like to know?",
              sender: 'assistant',
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, assistantMessage]);
            setIsProcessing(false);
            responseTimeoutRef.current = null;
          }, 500);
          responseTimeoutRef.current = timeout;
        }
      }
    }
  }, [messages, isProcessing, setMessages]);

  const handleSuggestionClick = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleNewThreadLocal = () => {
    if (onNewThread) {
      onNewThread();
    } else {
      setMessages([]);
    }
    setInputValue('');
    setIsProcessing(false);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsProcessing(true);

    // Check if it's the break options question
    if (currentInput === 'Which leases have break options in the next 90 days?' || currentInput === 'Upcoming lease break options') {
      // Simulate processing delay
      const timeout = setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `**2 critical deadlines require immediate action:**\n\n1. **14-18 Oxford Street** — Break notice for Zara UK must be served by **15 July 2025**. If missed, the break option at 24 March 2026 is lost and the lease runs to 2031.\n\n2. **Tower Point, Brighton** — Lease expired 28 February 2025. Tenant is holding over under the Landlord and Tenant Act 1954. Renewal terms have not yet been agreed — risk of statutory continuation.\n\n*Total annual rent across properties expiring or breaking before end of 2026: £3,760,000*`,
          sender: 'assistant',
          timestamp: new Date(),
          hasImage: true,
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsProcessing(false);
        responseTimeoutRef.current = null;
      }, 2000);
      responseTimeoutRef.current = timeout;
    } else if (currentInput.includes('Give me a full summary of City Centre Office')) {
      // Property deep-dive response - City Centre Office / Parkside Offices
      const timeout = setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'PARKSIDE_OFFICES',
          sender: 'assistant',
          timestamp: new Date(),
          hasImage: true,
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsProcessing(false);
        responseTimeoutRef.current = null;
      }, 2500);
      responseTimeoutRef.current = timeout;
    } else if (isHelpQuestion(currentInput)) {
      const timeout = setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "For questions about HighQ features, setup guides, product updates, and technical support, please use the HighQ guide assistant located in the bottom right corner of your screen. It has access to comprehensive documentation and can help you with site configuration, feature explanations, and release information.",
          sender: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsProcessing(false);
        responseTimeoutRef.current = null;
      }, 500);
      responseTimeoutRef.current = timeout;
    } else {
      // Simulate a response for other questions
      const timeout = setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I can help you with insights from your Portfolio Meridian data, including matters, documents, and iSheets. What would you like to know?",
          sender: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsProcessing(false);
        responseTimeoutRef.current = null;
      }, 500);
      responseTimeoutRef.current = timeout;
    }
  };

  const handleStopProcessing = () => {
    // Clear the pending timeout
    if (responseTimeoutRef.current) {
      clearTimeout(responseTimeoutRef.current);
      responseTimeoutRef.current = null;
    }
    
    // Mark the last user message as canceled
    setMessages(prev => {
      const newMessages = [...prev];
      // Find the last user message
      for (let i = newMessages.length - 1; i >= 0; i--) {
        if (newMessages[i].sender === 'user') {
          newMessages[i] = { ...newMessages[i], canceled: true };
          break;
        }
      }
      return newMessages;
    });
    
    setIsProcessing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-start relative size-full" data-name="saf-drawer">
      <div className={`relative shrink-0 w-full ${isExpanded ? 'h-[64px]' : 'h-[56px]'}`} data-name="header">
        <div aria-hidden="true" className="absolute border-[#dedede] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className={`content-stretch flex items-center px-[24px] relative size-full ${isExpanded ? 'py-[18px]' : 'py-[16px]'}`}>
            <Branding />
            <Frame onClose={onClose} onExpand={onExpand} isExpanded={isExpanded} onNewThread={handleNewThreadLocal} onShowHistory={onShowHistory} hasMessages={messages.length > 0} />
          </div>
        </div>
      </div>
      <Processing isExpanded={isExpanded} messages={messages} onSuggestionClick={handleSuggestionClick} isProcessing={isProcessing} scrollContainerRef={scrollContainerRef} context={context} />
      <div className="bg-[#fcfcfc] relative shrink-0 w-full" data-name="active">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
          <InputContainer 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            onSend={isProcessing ? handleStopProcessing : handleSendMessage}
            onKeyPress={handleKeyPress}
            isProcessing={isProcessing}
            textareaRef={textareaRef}
            hasMessages={messages.length > 0}
          />
        </div>
      </div>
    </div>
  );
}