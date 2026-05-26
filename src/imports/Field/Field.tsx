function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="text-input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
            <p className="leading-[1.35]">Sample text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[32px] min-w-[32px] relative shrink-0" data-name="indicator">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/chevron-small-down">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

export default function Field() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="field">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <TextInput />
        <Indicator />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}