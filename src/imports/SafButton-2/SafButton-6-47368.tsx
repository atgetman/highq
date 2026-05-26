function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Label text</p>
      </div>
    </div>
  );
}

export default function SafButton() {
  return (
    <div className="bg-[#123021] content-stretch flex items-start justify-center relative rounded-[4px] size-full" data-name="saf-button">
      <div aria-hidden="true" className="absolute border border-[#123021] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Contents />
    </div>
  );
}