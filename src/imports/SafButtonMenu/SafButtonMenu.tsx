function RightIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 z-[1]" data-name="right-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px] z-[3]" data-name="contents">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[8px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] z-[2]">
            <p className="leading-[1.35]">ACME portal</p>
          </div>
          <RightIcon />
        </div>
      </div>
    </div>
  );
}

function ButtonArea() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[2]" data-name="button-area">
      <div className="bg-white content-stretch flex isolate items-start min-h-[32px] relative rounded-[4px] shrink-0 w-full z-[1]" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />
        <Contents />
      </div>
    </div>
  );
}

export default function SafButtonMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative size-full" data-name="saf-button+menu">
      <ButtonArea />
    </div>
  );
}