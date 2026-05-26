import React from 'react';
import { X, Sparkles, FileText, FileSearch, AlertTriangle } from 'lucide-react';

interface CoCounselInsightsPanelProps {
  onClose: () => void;
  onAskCoCounsel: () => void;
  propertyName: string;
  location: string;
}

export function CoCounselInsightsPanel({ onClose, onAskCoCounsel, propertyName, location }: CoCounselInsightsPanelProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[200] pointer-events-none">
      <div 
        className="bg-white rounded-[10px] w-full max-w-[520px] max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto border border-[#d2d2d2] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]"
      >
        
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[12px] items-start pt-[17px] px-[17px] pb-[12px] relative">
          <div className="flex items-center justify-between w-full">
            <div className="content-stretch flex gap-[8px] items-center">
              <Sparkles className="text-[#d64000]" size={20} fill="#d64000" />
              <h2 className="text-[#101828] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] tracking-[-0.1504px]">
                HighQ Assist recommendations
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center size-[20px] rounded-[4px] hover:bg-[#f5f5f5] transition-colors shrink-0"
            >
              <X className="text-[#404040]" size={16} strokeWidth={2} />
            </button>
          </div>
          
          {/* Property Info Card */}
          <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative rounded-[14px] w-full">
            <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_40px_0px_rgba(214,64,0,0.2)]" />
            <div className="content-stretch flex gap-[4px] items-center relative whitespace-nowrap">
              <p className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#212223] text-[16px]">{propertyName}</p>
              <ul className="block font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#666] text-[14px]">
                <li className="list-disc ms-[21px] whitespace-pre-wrap">
                  <span className="leading-[1.35]">{location}</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-[8px] w-full">
              <span className="text-[#666] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
                Assigned to
              </span>
              <span className="text-[#212223] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.5]">
                Rachel Drummond
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[17px] pb-[12px] bg-white">
          <div className="content-stretch flex flex-col gap-[12px] items-start">
            
            {/* Urgent Alert - Red */}
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative rounded-[14px] w-full">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_40px_0px_rgba(214,64,0,0.2)]" />
              <div className="flex items-center gap-[8px]">
                <div className="bg-[#ffeded] rounded-[4px] px-[8px] py-[4px]">
                  <span className="text-[#ab3300] text-[12px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.2]">
                    Urgent
                  </span>
                </div>
                <h3 className="text-[#212223] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.4]">
                  Break notice window — act immediately
                </h3>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212223] text-[14px] w-full">
                Break date is 31 March 2026. A standard 6-month notice period means the deadline to serve notice was 30 September 2025. This date has passed — confirm urgently whether the break is still exercisable under the lease.
              </p>
            </div>

            {/* Warning Alert - Brown/Tan */}
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative rounded-[14px] w-full">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_40px_0px_rgba(214,64,0,0.2)]" />
              <div className="flex items-center gap-[8px]">
                <div className="bg-[#fff8e5] rounded-[4px] px-[8px] py-[4px]">
                  <span className="text-[#8b6914] text-[12px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.2]">
                    Warning
                  </span>
                </div>
                <h3 className="text-[#212223] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.4]">
                  Cross-reference lease document
                </h3>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212223] text-[14px] w-full">
                The lease document has not been reviewed against this entry. Verify the exact notice period and any pre-conditions (vacant possession, no arrears) before advising the client.
              </p>
            </div>

            {/* Suggested Actions */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <h3 className="text-[#212223] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] leading-[1.4]">
                Suggestions
              </h3>
              <div className="w-full space-y-[8px]">
                <button className="w-full h-[44px] bg-white border border-[#d0d0d0] rounded-[4px] px-[20px] flex items-center gap-[8px] hover:bg-[#edf2f0] hover:border-[#6e8178] hover:border-2 transition-colors text-left">
                  <FileText className="text-[#1d4b34] shrink-0" size={14} />
                  <span className="text-[#1d4b34] text-[14px] font-['Clario:Medium',sans-serif] leading-[1.2]">
                    Draft break notice for Tech Solutions Ltd
                  </span>
                </button>
                <button className="w-full h-[44px] bg-white border border-[#d0d0d0] rounded-[4px] px-[20px] flex items-center gap-[8px] hover:bg-[#edf2f0] hover:border-[#6e8178] hover:border-2 transition-colors text-left">
                  <FileSearch className="text-[#1d4b34] shrink-0" size={14} />
                  <span className="text-[#1d4b34] text-[14px] font-['Clario:Medium',sans-serif] leading-[1.2]">
                    Check break conditions in lease document
                  </span>
                </button>
                <button className="w-full h-[44px] bg-white border border-[#d0d0d0] rounded-[4px] px-[20px] flex items-center gap-[8px] hover:bg-[#edf2f0] hover:border-[#6e8178] hover:border-2 transition-colors text-left">
                  <AlertTriangle className="text-[#1d4b34] shrink-0" size={14} />
                  <span className="text-[#1d4b34] text-[14px] font-['Clario:Medium',sans-serif] leading-[1.2]">
                    Escalate to partner — deadline risk
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-[17px] pb-[17px] bg-white">
          <button
            onClick={onAskCoCounsel}
            className="bg-[#1d4b34] w-full h-[40px] flex items-center justify-center gap-[6px] rounded-[4px] hover:bg-[#163a28] transition-colors"
          >
            <Sparkles className="w-[16px] h-[16px] text-white" fill="white" />
            <span className="text-white text-[16px] font-['Clario:Medium',sans-serif] leading-[1.35]">
              Ask HighQ Assist about this property
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}