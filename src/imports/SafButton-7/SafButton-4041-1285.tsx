function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Label text</p>
      </div>
    </div>
  );
}

export default function SafButton() {
  return (
    <div className="bg-[#1d4b34] content-stretch flex items-start justify-center relative rounded-[4px] size-full" data-name="saf-button">
      <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Contents />
    </div>
  );
}