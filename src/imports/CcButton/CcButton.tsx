export default function CcButton() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[8px] size-full" data-name="cc-button">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
        <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
            <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Pro:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] text-center w-full">
              <p className="leading-[normal]">message-plus</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
          <p className="leading-[1.2]">New thread</p>
        </div>
      </div>
    </div>
  );
}