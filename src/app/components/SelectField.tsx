import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
  className?: string;
}

export function SelectField({ value, onChange, options = [], className = '' }: SelectFieldProps) {
  return (
    <div className={`bg-white relative rounded-[4px] h-[32px] inline-block ${className}`}>
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        {/* Select Element */}
        <select
          value={value}
          onChange={onChange}
          className="flex-[1_0_0] h-[32px] w-full appearance-none bg-transparent px-[12px] py-[4px] font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#212223] cursor-pointer focus:outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Indicator */}
        <div className="content-stretch flex items-center justify-center min-h-[32px] min-w-[32px] absolute right-0 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-[#212223]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}