function Items() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="items">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="saf-menu-item">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
            <p className="leading-[1.5]">Manage views</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="saf-menu-item">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
            <p className="leading-[1.5]">Share</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="saf-menu-item">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
            <p className="leading-[1.5]">Print preview</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="saf-menu-item">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
            <p className="leading-[1.5]">Export to PDF</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="saf-menu-item">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
            <p className="leading-[1.5]">Export</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="saf-menu-item">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
            <p className="leading-[1.5]">Keyboard interaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SafMenuDefault() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="saf-menu-default">
      <div className="content-stretch flex items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <Items />
      </div>
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_4px_12px_4px_rgba(31,31,31,0.1)]" />
    </div>
  );
}