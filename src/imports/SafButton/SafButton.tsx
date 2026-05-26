function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center w-full">
          <p className="leading-[normal]">sparkles</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">HighQ Assist</p>
      </div>
    </div>
  );
}

export default function SafButton() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[4px] size-full" data-name="saf-button">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Contents />
    </div>
  );
}