import React, { useState } from 'react';
import { 
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  FolderOpen,
  Folder,
  List,
  Clock,
  Share2,
  Download,
  Star,
  PenSquare,
  Paperclip,
  Trash2,
  ChevronLeft
} from 'lucide-react';

interface DocumentsSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function DocumentsSidebar({ isCollapsed, onToggleCollapse }: DocumentsSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['portfolio', 'leases']));

  const toggleFolder = (id: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (isCollapsed) {
    return (
      <div className="bg-white rounded-[8px] border border-[#d2d2d2] p-2 flex items-start">
        <button 
          onClick={onToggleCollapse}
          className="p-2 hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
        >
          <PanelLeftOpen className="w-4 h-4 text-[#1d4b34]" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white relative rounded-[8px] border border-[#d2d2d2] flex flex-col max-h-[calc(100vh-180px)] overflow-hidden">
      <div className="flex-shrink-0 px-[12px] pt-[15px] pb-[8px]">
        {/* Hide Button - Left aligned */}
        <div className="flex justify-start mb-2">
          <button 
            onClick={onToggleCollapse}
            className="flex gap-[8px] h-[24px] items-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors"
          >
            <PanelLeftClose className="w-4 h-4 text-[#1d4b34]" />
            <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[14px] whitespace-nowrap">
              <p className="leading-[1.2]">Hide</p>
            </div>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-[12px]">
        <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] pb-[15px]">
          {/* Search Field - Updated to match main search styling */}
          <div className="w-full">
            <div className="bg-[#f7f7f7] flex items-center relative rounded-[4px] h-[32px] w-full">
              <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              
              {/* Text Input */}
              <div className="bg-white flex-[1_0_0] h-[32px] relative rounded-bl-[4px] rounded-tl-[4px]">
                <div aria-hidden="true" className="absolute border-[#8a8a8a] border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="flex items-center pl-[12px] py-[4px] relative size-full">
                    <input 
                      type="text"
                      placeholder="Search folders"
                      className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#212223] bg-transparent border-none outline-none placeholder:text-[#999] w-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Search Icon Button */}
              <div className="bg-[rgba(255,255,255,0.01)] flex items-center justify-center relative shrink-0 size-[32px]">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
                <button className="flex items-center justify-center size-full hover:bg-gray-100 transition-colors rounded-r-[4px]">
                  <Search className="w-4 h-4 text-[#212223]" />
                </button>
              </div>
            </div>
          </div>

          {/* Tree View */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            {/* Portfolio Meridian - Parent */}
            <div className="bg-[#f5f7f6] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-2 border-[#f5f7f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
                <div aria-hidden="true" className="absolute border-[#50665b] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div 
                  className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full cursor-pointer"
                  onClick={() => toggleFolder('portfolio')}
                >
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <FolderOpen className="w-4 h-4 text-[#1d4b34]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
                    <p className="leading-[1.5]">Portfolio Meridian</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leases & Licences */}
            {expandedFolders.has('portfolio') && (
              <>
                <div 
                  className="bg-[#f5f7f6] content-stretch flex items-start relative shrink-0 w-full cursor-pointer"
                >
                  <div aria-hidden="true" className="absolute border border-[#d8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <FolderOpen className="w-4 h-4 text-[#1d4b34]" />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#1d4b34] text-[16px]">
                        <p className="leading-[1.5]">Leases & licences</p>
                      </div>
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0">
                          <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
                          <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0">
                            <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[1.35]">18</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rent reviews */}
                <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
                  <div className="flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <Folder className="w-4 h-4 text-[#1f1f1f]" />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
                        <p className="leading-[1.5]">Rent reviews</p>
                      </div>
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0">
                          <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
                          <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0">
                            <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[1.35]">2</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Landlord consents */}
                <div className="content-stretch flex items-start relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
                  <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <Folder className="w-4 h-4 text-[#1f1f1f]" />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
                        <p className="leading-[1.5]">Landlord consents</p>
                      </div>
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0">
                          <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
                          <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0">
                            <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[1.35]">3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lease renewals */}
                <div className="content-stretch flex items-start relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
                  <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <Folder className="w-4 h-4 text-[#1f1f1f]" />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
                        <p className="leading-[1.5]">Lease renewals</p>
                      </div>
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0">
                          <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
                          <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0">
                            <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[1.35]">1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Correspondence */}
                <div className="content-stretch flex items-start relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
                  <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <Folder className="w-4 h-4 text-[#1f1f1f]" />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
                        <p className="leading-[1.5]">Correspondence</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executed documents */}
                <div className="content-stretch flex items-start relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
                  <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
                      <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                        <Folder className="w-4 h-4 text-[#1f1f1f]" />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
                        <p className="leading-[1.5]">Executed documents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="h-px relative shrink-0 w-full">
            <div className="absolute bg-[#d2d2d2] h-px left-0 right-0 top-0" />
          </div>

          {/* Bottom Options */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <List className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Index</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <Clock className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Recent</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <Share2 className="w-4 h-4 text-[#404040]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Shared items</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <Download className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Received items</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-[160px] cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <Star className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Favorites</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <PenSquare className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">eSignature tracking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <Paperclip className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Attachments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]">
              <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-start pt-[4px] relative shrink-0">
                    <Trash2 className="w-4 h-4 text-[#212223]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
                    <p className="leading-[1.35]">Deleted items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}