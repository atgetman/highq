import React from 'react';
import { FileText, File, FileCheck, Edit3 } from 'lucide-react';
import svgPaths from '../../imports/1stRow/svg-hdpocmen46';

// PDF Icon Component
function PdfIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[1.56%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
          <g>
            <path d={svgPaths.p2a230500} fill="#D50000" />
            <path d={svgPaths.pb1df500} fill="#D50000" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Project Details Section
function ProjectDetailsSection() {
  const projectDetails = [
    "Portfolio Meridian is a comprehensive property portfolio across 3 UK regions",
    "Primary counsel for tenant: Wilson Solicitors",
    "Due diligence target date: Q2 2026",
    "Implied valuation: £86M",
    "Key risk areas: IP assignment gaps, pending CFOC compliance, renewal auto-dilution provisions",
    "Client preference: flag issues as High/Medium/Low"
  ];

  return (
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-center mb-[16px]">
        <h2 className="text-[#1f1f1f] text-[20px] font-['Clario:Medium',sans-serif] leading-[1.2]">
          Project details
        </h2>
      </div>
      
      <ul className="space-y-3">
        {projectDetails.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#3E8E7A] text-[16px] leading-[1.5] flex-shrink-0">•</span>
            <span className="text-[#404040] text-[16px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Quick Links Section
function QuickLinksSection() {
  return (
    <div className="flex-1 min-w-0">
      <h2 className="text-[#1f1f1f] text-[20px] font-['Clario:Medium',sans-serif] leading-[1.2] mb-4">
        Quick links
      </h2>
      <div className="space-y-4">
        <button className="w-full h-[40px] bg-[#0a4e75] border border-[#123021] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] hover:bg-[#0c5e8a] transition-colors flex items-center justify-center gap-2 px-4">
          <FileText className="w-4 h-4 text-[#f7f7f7]" />
          <span className="text-[#f7f7f7] text-[16px] font-['Clario:Medium',sans-serif] leading-[1.5]">
            View all documents
          </span>
        </button>
        
        <button className="w-full h-[40px] bg-[#0a4e75] border border-[#123021] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] hover:bg-[#0c5e8a] transition-colors flex items-center justify-center gap-2 px-4">
          <File className="w-4 h-4 text-[#f7f7f7]" />
          <span className="text-[#f7f7f7] text-[16px] font-['Clario:Medium',sans-serif] leading-[1.5]">
            Matter FAQs
          </span>
        </button>
        
        <button className="w-full h-[40px] bg-[#0a4e75] border border-[#123021] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] hover:bg-[#0c5e8a] transition-colors flex items-center justify-center gap-2 px-4">
          <FileCheck className="w-4 h-4 text-[#f7f7f7]" />
          <span className="text-[#f7f7f7] text-[16px] font-['Clario:Medium',sans-serif] leading-[1.5]">
            Raise a request
          </span>
        </button>
      </div>
    </div>
  );
}

// Guidance Section
function GuidanceSection() {
  return (
    <div className="flex-1 min-w-0">
      <h2 className="text-[#1f1f1f] text-[20px] font-['Clario:Medium',sans-serif] leading-[1.2] mb-4">
        Guidance
      </h2>
      
      <div className="space-y-4">
        {/* Portfolio Meridian matter guide */}
        <div className="flex gap-3 items-center">
          <PdfIcon />
          <a 
            href="#" 
            className="flex-1 text-[#0062c4] text-[16px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] underline hover:text-[#004a94] transition-colors"
          >
            Portfolio Meridian matter guide
          </a>
          <div className="bg-[#edf6ff] border border-[#0062c4] rounded-full px-2 py-1 min-h-[24px] flex items-center justify-center">
            <span className="text-[#0062c4] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.35]">
              New
            </span>
          </div>
        </div>
        
        <div className="bg-[#d2d2d2] h-px w-full" />
        
        {/* How to use the lease tracker */}
        <div className="flex gap-3 items-center">
          <PdfIcon />
          <a 
            href="#" 
            className="flex-1 text-[#0062c4] text-[16px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] underline hover:text-[#004a94] transition-colors"
          >
            How to use the lease tracker
          </a>
          <div className="bg-[#edf6ff] border border-[#0062c4] rounded-full px-2 py-1 min-h-[24px] flex items-center justify-center">
            <span className="text-[#0062c4] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.35]">
              New
            </span>
          </div>
        </div>
        
        <div className="bg-[#d2d2d2] h-px w-full" />
        
        {/* Document naming conventions */}
        <div className="flex gap-3 items-center">
          <PdfIcon />
          <a 
            href="#" 
            className="flex-1 text-[#0062c4] text-[16px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] underline hover:text-[#004a94] transition-colors"
          >
            Document naming conventions
          </a>
          <div className="bg-[#edf6ff] border border-[#0062c4] rounded-full px-2 py-1 min-h-[24px] flex items-center justify-center">
            <span className="text-[#0062c4] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.35]">
              Updated
            </span>
          </div>
        </div>
        
        <div className="bg-[#d2d2d2] h-px w-full" />
      </div>
    </div>
  );
}

// Main First Row Component
export function FirstRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 whitespace-normal">
      <ProjectDetailsSection />
      <GuidanceSection />
      <QuickLinksSection />
    </div>
  );
}