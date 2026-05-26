function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ab3300] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">Label</p>
      </div>
    </div>
  );
}

export default function SafBadgeStatus() {
  return (
    <div className="bg-[#fff8e5] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[88px] size-full" data-name="saf-badge-status">
      <div aria-hidden="true" className="absolute border border-[#ab3300] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
      <Label />
    </div>
  );
}