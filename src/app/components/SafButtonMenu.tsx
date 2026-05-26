import { ChevronDown } from 'lucide-react';

export function SafButtonMenu() {
  return (
    <button className="bg-white border border-[#8a8a8a] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] px-[8px] py-[4px] h-[32px] flex items-center gap-[8px] hover:bg-[#f9f9f9] transition-colors w-full">
      <span className="text-[#212223] text-[16px] font-['Clario',sans-serif] font-medium leading-[1.35]">
        Portfolio Meridian
      </span>
      <ChevronDown className="w-4 h-4 text-[#212223] ml-auto" />
    </button>
  );
}
