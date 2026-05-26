import { ChevronDown } from 'lucide-react';

interface SafSelectProps {
  label: string;
  required?: boolean;
  helpText?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function SafSelect({ 
  label, 
  required = false, 
  helpText, 
  value, 
  onChange, 
  options,
  placeholder = "Select from below"
}: SafSelectProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      {/* Labels */}
      <div className="flex flex-col text-[#212223]">
        <div className="flex items-start text-[16px] font-semibold">
          <p className="leading-[1.5]">{label}</p>
          {required && <p className="leading-[1.5]">*</p>}
        </div>
        {helpText && (
          <div className="text-[14px] font-normal">
            <p className="leading-[1.35]">{helpText}</p>
          </div>
        )}
      </div>

      {/* Field */}
      <div className="relative h-[40px] w-full bg-white rounded-[4px]">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full px-[12px] py-[8px] bg-transparent appearance-none text-[16px] text-[#212223] font-normal leading-[1.5] rounded-[inherit] focus:outline-none focus:border-[#0062C4] focus:border-[2px] cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Indicator */}
        <div className="absolute right-0 top-0 flex items-center justify-center h-[40px] w-[40px] pointer-events-none">
          <ChevronDown className="w-4 h-4 text-[#212223]" />
        </div>

        {/* Border */}
        <div 
          aria-hidden="true" 
          className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
        />
      </div>
    </div>
  );
}