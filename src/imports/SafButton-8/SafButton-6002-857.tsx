export default function SafButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center relative rounded-[4px] size-full" data-name="saf-button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
        <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[14px] whitespace-nowrap">
          <p className="leading-[1.2]">Label text</p>
        </div>
      </div>
    </div>
  );
}