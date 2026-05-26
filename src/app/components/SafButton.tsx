import { Sparkles } from 'lucide-react';

interface SafButtonProps {
  onClick?: () => void;
}

export function SafButton({ onClick }: SafButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className="bg-white content-stretch flex items-start justify-center relative rounded-[4px] size-full hover:bg-[#EDF2F0] transition-colors" 
      data-name="saf-button"
    >
      <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px] group-hover:border-[#1d4b34]" />
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 group" data-name="contents">
        <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
            <Sparkles className="w-4 h-4 text-[#D64000] fill-[#D64000]" />
          </div>
        </div>
        <div className="flex flex-col font-['Clario',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[16px] whitespace-nowrap">
          <p className="leading-[1.35]">HighQ Assist</p>
        </div>
      </div>
    </button>
  );
}
