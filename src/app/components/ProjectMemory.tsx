import React from 'react';
import { Edit3 } from 'lucide-react';

export function ProjectMemory() {
  const memoryItems = [
    "Portfolio Meridian is a comprehensive property portfolio across 3 UK regions",
    "Primary counsel for tenant: Wilson Solicitors",
    "Due diligence target date: Q2 2026",
    "Implied valuation: £86M",
    "Key risk areas: IP assignment gaps, pending CFOC compliance, renewal auto-dilution provisions",
    "Client preference: flag issues as High/Medium/Low"
  ];

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-[#666666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] mb-1">
            Project Context
          </h3>
          <h2 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif] leading-[1.2]">
            Memory
          </h2>
        </div>
        <button className="bg-white hover:bg-[#edf2f0] content-stretch flex items-center justify-center relative rounded-[4px] h-[32px] px-[8px] py-[4px] gap-[8px] transition-colors group">
          <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <Edit3 size={14} className="text-[#1d4b34] relative z-10" />
          <span className="text-[#1d4b34] text-[14px] font-['Clario:Medium',sans-serif] leading-[1.35] relative z-10">
            Edit
          </span>
        </button>
      </div>
      
      <ul className="space-y-2">
        {memoryItems.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#3E8E7A] mt-1">•</span>
            <span className="text-[#404040] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}