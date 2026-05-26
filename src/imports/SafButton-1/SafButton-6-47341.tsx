function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Label text</p>
      </div>
    </div>
  );
}

export default function SafButton() {
  return (
    <div className="bg-[#edf2f0] content-stretch flex items-start justify-center relative rounded-[4px] size-full" data-name="saf-button">
      <div aria-hidden="true" className="absolute border-2 border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Contents />
    </div>
  );
}