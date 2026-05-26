export default function SafSelect() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start pb-[28px] relative size-full" data-name="saf-select">
      <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[#212223] w-full z-[2]" data-name="labels">
        <div className="content-stretch flex font-['Source_Sans_3:SemiBold',sans-serif] font-semibold items-start relative shrink-0 text-[16px] w-full whitespace-nowrap" data-name="label">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[1.5]">Label</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[1.5]">*</p>
          </div>
        </div>
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[1.35]">Help text</p>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full z-[1]" data-name="field">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="text-input">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
                  <p className="leading-[1.5]">Sample text</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center min-h-[40px] min-w-[40px] relative shrink-0" data-name="indicator">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/chevron-small-down">
              <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
                <p className="leading-[normal]">chevron-down</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}