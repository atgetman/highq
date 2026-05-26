import React from 'react';
import { FileText } from 'lucide-react';

interface GuidanceLinkProps {
  title: string;
  badge?: 'Updated' | 'New';
  href: string;
}

export function GuidanceLink({ title, badge, href }: GuidanceLinkProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center bg-white border border-[#D2D2D2] rounded">
          <FileText className="w-4 h-4 text-[#D64000]" />
        </div>
        <a href={href} className="text-[#0062C4] hover:text-[#054688]">
          {title}
        </a>
      </div>
      {badge && (
        <div className="bg-[#edf6ff] flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[88px]">
          <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
          <span className="font-['Source_Sans_3',sans-serif] font-normal text-[#0062c4] text-[14px] leading-[1.35]">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}