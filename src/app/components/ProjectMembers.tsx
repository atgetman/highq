import React, { useState } from 'react';
import { UserPlus, Star, UserMinus } from 'lucide-react';

interface TeamMember {
  name: string;
  role: 'Owner' | 'Member';
  email: string;
  avatarColor: string;
  initials: string;
  isYou?: boolean;
}

const teamMembers: TeamMember[] = [
  { name: 'Thomas Shelby', role: 'Owner', email: 'thomas.shelby@armstrongfischer.com', avatarColor: '#032E5B', initials: 'TS', isYou: true },
  { name: 'Arthur Shelby', role: 'Member', email: 'arthur.shelby@armstrongfischer.com', avatarColor: '#3E8E7A', initials: 'AS' },
  { name: 'Polly Gray', role: 'Member', email: 'polly.gray@armstrongfischer.com', avatarColor: '#D64000', initials: 'PG' },
  { name: 'Michael Gray', role: 'Member', email: 'michael.gray@armstrongfischer.com', avatarColor: '#BA8D37', initials: 'MG' },
];

export function ProjectMembers() {
  const [members, setMembers] = useState(teamMembers);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg px-6 pt-4 pb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif]">
            Members
          </h3>
          <div className="flex items-center justify-center w-6 h-6 bg-[#E5E5E5] rounded-full">
            <span className="text-[#212223] text-[13px] font-['Source_Sans_3:SemiBold',sans-serif]">
              {members.length}
            </span>
          </div>
        </div>
        <button className="bg-white hover:bg-[#edf2f0] content-stretch flex items-center justify-center relative rounded-[4px] h-[32px] px-[8px] py-[4px] gap-[8px] transition-colors group">
          <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <UserPlus size={14} className="text-[#1d4b34] relative z-10" />
          <span className="text-[#1d4b34] text-[14px] font-['Clario:Medium',sans-serif] leading-[1.35] relative z-10">
            Invite
          </span>
        </button>
      </div>

      <div className="space-y-3">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] flex-shrink-0"
              style={{ backgroundColor: member.avatarColor }}
            >
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[#212223] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] truncate">
                  {member.name}
                  {member.isYou && (
                    <span className="text-[#666666] font-['Source_Sans_3:Regular',sans-serif]"> (you)</span>
                  )}
                </p>
              </div>
              <p className="text-[#666666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] truncate">
                {member.email}
              </p>
            </div>
            <div 
              className="relative flex-shrink-0"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {member.role === 'Owner' ? (
                <div className="flex items-center gap-1.5 text-[#4A90E2]">
                  <Star size={14} fill="#4A90E2" />
                  <span className="text-[14px] font-['Source_Sans_3:SemiBold',sans-serif]">
                    Owner
                  </span>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-[#5B8B7D] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif]">
                      Member
                    </span>
                    {hoveredMember === index && (
                      <button
                        onClick={() => removeMember(index)}
                        className="hover:opacity-70 transition-opacity"
                        title="Remove member"
                      >
                        <UserMinus size={16} className="text-[#E07A5F]" strokeWidth={2} />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}