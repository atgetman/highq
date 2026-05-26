import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, FileText, User, Building2, Calendar, MessageSquarePlus, Clock, Expand, Minimize2, X, Sparkles } from 'lucide-react';

interface ChatHistoryItem {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  messageCount: number;
}

interface ActivityItem {
  id: string;
  type: 'document' | 'search' | 'analysis';
  title: string;
  description: string;
  timestamp: string;
  icon: 'FileText' | 'Building2' | 'Calendar';
}

interface ChatHistoryProps {
  onBack: () => void;
  onLoadChat: (chatId: string) => void;
  isExpanded?: boolean;
  onNewThread?: () => void;
  onClose?: () => void;
  onExpand?: () => void;
}

const chatHistoryData: ChatHistoryItem[] = [
  {
    id: '1',
    title: 'Lease break options review',
    preview: 'Which leases have break options in the next 90 days?',
    timestamp: 'Today, 2:45 PM',
    messageCount: 8
  },
  {
    id: '2',
    title: 'Portfolio vacancy analysis',
    preview: 'What is the current vacancy rate across all properties?',
    timestamp: 'Today, 11:20 AM',
    messageCount: 12
  },
  {
    id: '3',
    title: 'Rent review schedule',
    preview: 'Show me all properties with rent reviews due in Q2 2026',
    timestamp: 'Yesterday, 4:15 PM',
    messageCount: 6
  },
  {
    id: '4',
    title: 'Tenant covenant strength',
    preview: 'Which tenants have the strongest credit ratings?',
    timestamp: 'Yesterday, 10:30 AM',
    messageCount: 15
  },
  {
    id: '5',
    title: 'Lease expiry report',
    preview: 'Generate a report of leases expiring in 2026',
    timestamp: 'Apr 5, 3:20 PM',
    messageCount: 9
  },
  {
    id: '6',
    title: 'Property valuation summary',
    preview: 'What is the total value of the London portfolio?',
    timestamp: 'Apr 5, 9:45 AM',
    messageCount: 7
  },
  {
    id: '7',
    title: 'Break clause analysis',
    preview: 'Analyze all break clauses in retail properties',
    timestamp: 'Apr 4, 2:10 PM',
    messageCount: 11
  },
  {
    id: '8',
    title: 'ESG compliance check',
    preview: 'Which properties meet current ESG requirements?',
    timestamp: 'Apr 3, 4:55 PM',
    messageCount: 13
  }
];

const activityData: ActivityItem[] = [
  {
    id: '1',
    type: 'document',
    title: 'Lease Agreement - 125 High Street',
    description: 'Reviewed lease terms and break options',
    timestamp: 'Today, 3:10 PM',
    icon: 'FileText'
  },
  {
    id: '2',
    type: 'analysis',
    title: 'Portfolio Performance Q1 2026',
    description: 'Generated quarterly performance analysis',
    timestamp: 'Today, 1:45 PM',
    icon: 'Calendar'
  },
  {
    id: '3',
    type: 'search',
    title: 'Property Search - Manchester',
    description: 'Searched properties by location and type',
    timestamp: 'Today, 11:30 AM',
    icon: 'Building2'
  },
  {
    id: '4',
    type: 'document',
    title: 'Rent Review Memorandum',
    description: 'Analyzed rent review provisions',
    timestamp: 'Yesterday, 5:20 PM',
    icon: 'FileText'
  },
  {
    id: '5',
    type: 'analysis',
    title: 'Tenant Covenant Analysis',
    description: 'Evaluated tenant credit strength',
    timestamp: 'Yesterday, 2:15 PM',
    icon: 'Building2'
  },
  {
    id: '6',
    type: 'document',
    title: 'Service Charge Schedule',
    description: 'Reviewed service charge calculations',
    timestamp: 'Yesterday, 10:05 AM',
    icon: 'FileText'
  },
  {
    id: '7',
    type: 'search',
    title: 'Vacancy Report',
    description: 'Generated vacancy statistics by region',
    timestamp: 'Apr 5, 4:30 PM',
    icon: 'Building2'
  },
  {
    id: '8',
    type: 'analysis',
    title: 'Lease Expiry Schedule',
    description: 'Analyzed upcoming lease expirations',
    timestamp: 'Apr 5, 11:20 AM',
    icon: 'Calendar'
  },
  {
    id: '9',
    type: 'document',
    title: 'Insurance Policy Review',
    description: 'Reviewed insurance provisions',
    timestamp: 'Apr 4, 3:45 PM',
    icon: 'FileText'
  },
  {
    id: '10',
    type: 'search',
    title: 'Comparable Rent Analysis',
    description: 'Compared rents across similar properties',
    timestamp: 'Apr 4, 9:15 AM',
    icon: 'Building2'
  }
];

const getActivityIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText':
      return FileText;
    case 'Building2':
      return Building2;
    case 'Calendar':
      return Calendar;
    default:
      return FileText;
  }
};

export function ChatHistory({ onBack, onLoadChat, isExpanded, onNewThread, onClose, onExpand }: ChatHistoryProps) {
  const [activeTab, setActiveTab] = useState<'chats' | 'activity'>('chats');

  return (
    <div className="bg-[#fcfcfc] flex flex-col h-full">
      {/* Header */}
      <div className={`relative shrink-0 w-full ${isExpanded ? 'h-[64px]' : 'h-[56px]'} border-b border-[#dedede]`}>
        <div className="flex flex-row items-center size-full">
          <div className={`flex items-center px-[24px] relative size-full ${isExpanded ? 'py-[18px]' : 'py-[16px]'}`}>
            {/* Back button and title */}
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={onBack}
                className="flex items-center justify-center size-[32px] rounded-[4px] hover:bg-[#F2F2F2] transition-colors"
              >
                <ArrowLeft className="text-[#1d4b34]" size={20} />
              </button>
              <h2 className="text-[#1d1d1d] text-[16px] leading-[20px] font-semibold">History</h2>
            </div>
            {/* New thread button */}
            {onNewThread && (
              <button
                onClick={onNewThread}
                className="flex items-center justify-center size-[32px] rounded-[4px] hover:bg-[#F2F2F2] transition-colors"
              >
                <MessageSquarePlus className="text-[#1d4b34]" size={20} />
              </button>
            )}
            {/* Expand button */}
            {onExpand && (
              <button
                onClick={onExpand}
                className="flex items-center justify-center size-[32px] rounded-[4px] hover:bg-[#F2F2F2] transition-colors"
              >
                {isExpanded ? <Minimize2 className="text-[#1d4b34]" size={20} /> : <Expand className="text-[#1d4b34]" size={20} />}
              </button>
            )}
            {/* Close button */}
            {onClose && (
              <button
                onClick={onClose}
                className="flex items-center justify-center size-[32px] rounded-[4px] hover:bg-[#F2F2F2] transition-colors"
              >
                <X className="text-[#1d4b34]" size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#dedede] bg-white">
        <div className="flex px-[24px]">
          <button
            onClick={() => setActiveTab('chats')}
            className={`px-4 py-3 text-[14px] leading-[20px] border-b-2 transition-colors ${
              activeTab === 'chats'
                ? 'border-[#3E8E7A] text-[#1d4b34] font-semibold'
                : 'border-transparent text-[#666666] hover:text-[#1d4b34]'
            }`}
          >
            Recent chats
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-3 text-[14px] leading-[20px] border-b-2 transition-colors ${
              activeTab === 'activity'
                ? 'border-[#3E8E7A] text-[#1d4b34] font-semibold'
                : 'border-transparent text-[#666666] hover:text-[#1d4b34]'
            }`}
          >
            Recent activity
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'chats' ? (
          <div className="py-2">
            {chatHistoryData.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onLoadChat(chat.id)}
                className="w-full text-left px-[20px] py-[6px] hover:bg-[#f5f5f5] transition-colors flex items-start gap-3"
              >
                <MessageSquare className="text-[#666666] mt-[2px] shrink-0" size={16} strokeWidth={1.33} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[14px] leading-[17.5px] text-[#212223] font-['Clario:Medium',sans-serif] tracking-[-0.15px]">
                      {chat.title}
                    </p>
                    <span className="text-[11px] leading-[16.5px] text-[#999999] font-['Source_Sans_3:Regular',sans-serif] tracking-[0.06px] whitespace-nowrap">
                      {chat.timestamp}
                    </span>
                  </div>
                  <p className="text-[11px] leading-[16.5px] text-[#999999] font-['Source_Sans_3:Regular',sans-serif] tracking-[0.06px] truncate">
                    {chat.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-2">
            {activityData.map((activity) => {
              const Icon = getActivityIcon(activity.icon);
              return (
                <div
                  key={activity.id}
                  className="w-full px-[20px] py-[6px] hover:bg-[#f5f5f5] transition-colors flex items-start gap-3"
                >
                  <Icon className="text-[#666666] mt-[2px] shrink-0" size={16} strokeWidth={1.33} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[14px] leading-[17.5px] text-[#212223] font-['Clario:Medium',sans-serif] tracking-[-0.15px]">
                        {activity.title}
                      </p>
                      <span className="text-[11px] leading-[16.5px] text-[#999999] font-['Source_Sans_3:Regular',sans-serif] tracking-[0.06px] whitespace-nowrap">
                        {activity.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] leading-[16.5px] text-[#999999] font-['Source_Sans_3:Regular',sans-serif] tracking-[0.06px]">
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}