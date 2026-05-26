import React from 'react';
import { MessageSquare, FileText, UserPlus, Clock } from 'lucide-react';

interface Activity {
  type: 'chat' | 'file' | 'member' | 'other';
  text: string;
  user: string;
  time: string;
}

const activities: Activity[] = [
  { type: 'chat', text: 'Started "IP assignment gap analysis"', user: 'Thomas Shelby', time: '2h ago' },
  { type: 'file', text: 'Uploaded ip_portfolio_summary.pdf', user: 'Arthur Shelby', time: '5h ago' },
  { type: 'chat', text: 'Completed "Lease expiry review"', user: 'Polly Gray', time: '1d ago' },
  { type: 'file', text: 'Updated diligence_checklist.docx', user: 'Michael Gray', time: '2d ago' },
  { type: 'member', text: 'Added Michael Gray to workspace', user: 'Thomas Shelby', time: '3d ago' },
  { type: 'file', text: 'Uploaded property_valuation.xlsx', user: 'Polly Gray', time: '4d ago' },
  { type: 'chat', text: 'Started "Contract review discussion"', user: 'Arthur Shelby', time: '5d ago' },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'chat':
      return <MessageSquare size={16} className="text-[#3E8E7A]" />;
    case 'file':
      return <FileText size={16} className="text-[#0A4E75]" />;
    case 'member':
      return <UserPlus size={16} className="text-[#94D1C2]" />;
    default:
      return <Clock size={16} className="text-[#999999]" />;
  }
};

export function RecentActivity() {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg px-6 pt-4 pb-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif]">
          Recent activity
        </h3>
      </div>

      <div className="space-y-1">
        {activities.map((activity, index) => (
          <button 
            key={index} 
            className="flex gap-3 w-full text-left cursor-pointer group transition-colors hover:bg-[#F9F9F9] -mx-2 px-2 py-1 rounded-md"
            onClick={() => {
              // Handle click - navigate to relevant item
              console.log('Clicked activity:', activity);
            }}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-[#F5F5F5] rounded-full shrink-0 group-hover:bg-[#EEEEEE] transition-colors">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#212223] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
                <span className="font-['Source_Sans_3:SemiBold',sans-serif]">{activity.user}</span>
                {' '}
                <span className="text-[#666666]">{activity.text}</span>
              </p>
              <p className="text-[#999999] text-[12px] font-['Source_Sans_3:Regular',sans-serif] mt-0.5">
                {activity.time}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
