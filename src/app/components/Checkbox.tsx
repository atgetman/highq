import React from 'react';
import checkboxSvgPaths from '../../imports/Container-1/svg-7eno29jiqv';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({ checked, onChange, className = '' }: CheckboxProps) {
  return (
    <div className={`relative size-[20px] ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      {/* Container */}
      <div 
        className="absolute inset-0 size-full rounded-[2px] transition-colors"
        style={{ 
          backgroundColor: checked ? '#1d4b34' : 'white',
        }}
      >
        {/* Checkmark when checked */}
        {checked && (
          <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <svg className="block size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="container">
                    <path 
                      clipRule="evenodd" 
                      d={checkboxSvgPaths.p3dfb03a2} 
                      fill="white" 
                      fillRule="evenodd" 
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Border */}
      <div 
        aria-hidden="true" 
        className="absolute inset-[-1px] pointer-events-none rounded-[3px]"
        style={{
          border: `1px solid ${checked ? '#1d4b34' : '#8a8a8a'}`
        }}
      />
    </div>
  );
}