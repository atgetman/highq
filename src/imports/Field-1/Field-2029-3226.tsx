function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
        <p className="leading-[1.5]">input text</p>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="saf-button-embedded-icon">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
            <p className="leading-[normal]">xmark-large</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border-[#8a8a8a] border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] py-[8px] relative size-full">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default function Field() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex items-center relative rounded-[4px] size-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <TextInput />
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="saf-button-embedded-icon">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
            <p className="leading-[normal]">magnifying-glass</p>
          </div>
        </div>
      </div>
    </div>
  );
}